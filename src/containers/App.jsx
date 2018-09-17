import React, {Component} from 'react';

import Grid from '../components/Grid.jsx';

class App extends Component {

    state = { products: [
        {
            "id": 1,
            "name": "Licensed Frozen Sausages",
            "price": "39.00",
            "image": "http://lorempixel.com/640/480/food",
        },
        {
            "id": 5,
            "name": "Unbranded Soft Fish",
            "price": "228.00",
            "image": "http://lorempixel.com/640/480/sports",
        },
        {
            "id": 9,
            "name": "Refined Cotton Salad",
            "price": "531.00",
            "image": "http://lorempixel.com/640/480/transport",
        }
    ]};


    render() {

        const productData = this.state.products;
        //console.log(productData);

         return (
             <div className="container">
                 <Grid productData = {productData}/>
             </div>
         );
    }
}

export default App