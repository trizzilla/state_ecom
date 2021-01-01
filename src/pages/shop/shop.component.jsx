import React, { Component } from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collectionpreview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-component">
        {collections.map(({ id, ...someOtherProps }) => (
          <CollectionPreview
            key={id}
            {...someOtherProps}
            className="collections"
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
