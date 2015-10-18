import React from 'react';
import Field from './field';
import Preview from './preview';

var App = React.createClass({

    // State

    getInitialState: function() {
        return {
            recipient: '',
            subject: '',
            message: '',
            changes: 0
        }
    },

    // Actions

    setRecipient: function( value ) {
        this.incrementCounter();
        this.setState({ recipient: value });
    },

    setSubject: function( value ) {
        this.incrementCounter();
        this.setState({ subject: value });
    },

    setMessage: function( value ) {
        this.incrementCounter();
        this.setState({ message: value });
    },

    incrementCounter: function() {
        this.setState({ changes: this.state.changes + 1 })
    },

    // Render

    render: function() {
        return (
            <div className="App">
              <div className="App-fields">
                  <Field name="Recipient" value={this.state.recipient} change={this.setRecipient} />
                  <Field name="Subject" value={this.state.subject} change={this.setSubject} />
                  <Field name="Message" value={this.state.message} change={this.setMessage} />
              </div>
              <div className="App-preview">
                  <Preview { ...this.state } />
              </div>
            </div>
        )
    }

});

export default App;
