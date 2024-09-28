import logo from './logo.svg';
import './App.css';
import CodeEditor from './EditorComponents/CodeEditor';
import { useState } from 'react';

function App() {
  const [html, setHtml] = useState('<h1>Hello World</h1>');
  const [css, setCss] = useState('body { background-color: lightblue; }');
  const [javascript, setJavaScript] = useState('console.log("Hello World");');
  const [activeTab, setActiveTab] = useState('html'); // Default active tab is 'html'

  const renderEditor = () => {
    switch (activeTab) {
      case 'html':
        return <CodeEditor value={html} onChange={(value) => setHtml(value)} language="html" />
      case 'css':
        return <CodeEditor value={css} onChange={(value) => setCss(value)} language="css" />
      case 'js':
        return <CodeEditor value={javascript} onChange={(value) => setJavaScript(value)} language="javascript" />
      default:
        return <CodeEditor value={html} onChange={(value) => setHtml(value)} language="html" />
    }
  }


  return (
    <div className='container'>
      <div className='tabs'>
        <button onClick={() => { setActiveTab('html') }}>HTML</button>
        <button onClick={() => { setActiveTab('css') }}>CSS</button>
        <button onClick={() => { setActiveTab('js') }}>JavaScript</button>
      </div>
      <div className='code-editor-container'>
        {renderEditor()}
      </div>
    </div>
  );
}

export default App;
