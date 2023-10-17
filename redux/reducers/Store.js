import { combineReducers,configureStore } from '@reduxjs/toolkit';
import User from '../reducers/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer,persistStore } from 'redux-persist';
import {logger} from 'redux-logger';
import Categories from './Categories';
import Donation from './Donation';
const rootReducers=combineReducers({
    user:User,
    categories:Categories,
    donations:Donation,
});
const configuration={
    key:'root',
    storage:AsyncStorage,
    version:1,
}
const persistedReducer=persistReducer(configuration,rootReducers)
const Store=configureStore({
    reducer:persistedReducer,
    middleware:getDefaultMiddleware=>{
        return getDefaultMiddleware({
            serializableCheck:false,
        })
        // .concat(logger)
    }
})
export default Store;
export const persistor=persistStore(Store)
persistor.purge()