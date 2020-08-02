import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import {updateShopData} from "../../redux/shop/shop.actions";
import  WithSpinner from "../../components/with-spinner/with-spinner.component"
import {createStructuredSelector} from 'reselect'

import {fetchCollectionStartAsync} from "../../redux/shop/shop.actions";
import {selectIsFetching} from "../../redux/shop/shop.selectors";

class ShopPage extends React.Component {
  

  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  
    /*collectionRef.onSnapshot(async (snapshot) => {
      updateStore(convertCollectionsSnapShotToMap(snapshot));
      this.setState({loading : false});
    });*/
  }
  render() {
    const CollectionOverViewWithSpinner = WithSpinner(CollectionOverview);
    const CollectionPageWithSpinner = WithSpinner(CollectionPage);
    const { match, isFetching } = this.props;
    

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={ (props) => <CollectionOverViewWithSpinner isLoading={isFetching} {...props} ></CollectionOverViewWithSpinner>  } />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={isFetching} {...props} ></CollectionPageWithSpinner>}
        />
      </div>
    );
  }
}

const mapPropsToState = createStructuredSelector( {isFetching : selectIsFetching} )
const mapDispatchToState = (dispatch) => ({ fetchCollectionStartAsync : () => dispatch(fetchCollectionStartAsync()) })

export default connect(mapPropsToState, mapDispatchToState)(ShopPage);
