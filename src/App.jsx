import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Assets/Scss/app.scss';
import City from './Pages/City/City';
import Header from './Shared/Header/Header';

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="content-wrapper">
          <City />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
