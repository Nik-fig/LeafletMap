import {createReducer} from '@reduxjs/toolkit'

import {Point} from "../../types/Point";
import {setView} from '../actions/map'

interface IInitial {
    position: Point,
    zoom: number,
}


const initialState: IInitial = {
    position: {
        lat: 59.83567701,
        lng: 30.41705607,
    },
    zoom: 13
}

export default createReducer(initialState, builder => {
    builder.addCase(setView, (state, action) => {
        state.position = action.payload.center;
        state.zoom = action.payload.zoom;
    })
})