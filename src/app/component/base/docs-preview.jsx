'use client'
import React, { useState } from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

const DocxViewer = ({ documents }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDocIndex, setActiveDocIndex] = useState(0);

  const openModal = (index) => {
    setActiveDocIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling when modal is closed
  };

  const downloadDocument = (doc) => {
    const link = document.createElement('a');
    link.href = doc.uri;
    link.download = doc.fileName || 'document';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Document Viewer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">{doc.fileName || `Document ${index + 1}`}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => openModal(index)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View
              </button>
              <button
                onClick={() => downloadDocument(doc)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Tailwind CSS Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              {/* <h2 className="text-2xl font-bold">
                {documents[activeDocIndex].fileName || `Document ${activeDocIndex + 1}`}
              </h2> */}
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="h-[calc(100vh-200px)]">
              <DocViewer 
                documents={[documents[activeDocIndex]]} 
                pluginRenderers={DocViewerRenderers} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocxViewer;