import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export default class LocationSearchInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
        address: '',
        center: {
          lat: 1,
          lng: 13,
        }
    };
  }
  
  // searchOptions = {
  //   types: ['university']
  // }

  handleChange = address => {
    this.setState({ address });
  };

  // clickHandle() {
  //   this.handleSelect(this.state.address)
  // } FIXME

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng}) => this.props.callBack({ address, lat, lng}))
      .catch(error => console.error('Error', error))
      // calls back to parent with place data on [ enter ] press
      
  };

  

  render() {
    return (
      <div>
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        // searchOptions={this.searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Enter and select college or place',
                className: 'location-search-input',
              })} 
            />

            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div 
                    key={index}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <div className="autocomplete-dropdown-container--description">
                      <span>{suggestion.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete></div>
    );
  }
}