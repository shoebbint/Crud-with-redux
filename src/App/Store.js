
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "../CRUD/Posts/PostsSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;

const persistConfig = {
    key: 'root',
    storage,
  };
  const reducer=combineReducers({
    postsReducer: postsReducer,
  })
  const persistedReducer = persistReducer(persistConfig, reducer)
const store=configureStore({
    reducer: persistedReducer
});
export let persistor = persistStore(store)
 export default  store;
