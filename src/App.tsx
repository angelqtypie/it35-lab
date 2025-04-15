import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

import Login from './pages/Login';
import Menu from './pages/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';

setupIonicReact();
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('loggedIn') === 'true' ? (
        <Component {...props} />
      ) : (
        <Redirect to="/it35-lab/" />
      )
    }
  />
);

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu />
      <IonRouterOutlet id="main-content">
        <Route exact path="/it35-lab/" component={Login} />
        <PrivateRoute path="/it35-lab/app/home" component={Home} />
<PrivateRoute path="/it35-lab/app/about" component={About} />
<PrivateRoute path="/it35-lab/app/details" component={Details} />

        <Redirect exact from="/it35-lab/app" to="/it35-lab/app/home" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
export default App;