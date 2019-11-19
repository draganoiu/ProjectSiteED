import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPreview = ({title,  items}) => (
    <div className = 'collection-preview'>
        <h1 className='Title'>{title.toUpperCase()}</h1>
        <div className = 'preview'>

           { items
            .filter((item,idx) => (idx < 4))
            .map(item =>(
            
            <div key={item.id}  {item.price} />
            
            ) )}
        </div>
        
    </div>        
    
    
    
)


export default CollectionPreview;
