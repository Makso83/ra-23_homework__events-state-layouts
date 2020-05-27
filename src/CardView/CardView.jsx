import React from 'react';
import ShopCard from '../ShopCard/ShopCard'

const CardsView = (props) => {
    const cards = props.cards.map((card) => <ShopCard key={card.title} title={card.name} price={card.price} color={card.color} imageLink={card.img} />)

    return(
        <div className="CardsView_wrapper">{cards}</div>
    )
}

export default CardsView;