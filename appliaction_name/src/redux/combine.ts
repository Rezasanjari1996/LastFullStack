// node libraries
import { combineReducers } from 'redux';

// object of All reducers
export const reducerObject = {
    // you should add your reducres here!
    test: ()=>{return{}} 
}




/**
*      DO NOT TOUCH THIS PART IF YOU DON'T KHNOW WHAT TO DO
*/

// combine all reducers with combineReducers function
export const Reducers = combineReducers(reducerObject);

// create type of Store
export type StoreType = ReturnType <typeof Reducers>;