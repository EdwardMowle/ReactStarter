import React from 'react';

class Update extends React.Component {

    change(e) {
        let name = e.target.value;
        this.props.change( name );
    }

    render() {
        return (
            <input className='Update' value={this.props.text} onChange={this.change.bind(this)} />
        );
    }

};

Update.propTypes = {
    text: React.PropTypes.string,
    change: React.PropTypes.func.isRequired
};

export default Update;
