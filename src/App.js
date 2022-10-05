import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <h1>Hello World</h1>
    </ Suspense>

  );
}

export default App;
