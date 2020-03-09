import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';

class App extends Component {
  render() {
    return (
      <div>
        <Autocomplete
          onPlaceSelected={place => {
            console.log(place);
          }}
          types={['(regions)']}
          componentRestrictions={{ country: 'us' }}
        />
      </div>
    );
  }
}

export default App;
