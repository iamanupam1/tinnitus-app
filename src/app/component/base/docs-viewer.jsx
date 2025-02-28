"use client";
import React, { useEffect, useRef } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import { renderAsync } from "docx-preview"; //

const DocsViewer = ({ path }) => {
  function getFileType(filePath) {
    if (!filePath) return "Unknown";
    const ext = filePath.split(".").pop().toLowerCase();
    if (ext === "docx") return "DOCX";
    if (ext === "pdf") return "PDF";
    return "Unknown";
  }

  const PDFViewer = () => {
    const docs = [{ uri: path }];
    return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
  };

  const DOCXViewer = () => {
    const viewerRef = useRef(null);
    useEffect(() => {
      const loadDocx = async () => {
        try {
          const response = await fetch(path);
          if (!response.ok) throw new Error("Failed to fetch file");
          const arrayBuffer = await response.arrayBuffer();

          if (viewerRef.current) {
            viewerRef.current.innerHTML = "";
            await renderAsync(arrayBuffer, viewerRef.current, null);
          }
        } catch (error) {
          console.error("Error loading DOCX:", error);
          if (viewerRef.current) {
            viewerRef.current.innerHTML = `<p style="color: red">Error loading document: ${error.message}</p>`;
          }
        }
      };

      loadDocx();
    }, [path]);

    return (
      <div
        ref={viewerRef}
        className="docx-container"
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "400px",
          overflow: "auto",
        }}
      >
        <p>Loading document...</p>
      </div>
    );
  };

  const fileType = getFileType(path);

  if (fileType === "PDF") {
    return <PDFViewer />;
  } else if (fileType === "DOCX") {
    return <DOCXViewer />;
  } else {
    return <p>Not a Valid File</p>;
  }
};

export default DocsViewer;
