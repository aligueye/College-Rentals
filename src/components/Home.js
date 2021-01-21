import React, { Component } from "react"
import '../css/Home.css'
import '../css/Googlemaps.css'
import LocationSearchInput from './LocationSearchInput'

export default class Home extends Component {

    state = {
        address: null,
        center: {
            lat: null,
            lng: null, 
        }
        
    }
    // Callback function: pass addy from locationSearch here
    test() {
        console.log(this.state.address)
        console.log(this.state.center.lat)
        console.log(this.state.center.lng)
    }

    callBackFunction = (addyData) => {
       this.setState({
        address: addyData.address,
        center: {
            lat: addyData.lat, 
            lng: addyData.lng 
        },
       })
        
        // test
        // this.test()
        // console.log("Called back")
    }

    onGo = () => {
        console.log(this.props)
        const path = `/results?address=${this.state.address}&lat=${this.state.center.lat}&lng=${this.state.center.lng}`
        const history = this.props.history

        history.push(path)  
    }

    render() {
        return (
            <div>
                <div className='search-container'>
                    <div className="title">
                        Find your spot
                    </div>
                    <div className="search">
                        <LocationSearchInput
                            callBack={this.callBackFunction}
                            >
                        </LocationSearchInput>
                        <button
                            className = 'go-button'
                            disabled = {!this.state.address}
                            onClick = {this.onGo}>
                            GO
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}