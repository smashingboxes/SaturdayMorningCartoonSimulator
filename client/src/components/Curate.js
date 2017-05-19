import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

Curate.propTypes = {
  children: PropTypes.object
};

export default Curate;
