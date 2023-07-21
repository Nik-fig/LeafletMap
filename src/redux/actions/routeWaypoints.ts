import {createAction} from "@reduxjs/toolkit";

import {waypointsRootStateRoute} from '../store'
import {Point} from "../../types/Point";
export const getFastestRoute = createAction<Point[]>('GET_FASTEST_ROUTE');
export const getFastestRouteSuccess = createAction<waypointsRootStateRoute['waypoints']>('GET_FASTEST_ROUTE_SUCCESS');
export const getFastestRouteError = createAction<waypointsRootStateRoute['error']>('GET_FASTEST_ROUTE_ERROR');
