import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IpAdress from "./IpAdress.js";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit exhibitTitle="IPv4">
            <IpAdress ipType="ipv4"></IpAdress>
          </Exhibit>
          <Exhibit exhibitTitle="IPv6">
            <IpAdress ipType="ipv6"></IpAdress>
          </Exhibit>
            </div>
        );
    }
}

export default App;
