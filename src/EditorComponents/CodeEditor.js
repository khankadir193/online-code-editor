import React, { useRef,useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import '../App.css';
import debounce from 'lodash/debounce'; // Use lodash debounce or implement a custom debounce function

const CodeEditor = ({ language, value, onChange }) => {
  const editorRef = useRef(null);

  // Debounced handleResize function to limit the rate of calls to layout()
  const handleResize = debounce(() => {
    if (editorRef.current) {
      editorRef.current.layout();  // Recalculate layout when window resizes
    }
  }, 100);  // Adjust the debounce time as needed

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };
  return (
    <MonacoEditor
      height='40vw'
      language={language}
      theme='vs-dark'
      value={value}
      onChange={(newValue) => { onChange(newValue) }}
    //  width='85vw'
      onMount={handleEditorDidMount}

    />
  )
}

export default CodeEditor;