import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.componet"

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    return (
    <div className="shop-page">
     
      {
        this.state.collections.map(collection =>(
          <CollectionPreview key={collection.id} {...collection}></CollectionPreview>
        ))
      }

    </div>
    )
  }
}

export default ShopPage;
