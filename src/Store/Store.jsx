import React, { useState } from 'react';
import productList from '../products';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardView/CardView';
import ListView from '../ListView/ListView'

const LIST = 'view_list';
const MODULE = 'view_module';

const Store = () => {
    const [currentIcon, setCurrentIcon] = useState(LIST);
    const [products, setProducts] = useState(productList);
    const isList = () => currentIcon === LIST;
    const onIconClickHandler = () => setCurrentIcon(isList() ? MODULE : LIST);

    const jsxToRender = isList() ? <CardsView cards={products}/> : <ListView items={products}/>;

    return (
        <>
            <IconSwitch icon={currentIcon} onSwitch={onIconClickHandler} />
            {jsxToRender}
        </>
    )
}

export default Store;