import React from 'react'

const ShopCard = (props) => {
    return (
        <div className="ShopCard_wrapper">
            <h3 className="ShopCard_content__title">{props.title}</h3>
            <p className="ShopCard_content__color">{props.color}</p>
            <img className="ShopCard_content__img" src={props.imageLink} alt={props.title}/>
            <div><span className="ShopCard_content__price">{`\$${props.price}`}</span><button className="ShopCard_content__cart-button">Add to Cart</button></div>
        </div>
    )
}

export default ShopCard;