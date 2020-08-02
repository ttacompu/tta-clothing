import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector([selectShop], 
  (shop) => Object.keys(shop.collections).map(key => shop.collections[key]));

export const selectIsFetching = createSelector([selectShop], (shop) => shop.isFetching)

export const getItemsByCollectionId =memoize((collectionId) => {
  return createSelector([selectShopCollection], (collections) => {
    return collections[collectionId];
  });
});
