import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import NavBar from './navbar';
import AboutPage from './pages/about-page';
import ArticlePage from './pages/article-page';
import ArticleListPage from './pages/article-list-page';
import HomePage from './pages/home-page'
import PageNotFound from './pages/page-not-found'
import NewPage from './pages/new-page'


function App() {
  return (
    <Router>

    <div className="App">
        <NavBar />
            <div id="page-body">
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/article/:name" component={ArticlePage} />
                    <Route path="/articlelistpage" component={ArticleListPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/new" component={NewPage} />
                    <Route component={PageNotFound} />                       
                </Switch>
         
        </div>
    </div>        
    </Router>

  );
}

export default App;
