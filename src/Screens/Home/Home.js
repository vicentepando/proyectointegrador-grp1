import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
const API_KEY = "f53da3ebfbe7e075c04b8d2f7ald2abf"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }


    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/now_playing&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data, loading: false
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <React.Fragment>
                <h1>Todos los Personajes</h1>
                <section>
                    {this.state.loading ? <p> cargando... </p> : this.state.data.results.map(personaje => <Card data={personaje} key={personaje.id} />
                    )}

                </section>
            </React.Fragment>

        )
    }
}

export default Home;