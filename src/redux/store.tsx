import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'

import mapReducer from './reducers/map';
import routeReducer from './reducers/route';
import routeWaypointsReducer from './reducers/routeWaypoints'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        map: mapReducer,
        route: routeReducer,
        routeWaypoints: routeWaypointsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export type waypointsRootStateRoute = rootState['routeWaypoints'];
export type routeRootState = rootState['route'];
export type mapRootState = rootState['map'];



