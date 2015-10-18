import React from 'react';

var Field = React.createClass({

    propTypes: {
        value: React.PropTypes.string,
        change: React.PropTypes.func.isRequired
    },

    change: function(e) {
        let value = e.target.value;
        this.props.change( value );
    },

    render: function() {
        return (
            <fieldset className="Field">
                <label className="Field-label" for={this.props.name}>{this.props.name}</label>
                <input className="Field-input" name={this.props.name} value={this.props.value} onChange={this.change} />
            </fieldset>
        );
    }

});

export default Field;
