import {combineReducers,configureStore} from '@reduxjs/toolkit'
import products from './slices/productSlice'
import cart from './slices/cartSlice'
const reducer =combineReducers({
    products,
    cart,

})


export default configureStore({
    reducer,
})