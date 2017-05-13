import React, { Component } from 'react';
import NavLink from './NavLink';
import LoginGoogleContainer from '../containers/login/LoginGoogleContainer';
import Immutable from 'immutable';

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
    const {actions, login} = this.props;
    const userId = login.getIn(['user', 'id']);
    return (
      <div className="container">
        <header>
          <ul className="main-nav">
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/watch">Watch</NavLink></li>
            <li><NavLink to="/curate">Curate</NavLink></li>
          </ul>
          { userId ?
            //TODO: make this a component
            <div onClick={actions.userLogout}>
              logout
            </div>
            :
            <div>
              <LoginGoogleContainer />
            </div>
          }

        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App;
