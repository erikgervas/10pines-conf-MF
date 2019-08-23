import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import axios from 'axios';

export default class App extends Component {

  /** Gets fired when the route changes.
   *  @param {Object} event    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  componentDidMount() {
    this.state = { serverUp: true };
    setInterval(this.pollLoomioServer.bind(this), 10000);
  }

  pollLoomioServer() {
    const timeout = setTimeout(() => this.notifyServerStatus(false), 5000);
    this.pingServer(timeout);
  }

  pingServer(timeout) {
    axios.get('/loomio/singleSpaEntry.js')
      .then(() => this.notifyServerStatus(true))
      .catch(() => this.notifyServerStatus(false))
      .finally(() => clearTimeout(timeout));
  }

  notifyServerStatus(status) {
		this.setState({ serverUp: status });
		document.dispatchEvent(new Event(`loomio/${status ? 'up' : 'down'}`));
	}

	render() {
    return (
      <div id="app">
        <Header/>
        <Router onChange={ this.handleRoute }>
          <Home path="/"/>
          <Profile path="/profile/" user="me"/>
          <Profile path="/profile/:user"/>
        </Router>
      </div>
    );
  }
}
