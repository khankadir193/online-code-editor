import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor = ({editorHeight,language,value,onChange}) => {
  return (
    <MonacoEditor
     height='40vw'
     language={language}
     theme='vs-dark'
     value={value}
     width='90vw'
    
    />
  )
}

export default CodeEditor;