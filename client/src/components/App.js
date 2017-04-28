import React, { Component } from 'react';
import NavLink from './NavLink'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    };
  }

  // componentDidMount(){
  //   fetch('http://localhost:3000/shows')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         shows: responseJson
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  render() {
    return (
      <div className="container">
        <header>
          <ul className="main-nav">
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/watch">Watch</NavLink></li>
            <li><NavLink to="/curate">Curate</NavLink></li>
          </ul>
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App;
