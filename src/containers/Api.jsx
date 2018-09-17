import React, { Component } from 'react';
import Grid from '../components/Grid.jsx';

class App extends Component {
    state = {
        data: []
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "http://develop.plataforma5.la:3000/api/products";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

    render() {
        const productData = this.state.data;


        return (
            <div className="container">
                <Grid productData = {productData}/>
            </div>
        );
    }
}

export default App;