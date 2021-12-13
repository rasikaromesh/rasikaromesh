import './editorComponent.scss';
import { ReactComponent as DownloadIcon } from '../../icons/file_download_black_24dp.svg';

const EditorComponent = () => {
  const downloadFile = async () => {
    let title = null;

    console.log(title);
    const fileName = title ? title : 'Title is null';
    const link = document.createElement('a');
    link.download = fileName + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="editor-wrapper">
      <span onClick={downloadFile} className="download-icon">
        <DownloadIcon />
      </span>
    </div>
  );
};

export default EditorComponent;
