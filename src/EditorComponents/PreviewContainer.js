import React, { useEffect, useRef } from 'react';
import '../App.css';
import './Preview.css';

const PreviewContainer = ({ html, css, javascript }) => {
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

    return (
        <div className="preview-container">
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
};

export default PreviewContainer;
