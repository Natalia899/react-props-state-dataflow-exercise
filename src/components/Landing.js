import React, { Component } from 'react';

class Landing extends Component {
    /* your code here */


    render() {
        return (
            <div>
<h4>Welcome{this.props.user}</h4>
<h4>The hottest item is {this.props.store.filter(i => {return i.hottest === true}).map(h => {return <div key={Math.random()}>{h.item} {h.price}</div> })} </h4>

            </div>
        )

    }
}

export default Landing