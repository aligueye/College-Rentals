import React, { Component } from "react"
import '../css/Home.css'
import '../css/Googlemaps.css'
import '../css/Results.css'
import SimpleMap from './SimpleMap'
import Houses from './Houses'

export default class Results extends Component {
    
    constructor(props) {
        super(props);
        console.log(this.props.location.search)
        this.state = {
            address: this.getParameterByName('address'),
            center: {
                lat: Number(this.getParameterByName('lat')),
                lng: Number(this.getParameterByName('lng')),
            },
            zoom: 13
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
            <div>
                <div className="results-title">Results</div>
                <div className="house-and-map">
                    <div className="houses-container">
                        <Houses></Houses>
                    </div>
                    <SimpleMap 
                        center={this.state.center}
                        zoom={this.state.zoom}
                    />
                </div>
            </div>
        )
    }
}