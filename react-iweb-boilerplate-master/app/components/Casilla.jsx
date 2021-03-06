import React from 'react';
import { Button } from 'react-bootstrap';
const casillaStyle = {
    height: '100px',
    width: '100px',
};

export default class Casilla extends React.Component {
    constructor(props) {
        super(props);
        this.casillaClick = this.casillaClick.bind(this);
    }

    casillaClick() {
        if(this.props.valor === "-") {
            this.props.tableroClick(this.props.indiceFila, this.props.indiceColumna);
        }
    }

    render() {
        return(
            <Button bsStyle="info" style={casillaStyle} onClick={this.casillaClick} className={this.props.valor === "-" ? "clickable" : "no_clickable"}>
                {this.props.valor}
            </Button>
        );
    }

}