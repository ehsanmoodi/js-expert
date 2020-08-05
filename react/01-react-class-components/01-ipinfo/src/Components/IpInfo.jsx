import React, {Component} from 'react';
import './style.css';

export default class IpInfo extends Component {

  render() {
    return (
      <div className="card-container">
          <span className="info">Info</span>
          <img className="round" src="./br.svg" alt="brazil" />
          <h3>Brazil</h3>
          <h6>Guarulhos</h6>
          <p>isp: Akamai International B.V.</p>
          <div className="footer">
              <p>IP: 2.21.90.0</p>
              <p>latitude: -23.4543395</p>
              <p>longitude: -46.5336678</p>
          </div>
      </div>
    );
  }

}