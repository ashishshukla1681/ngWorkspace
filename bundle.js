const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/web-components/runtime.js',
        './dist/web-components/polyfills.js',
        './dist/web-components/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/my-element.js');
    await fs.copyFile('./dist/web-components/styles.css', 'elements/styles.css')    
})()