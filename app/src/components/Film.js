import { Component } from 'react';

class Film extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filmy: []
        }
    }

    componentDidMount() {
        fetch('/api/filmy')
            .then(response => response.json())
            .then(filmy => {
                    this.setState({filmy: filmy});
            });
    }

    render() {
        return (
            <ul>
                {this.state.filmy.map(filmy => (
                    <li> Tytuł: {filmy.tytuł}, Premiera: {filmy.premiera}</li>
                ))}
            </ul>
        )
    }
}

export default Film;