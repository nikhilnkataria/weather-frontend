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

export const LoadableCity = Loadable({
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
      <ThemeContext.Provider value={this.state.theme} data-test="context-provider">
        <ReactNotification data-test="react-notification" />
        <Header data-test="header" />
        <div className="content-wrapper" data-test="content-wrapper">
          <LoadableCity data-test="loadable-city" />
        </div>
        <Settings data-test="setting-component" updateThemeContext={this.updateThemeContext} />
      </ThemeContext.Provider>
    );
  }
}

export default App;
