import React from 'react';

var Preview = React.createClass({

    propTypes: {
        recipient: React.PropTypes.string,
        subject: React.PropTypes.string,
        message: React.PropTypes.string
    },

    render: function() {
        return (
            <div className="Preview">
              <div className="Preview-message">
                  <h1>To: {this.props.recipient}</h1>
                  <p>Subject: {this.props.subject}</p>
                  <p>Message: {this.props.message}</p>
              </div>
              <div className="Preview-tracker">
                  <p>You have made {this.props.changes} updates so far.</p>
              </div>
            </div>
        )
    }

});

export default Preview;
