import Loadable from 'react-loadable';
import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component';

import './Assets/Scss/app.scss';
import 'spinkit/spinkit.min.css';
import { PageLoader } from './Components/Loader/Loader';
import Header from './Shared/Header/Header';
import Settings from './Shared/Settings/Settings';
import ThemeContext from './Context/ThemeContext';

const LoadableCity = Loadable({
  loader: () => import(/* webpackChunkName: "city" */ './Pages/City/City'),
  loading() {
    return <PageLoader />;
  }
});

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      theme: 'light'
    };
  }

  updateThemeContext = (theme) => {
    this.setState(
      {
        theme
      },
      () => {
        if (theme === 'dark') {
          document.body.classList.add('theme-dark');
        } else {
          document.body.classList.remove('theme-dark');
        }
      }
    );
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ReactNotification />
        <Header />
        <div className="content-wrapper">
          <LoadableCity />
        </div>
        <Settings updateThemeContext={this.updateThemeContext} />
      </ThemeContext.Provider>
    );
  }
}

export default App;
