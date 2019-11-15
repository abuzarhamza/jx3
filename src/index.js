import React from 'react';
import ReactDom from 'react-dom';
import ErrorMessage from './ErrorMessage';

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
        if (this.state.errorMessage)  {
            return <ErrorMessage errorMessage={this.state.errorMessage}/>;
        }
        if (this.state.lat) {
            return(
                <div>
                    lat:  {this.state.lat} , lon: {this.state.lon}
                </div>
            );
        }
        return <div> Loading ...</div>;
    }
}
ReactDom.render(<App />, document.querySelector('#root'));