import { TypedUseSelectorHook, useDispatch, useSelector, Selector } from "react-redux";
import { configureStore, combineReducers, ActionCreatorWithPayload } from "@reduxjs/toolkit";
//import logger from 'redux-logger';
import commonReducer from './slicers/commonStateSlice';

export const rootReducer = combineReducers({
    common: commonReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    /* middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        //serializableCheck: false,
      })
        .concat(process.env.NODE_ENV === 'development' ? logger : [] as any), */
    devTools: process.env.NODE_ENV === 'development' ? true : false,
});

export type RootState = ReturnType<(typeof store.getState)>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// it's a safe call in server components
export const useAppSelectorSave: (selector: Selector<RootState, any>) => any =
    (callback) => {
        try {
            return useSelector(callback);
        } catch {
            return null;
        }
    }
