import React, {Component} from 'react';

const Item = props => {

    //console.log(props.prodData);
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

    //console.log(props.productData);
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