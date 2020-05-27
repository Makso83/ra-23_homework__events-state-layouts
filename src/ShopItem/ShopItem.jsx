import React from 'react'

const ShopItem = (props) => {
    console.log(props)
    return (
        <div className="ShopItem_wrapper">
            <img className="ShopItem_content__img" src={props.imageLink} alt={props.title}/>
            <h3 className="ShopItem_content__title">{props.title}</h3>
            <p className="">{props.color}</p>
            <div className="ShopItem_content__price">{`$${props.price}`}</div>
            <button className="ShopItem_content__to-cart-button">Add to Cart</button>
        </div>
    )
}

export default ShopItem;