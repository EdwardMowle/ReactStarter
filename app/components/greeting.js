import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className='Greeting'>
                Hello {this.props.name}!
            </div>
        )
    }
});
