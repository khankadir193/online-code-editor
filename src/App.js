import logo from './logo.svg';
import './App.css';
import CodeEditor from './EditorComponents/CodeEditor';
import { useState } from 'react';

function App() {
  const [html, setHtml] = useState('<h1>Hello World</h1>');
  const [css, setCss] = useState('');
  const [javascript, setJavaScript] = useState('');

  return (
    <div className='container'>
      <div className='tabs'>
        <button>HTML</button>
        <button>CSS</button>
        <button>JavaScript</button>
      </div>
      <div className='code-editor-container'>
        <CodeEditor value={html} onChange={(value) => setHtml(value)} language="html" />
      </div>
    </div>
  );
}

export default App;
