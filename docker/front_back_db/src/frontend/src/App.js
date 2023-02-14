import React, { useEffect, useState } from "react";

function App() {

  async function apiTest() {
    const res = await fetch('http://localhost:8000/api/');
    const json = await res.json();
    setTodos(json);
}

  return (
    <div>
      <h1>Demo App</h1>
      <button onClick={apiTest}>API Test</button>
    </div>
  );
}

export default App;
