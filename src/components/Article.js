import React, { Component } from 'react';
import Wardrobe from './Wardrobe';

class Article extends Component {
  render() {
    return(<div>{this.props.info.color} {this.props.info.type}</div>)

  }
}

export default Article