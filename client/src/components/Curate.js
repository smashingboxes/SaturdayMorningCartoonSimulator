import React, {Component} from 'react';
import NavLink from './NavLink';

class Curate extends Component {
  render() {
    return (
      <div>
        <h2>Curate</h2>
        <ul>
          <li><a href="/curate/show">show</a></li>
          <li><a href="/curate/block">block</a></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export default Curate;
