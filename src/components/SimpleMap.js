import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import { houseData } from '../data.js'

class SimpleMap extends Component {

  constructor(props) {
    super(props);

    this.state = { 
        address: this.getParameterByName('address'),
        center: {
          lat: Number(this.getParameterByName('lat')),
          lng: Number(this.getParameterByName('lng')),
        },
        zoom: 1
    }
  
  }

getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ position: 'sticky', top: '0', height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBugwpM-BfMDYNgakLpUogC0JHKyEabXug' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
            {/* map these to houses all house adresses */}
            {houseData.map((data, key) => {
                return (
                    <div className="home-icon" key={key}
                         lat={data.lat}
                         lng={data.lng}>

                        <div><img src={data.icon} /></div>
                    </div>
                )
            })}

            <Marker 
                text={this.state.address}
                lat={this.state.center.lat}
                lng={this.state.center.lng}

            />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;