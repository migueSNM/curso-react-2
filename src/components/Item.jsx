import React from 'react';

const Item = ({prod}) =>
    <ul>
        <li>{prod.id}</li>
        <li>{prod.name}</li>
        <li>{prod.price}</li>
        <li>{prod.image}</li>
    </ul>


export default Item