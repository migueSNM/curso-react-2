import React, {Component} from 'react';

const Item = props => {

    const itemInfo = props.prodData;
    return(
        <div>
            <div>{itemInfo.id}</div>
            <div>{itemInfo.name}</div>
            <div>{itemInfo.price}</div>
            <div>{itemInfo.image}</div>
        </div>
    )
}

const Grid = props => {

    const rows = props.productData.map((row, index) => {
        return(
            <div key={index}>
                <Item prodData={row}/>
            </div>

        );

    });

    return <div>{rows}</div>;

};

export default Grid