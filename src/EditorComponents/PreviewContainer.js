import React, { useEffect, useRef } from 'react';
import '../App.css';

const PreviewContainer = ({ html, css, javascript }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const document = iframeRef.current.contentDocument;
    const documentContents = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${javascript}</script>
        </body>
      </html>
    `;
    document.open();
    document.write(documentContents);
    document.close();
  }, [html, css, javascript]);

  return (
    <div className="preview-container">
      <iframe
        ref={iframeRef}
        title="Live Preview"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default PreviewContainer;
