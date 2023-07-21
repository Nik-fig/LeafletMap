import {createReducer} from '@reduxjs/toolkit';

import {
    getFastestRoute,
    getFastestRouteSuccess,
    getFastestRouteError,
} from '../actions/routeWaypoints';
import {Point} from "../../types/Point";

interface IInitial {
    waypoints: Point[] | []
    isLoading: boolean,
    error: string | null,
}


const initialState: IInitial = {
    waypoints: [],
    isLoading: false,
    error: null
}

export default createReducer(initialState, builder => {
    builder
        .addCase(getFastestRoute, (state) => {
            state.isLoading = true;
            state.waypoints = [];
            state.error = null;
        })
        .addCase(getFastestRouteSuccess, (state, action) => {
            state.waypoints = action.payload;
            state.error = null;
            state.isLoading = false;
        })
        .addCase(getFastestRouteError, (state, action) => {
            state.waypoints = [];
            state.error = action.payload;
            state.isLoading = false;
        })
})