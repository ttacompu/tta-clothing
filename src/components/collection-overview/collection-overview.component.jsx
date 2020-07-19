import React from "react";
import "./collection-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../collection-preview/collection-preview.componet'
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map((collection) => (
      <CollectionPreview
        key={collection.id}
        {...collection}
      ></CollectionPreview>
    ))}
  </div>
);

const mapStateToProps = () => createStructuredSelector({collections :  selectCollectionForPreview});

export default connect(mapStateToProps)(CollectionOverview);
