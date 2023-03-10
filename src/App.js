import React, { useState } from 'react';
import './App.css';

function App() {
  const [content, setContent] = useState('Hello World!');

  return (
    <div
      className="app"
      // 方便测试用例中获取 DOM 节点
      data-testid="container"
      onClick={() => {
        setContent('Hello Jack!');
      }}
    >
      {content}
    </div>
  );
}
export default App;