import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import NavBar from './navbar';
import AboutPage from './pages/about-page';
import ArticlePage from './pages/article-page';
import ArticleListPage from './pages/article-list-page';
import HomePage from './pages/home-page'


function App() {
  return (
    <Router>

    <div className="App">
        <NavBar />
            <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/article/:name" component={ArticlePage} />
            <Route path="/articlelistpage" component={ArticleListPage} />
            <Route path="/about" component={AboutPage} />            
        </div>
    </div>        
    </Router>

  );
}

export default App;
