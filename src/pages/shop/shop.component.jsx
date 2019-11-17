import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collection/collection-preview.component'


class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collection: SHOP_DATA

        }

    }

    render() {
        return(
            <div >
                {this.state.collection.map(({id, ...otherSectionpropssss}) => (
                    <CollectionPreview key={id} {...otherSectionpropssss}/>

                ))}
            
            </div>

        )

    }



}

export default ShopPage

