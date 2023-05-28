import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import { authReduser } from "./auth/authSlice";

const reducer = combineReducers({
        auth: authReduser,
})

const persistConfig = {
    key: 'auth',
    storage,
}

const persistdReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistdReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
})

const persistor = persistStore(store);

export { store, persistor };