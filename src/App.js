import { Route, Switch } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <div>
      <Container maxWidth="md">
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
