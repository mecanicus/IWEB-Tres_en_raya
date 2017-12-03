import React from 'react';
import { Button } from 'react-bootstrap';

export default class Reset extends React.Component {

    constructor(props) {
        super(props);
        this.resetClick2 = this.resetClick2.bind(this);
    }
    resetClick2() {
        this.props.resetClick();
    }
    render() {
        return(
            <Button bsStyle="danger" onClick={this.resetClick2}>Reset</Button>
        );
    }
}