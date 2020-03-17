import Loadable from 'react-loadable';
import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component';

import './Assets/Scss/app.scss';
import 'spinkit/spinkit.min.css';
import { PageLoader } from './Components/Loader/Loader';
import Header from './Shared/Header/Header';

const LoadableCity = Loadable({
  loader: () => import(/* webpackChunkName: "city" */ './Pages/City/City'),
  loading() {
    return <PageLoader />;
  }
});

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <ReactNotification />
        <Header />
        <div className="content-wrapper">
          <LoadableCity />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
