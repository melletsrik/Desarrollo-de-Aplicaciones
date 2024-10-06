import React from "react";


export default class Contador extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            contadorL: 0,
            contadorD: 0,
        };
    }

    incrementar = () => {
        this.setState((estadoLike) => ({ contadorL: estadoLike.contadorL + 1 }));
    };

    decrementar = () => {
        this.setState((estadoDislike) => ({ contadorD: estadoDislike.contadorD + 1 }));
    };

    render() {
        return (
            <div>
                <label>Likes: {this.state.contadorL}</label>
                <label>Dislikes: {this.state.contadorD}</label><br/>
                <button onClick={this.incrementar}>Incrementar</button>
                <button onClick={this.decrementar}>Decrementar</button>
            </div>
        );
    }
}
