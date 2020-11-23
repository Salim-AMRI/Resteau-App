import React, { Component } from 'react';
import Food from "../food";
import Foot from "../foot";

export class Carte extends Component {
    render() {
        return (
            <div>
                <Food />
                <Foot />
            </div>
        )
    }
}

export default Carte
