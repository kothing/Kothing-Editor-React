import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import AppLayout from './Layout';
import Home from './pages/Home';
import Editor from './pages/Editor';
import './App.css';

const { Header, Sider, Content } = AppLayout;

function App() {
  return (
    <Router>
      <div className="App">
        <AppLayout>
          <Header>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </Header>
          <Sider style={{ height: '70vh' }}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/editor">Editor</Link>
              </li>
            </ul>
          </Sider>
          <Content>
            <main className="App-main">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/editor">
                  <Editor />
                </Route>
              </Switch>
            </main>
          </Content>
        </AppLayout>
      </div>
    </Router>
  );
}

export default App;
