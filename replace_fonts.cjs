const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Replace font-bold, font-extrabold, font-black, font-semibold with font-light
            content = content.replace(/font-(bold|extrabold|black|semibold)/g, 'font-light');
            
            // Replace text-white with text-foreground, except in specific cases if needed
            content = content.replace(/text-white/g, 'text-foreground');
            
            // Also, replace bg-white/text-black if any old components have them
            content = content.replace(/bg-white/g, 'bg-background');
            content = content.replace(/text-black/g, 'text-foreground');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

processDir(path.join(__dirname, 'frontend', 'eLearning', 'src'));
console.log('Replacement complete.');
