import React from 'react';
import './Preview.css';

const Preview = ({css, html, javascript}) => {
    const combinedCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${javascript}</script>
      </body>
    </html>`;
    {/* live preview code */ }

    return (
        <div>
            <h3>Live Preview</h3>
            <iframe
                srcDoc={combinedCode}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
            // height="100%"
            />
        </div>
    );
}

export default Preview;