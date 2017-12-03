import React from 'react';

const estiloMovimientos = {
    color : 'red',
};
export default class Movimientos extends React.Component {
    render(){
        return(
            <h3 style = {estiloMovimientos}>
                Número de movimientos: {this.props.movimientos}
            </h3>

        );
    }
}