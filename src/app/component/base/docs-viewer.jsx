import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

const DocsViewer = ({path}) => {
  const docs = [
    { uri: path },
  ];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
};

export default DocsViewer;
