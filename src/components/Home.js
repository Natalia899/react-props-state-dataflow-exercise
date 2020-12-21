import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return (
            <div>
                {this.props.items && this.props.items.map((item, index) => {
                    return <Item key={index} item={item} shouldDiscount={this.props.shouldDiscount} />
                }
                )}
            </div>
        )
    }
}

export default Home