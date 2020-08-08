import {connect} from 'react-redux';
import { createStructuredSelector, createSelector} from 'reselect';
import {selectIsFetching} from "../../redux/shop/shop.selectors";
import  WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({isLoading : selectIsFetching});
 
export const CollectionOverViewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionOverview);



