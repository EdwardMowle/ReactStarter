import React from 'react';

class Greeting extends React.Component {

    render() {
        return (
            <div className='Greeting'>
                <h1>Hello {this.props.name}!</h1>
                <p>{this.props.message}</p>
                <p>You've made {this.props.counter} updates so far.</p>
            </div>
        )
    }

};

Greeting.propTypes = {
    name: React.PropTypes.string,
    message: React.PropTypes.string,
    counter: React.PropTypes.number
};

export default Greeting;
