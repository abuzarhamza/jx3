import React from 'react';

export default class ErrorMessage extends React.Component {

    render() {
        return <div> error : {this.props.errorMessage} </div>;
    }
}

ErrorMessage.defaultProps = {
    errorMessage: 'some error happened. It seems we do not have access :('
};