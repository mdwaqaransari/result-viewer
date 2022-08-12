import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DataInputComponent from './components/data-input/DataInputComponent';
import Home from './components/Home/Home';
import ResultViewer from './components/result-viewer/ResultViewer';
import SearchResult from './components/Search/SearchResult';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/view-result" element={<ResultViewer/>} />
          <Route path="/search" element={<SearchResult/>} />
          <Route path="/add-data" element={<DataInputComponent/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
