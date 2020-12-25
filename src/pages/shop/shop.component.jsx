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
      <div>
        {collections.map(({ id, ...someOtherProps }) => (
          <CollectionPreview key={id} {...someOtherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
