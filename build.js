const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Remove HTML comments
html = html.replace(/<!--[\s\S]*?-->/g, '');

// Remove the access_key input line
html = html.replace(/<input[^>]*name="access_key"[^>]*>\s*/g, '');

// Update script tag
html = html.replace('<script src="script.js"></script>', '<script src="script.min.js"></script>');

fs.writeFileSync('index.html', html);
console.log("HTML processed successfully.");
