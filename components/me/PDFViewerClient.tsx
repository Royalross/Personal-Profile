'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PDFViewerProps {
  fileUrl: string;
}

export default function PDFViewerClient({ fileUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber] = useState<number>(1);

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex justify-center py-8">
      <div className="max-w-[600px] w-full">
        <Document file={fileUrl} onLoadSuccess={onLoadSuccess}>
          <Page pageNumber={pageNumber} width={600} />
        </Document>
        <p className="text-center text-gray-600 mt-2">
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
}
