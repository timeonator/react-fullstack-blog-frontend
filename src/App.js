import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import NavBar from './navbar';
import AboutPage from './pages/about-page';
import ArticlePage from './pages/article-page';
import ArticleList from './pages/article-list';
import HomePage from './pages/home-page'

function App() {
  return (
    <Router>

    <div className="App">
        <NavBar />
            <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/article" component={ArticlePage} />
            <Route path="/articlelist" component={ArticleList} />
            <Route path="/about" component={AboutPage} />            
        </div>
    </div>        
    </Router>

  );
}

export default App;
