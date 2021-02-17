import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView } from './components/Home';
import { AboutView } from './components/About';
import { NavView } from './components/Nav';
import { FooterView } from './components/Footer';
import { SubscribeView } from './components/Subscribe';
import GlobalStyle from './components/globalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <NavView></NavView>
      <Switch>
        <Route exact path='/'>
          <HomeView></HomeView>
        </Route>
        <Route exact path='/about'>
          <AboutView></AboutView>
        </Route>
        <Route exact path='/subscribe'>
          <SubscribeView></SubscribeView>
        </Route>
      </Switch>
      <FooterView></FooterView>
    </Router>
  );
}

export default App;
