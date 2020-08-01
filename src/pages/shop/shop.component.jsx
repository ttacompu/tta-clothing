import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import {updateShopData} from "../../redux/shop/shop.actions";
import  WithSpinner from "../../components/with-spinner/with-spinner.component"

import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase-utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null;
  state ={ loading : true};

  componentDidMount() {
    const {updateStore} = this.props;

    const collectionRef = firestore.collection("collections");
    collectionRef.get().then((snapshot) => {
      updateStore(convertCollectionsSnapShotToMap(snapshot));
      this.setState({loading : false});
    });

    /*collectionRef.onSnapshot(async (snapshot) => {
      updateStore(convertCollectionsSnapShotToMap(snapshot));
      this.setState({loading : false});
    });*/
  }
  render() {
    const CollectionOverViewWithSpinner = WithSpinner(CollectionOverview);
    const CollectionPageWithSpinner = WithSpinner(CollectionPage);
    const { match } = this.props;
    const {loading}= this.state;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={ (props) => <CollectionOverViewWithSpinner isLoading={loading} {...props} ></CollectionOverViewWithSpinner>  } />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} ></CollectionPageWithSpinner>}
        />
      </div>
    );
  }
}

const mapDispatchToState = (dispatch) => ({ updateStore : (data)=> dispatch(updateShopData(data)) })

export default connect(null, mapDispatchToState)(ShopPage);
