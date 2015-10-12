import React from 'react';
import Update from './update';
import Greeting from './greeting';

class App extends React.Component {

    constructor( props ) {
        super( props );
        this.state = this.getState();
    }

    // State

    getState() {
        return {
            name: 'World',
            message: 'This is a test message.',
            counter: 0
        }
    }

    // Actions

    setName( newName ) {
        this.incCounter();
        this.setState({
            name: newName
        });
    }

    setMessage( newMessage ) {
        this.incCounter();
        this.setState({
            message: newMessage
        });
    }

    incCounter() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
                <Update text={this.state.name} change={this.setName.bind(this)} />
                <Update text={this.state.message} change={this.setMessage.bind(this)} />
                <Greeting { ...this.state } />
            </div>
        )
    }

};

export default App;
