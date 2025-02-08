import { useEffect, useRef } from "react";

const DocsViewer = ({ path }) => {
  const viewer = useRef(null);

  useEffect(() => {
    if (!path) return;

    import("@pdftron/webviewer").then(() => {
      WebViewer(
        {
          path: "/lib",
          initialDoc: path,
          readOnly: true,
          fullAPI: false,
          enableRedaction: false,
          enableMeasurement: false,
          enableAnnotations: false,
          enableFilePicker: false,
          showLocalFilePicker: false,
          hideTopBar: true,
          hideToolbar: true,
          hideAnnotationPanel: true,
        },
        viewer.current
      );
    });
  }, [path]);

  if (!path) return null;

  return (
    <div className="MyComponent">
      <div className="webviewer" ref={viewer} style={{ height: "80vh" }}></div>
    </div>
  );
};

export default DocsViewer;
