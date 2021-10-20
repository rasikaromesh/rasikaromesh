import './editorComponent.scss';
import slate from '@react-page/plugins-slate';
import image from '@react-page/plugins-image';
import Editor from '@react-page/editor';
import spacer from '@react-page/plugins-spacer';
import divider from '@react-page/plugins-divider';
import { ReactComponent as DownloadIcon } from '../../icons/file_download_black_24dp.svg';

import { useState } from 'react';

const cellPlugins = [slate(), image, spacer, divider];

const EditorComponent = () => {
  const [value, setValue] = useState(null);

  const downloadFile = async () => {
    let data = value.rows[0].cells[0].dataI18n.default.slate;
    let title = null;
    for (const d of data) {
      if (d.type.includes('HEADINGS')) {
        title = d.children[0].text;
        break;
      }
    }

    console.log(title);
    const fileName = title ? title : 'Title is null';
    const json = JSON.stringify(value);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="editor-wrapper">
      <Editor
        cellPlugins={cellPlugins}
        value={value}
        onChange={setValue}
        readOnly={false}
      />
      <span onClick={downloadFile} className="download-icon">
        <DownloadIcon />
      </span>
    </div>
  );
};

export default EditorComponent;