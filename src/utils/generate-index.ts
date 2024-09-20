import fs from 'fs';
import path from 'path';

// Utility function to convert kebab-case to PascalCase, and handle leading numbers to words
const toPascalCase = (str: string): string => {
  return str
    .split('-')               // Split by hyphen
    .map(word => {
      // If the word starts with a number, replace it with the word equivalent
      if (/^\d/.test(word)) {
        return convertNumberToWord(word.charAt(0)) + word.slice(1);
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');                 // Join into a single string
};

// Utility function to convert leading numbers to words (e.g., '1' -> 'One')
const convertNumberToWord = (num: string): string => {
  const numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  return numbers[parseInt(num)] || num; // Return the word if number found, else the number itself
};

// Define the directory where your components are located and the output file path
const componentsDir = './src/components'; // Adjust path as needed
const outputFile = './src/index.ts';      // Path for the generated index.ts

// Read all component files in the directory
fs.readdir(componentsDir, (err, files) => {
  if (err) throw err;

  // Filter out non-TSX and non-JS files and generate export lines
  const exports = files
    .filter(file => file.endsWith('.tsx') || file.endsWith('.js')) // Process .tsx and .js files
    .map(file => {
      const componentNameKebab = path.basename(file, path.extname(file));   // Get component name (without extension)
      const componentNamePascal = toPascalCase(componentNameKebab);         // Convert to PascalCase

      return `export { default as ${componentNamePascal} } from './components/${componentNameKebab}.js';`; // ESM export
    })
    .join('\n');

  // Write the generated exports to the index.ts file
  fs.writeFileSync(outputFile, exports, 'utf8');
  console.log('✅ Generated index.ts file with exports successfully!');
});