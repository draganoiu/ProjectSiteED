import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="Title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((items, idx) => idx < 4)
        .map(({ id, ...otherItems }) => (
          <CollectionItem key={id} {...otherItems} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
