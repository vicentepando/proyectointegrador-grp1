import { Component } from 'react';
import React from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verDescripcion: false

        }
    }


componentDidMount() {

}

render() {
    return (
        <React.Fragment>
            <article>
                <h3>{this.props.data.name}</h3>
                <button>Ver Descripcion</button>
                {this.state.verDescripcion ? <p>{this.props.data.overview}</p> : " "}
                <img src={this.props.data.image} alt={this.state.data.name} />
            </article>

        </React.Fragment>

    )
}
}

export default Card;