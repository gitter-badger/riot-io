import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

class NavBar extends Component {
  render() {
    return(
      <ul className="nav nav-tabs">
        <li><IndexLink to ="/" activeClassName="active"> Home </IndexLink></li>
        <li><IndexLink to ="/mqtt_logs" activeClassName="active"> MQTT Logs </IndexLink></li>
      </ul>
    )
  }
}

export default NavBar
