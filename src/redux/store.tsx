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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootStateRouteWaypoints = RootState['routeWaypoints'];
export type RootStateRoute = RootState['route'];
export type RootStateMap = RootState['map'];



