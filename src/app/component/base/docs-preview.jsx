"use client";
import React, { useState } from "react";
import { Download, FileText, Eye, Loader2, X } from "lucide-react";
import DocsViewer from "./docs-viewer";
import Image from "next/image";

const DocxViewer = ({ documents, showTitle = true, imageURL = "" }) => {
  const [loading, setLoading] = useState({});
  const [downloadStatus, setDownloadStatus] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  if (!documents || documents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-xl">
        <FileText className="h-16 w-16 text-gray-400 mb-4" aria-hidden="true" />
        <p className="text-lg text-gray-500">No documents available</p>
      </div>
    );
  }

  const handleDownload = async (doc) => {
    setLoading((prev) => ({ ...prev, [doc.fileName]: true }));
    try {
      const response = await fetch(`/api/download?filePath=${doc.uri}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = doc.uri.split("/").pop();
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        setDownloadStatus("Download successful");
      } else {
        setDownloadStatus("Download failed");
      }
    } catch (error) {
      setDownloadStatus("Download failed");
      console.error("Download error:", error);
    } finally {
      setLoading((prev) => ({ ...prev, [doc.fileName]: false }));
    }
  };

  const handleView = (doc) => {
    setSelectedDoc(doc);
    setModalOpen(true);
  };

  return (
    <div className={`w-full p-2 ${modalOpen ? "" : "space-y-6"}`}>
      {showTitle && (
        <h2 className="text-xl font-bold text-gray-900">
          Additional Documents
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div
          key={doc.fileName + doc.uri}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <div
            className="bg-gradient-to-br from-blue-200 to-teal-100 relative overflow-hidden"
            style={{ height: '150px' }} // set a height for the container
          >
            {imageURL ? (
              <div className="absolute inset-0">
                <Image
                  src={imageURL}
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <FileText
                  className="h-16 w-16 text-teal-800"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 truncate mb-4">
              {doc.fileName}
            </h3>
        
            <div className="flex space-x-2">
              <button
                className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-800 transition-colors duration-200"
                onClick={() => handleDownload(doc)}
                disabled={loading[doc.fileName]}
                aria-label={`Download ${doc.fileName}`}
              >
                {loading[doc.fileName] ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Download className="h-5 w-5 mr-2" />
                )}
                Download
              </button>
              <button
                className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-200"
                onClick={() => handleView(doc)}
                aria-label={`View ${doc.fileName}`}
              >
                <Eye className="h-5 w-5 mr-2" />
                View
              </button>
            </div>
          </div>
        </div>
        
        ))}
      </div>

      {modalOpen && selectedDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[100vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedDoc.fileName}</h2>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <DocsViewer path={selectedDoc.uri} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DocxViewer;
