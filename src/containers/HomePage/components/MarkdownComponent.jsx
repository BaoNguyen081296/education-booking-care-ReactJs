import React, { useCallback } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function MarkdownComponent({ onChange }) {
  const handleEditorChange = useCallback(
    ({ html, text }) => {
      onChange({ html, text });
    },
    [onChange]
  );
  return (
    <MdEditor
      style={{ height: '500px' }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
    />
  );
}
export default MarkdownComponent;
