import './App.css';
import Header from './components/header';
import Home from './components/home';
import Article from './components/article';
import NewArticle from './components/newArticle';
import Detail from './components/detail';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="article" element={<Article />} />
          <Route path="create" element={<NewArticle />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
