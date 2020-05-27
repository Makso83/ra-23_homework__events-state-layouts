import React from 'react'
import ShopItem from '../ShopItem/ShopItem'

const ListView = (props) => {
    const items = props.items.map((card) => <ShopItem key={card.title} title={card.name} price={card.price} color={card.color} imageLink={card.img} />)
    return(
        <div className="dummy">{items}</div>
    )
}

export default ListView;