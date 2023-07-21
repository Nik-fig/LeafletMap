import {createAction} from "@reduxjs/toolkit";

import {Point} from "../../types/Point";
export const getFastestRoute = createAction<Point[]>('GET_FASTEST_ROUTE');
export const getFastestRouteSuccess = createAction<Point[]>('GET_FASTEST_ROUTE_SUCCESS');
export const getFastestRouteError = createAction<Error>('GET_FASTEST_ROUTE_ERROR');
