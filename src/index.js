import React from 'react';
import ReactDom from 'react-dom';
//import s

class App extends React.Component {

    state = { lat: null,
        lon: null,
        errorMessage: null,
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition((pos)=> {
            this.setState({lat: pos.coords.latitude, lon: pos.coords.longitude});
        }, (err)=> {
            this.setState({errorMessage: err.message});
        })
    }

    render() {
        if (this.state.lat) {
            return(
                <div>
                    lat:  {this.state.lat} , lon: {this.state.lon}
                </div>
            );
        } else if (this.state.errorMessage)  {
            return <div> error : {this.state.errorMessage}</div>;
        } else {
            return <div>Loading....</div>;
        }
    }
}
ReactDom.render(<App />, document.querySelector('#root'));