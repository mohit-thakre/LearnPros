import React from 'react';


const PDFopener = ({ pdfUrl,resume=false }) => {
  
  const openPDF = () => {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(
        `<html>
          <head>
            <title>LearnPros</title>
            
          </head>
          <body style="margin:0;">
            <iframe 
              src="${pdfUrl}" 
              frameborder="0" 
              style="border:none; width:100%; height:100vh;" 
              allowfullscreen></iframe>
          </body>
        </html>`
      );
      newWindow.document.close();
    }
  };

  return (
    <button onClick={openPDF}>
    { resume ? "Download Docx" : "Open PDF" }
    </button>
  );
};

export default PDFopener;
