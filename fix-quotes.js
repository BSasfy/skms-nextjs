import fs from "fs";
import path from "path";

// Files that need fixing based on the build errors
const filesToFix = [
  "src/app/adults-krav-maga/page.tsx",
  "src/app/classes/krav-maga-glasgow-west-end/page.tsx",
  "src/app/join/page.tsx",
  "src/app/kids-krav-maga/page.tsx",
  "src/app/private-corporate-tuition/page.tsx",
  "src/app/students/page.tsx",
  "src/app/team/barbara-sasfy/page.tsx",
  "src/app/team/robert-bennett/page.tsx",
  "src/app/testimonials/page.tsx",
  "src/app/trial/page.tsx",
  "src/app/womens-self-defence-classes/page.tsx",
];

/**
 * @param {string} filePath
 */

function fixQuotesInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Replace unescaped apostrophes and quotes in JSX text content
    // This regex matches apostrophes and quotes that are inside JSX text content
    // but not inside JSX attributes or JavaScript expressions

    // Replace apostrophes in JSX text content
    content = content.replace(
      /(?<=>)([^<]*?)'([^<]*?)(?=<)/g,
      (match, before, after) => {
        return before + "&apos;" + after;
      },
    );

    // Replace quotes in JSX text content
    content = content.replace(
      /(?<=>)([^<]*?)"([^<]*?)(?=<)/g,
      (match, before, after) => {
        return before + "&quot;" + after;
      },
    );

    // Also handle cases where quotes/apostrophes are at the beginning or end of text content
    content = content.replace(/(?<=>)\s*'([^<]*?)(?=<)/g, (match, text) => {
      return "&apos;" + text;
    });

    content = content.replace(/(?<=>)([^<]*?)'\s*(?=<)/g, (match, text) => {
      return text + "&apos;";
    });

    content = content.replace(/(?<=>)\s*"([^<]*?)(?=<)/g, (match, text) => {
      return "&quot;" + text;
    });

    content = content.replace(/(?<=>)([^<]*?)"\s*(?=<)/g, (match, text) => {
      return text + "&quot;";
    });

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Fixed quotes in ${filePath}`);
  } catch (error) {
    console.error(
      `Error fixing ${filePath}:`,
      /** @type {any} */ (error).message,
    );
  }
}

// Fix all files
filesToFix.forEach(fixQuotesInFile);
console.log("Quote fixing completed!");
