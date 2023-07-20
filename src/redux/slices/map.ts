import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Route} from '../../types/Route';
import {Point} from '../../types/Point';

interface IInitial {
    routes: Route[],
    selectedRoute?: Route['id'],
    position: Point,
}


const initialState: IInitial = {
    routes: [
        {
            id: '1',
            points: [
                {latitude: 59.84660399, longitude: 30.29496392},
                {latitude: 59.82934196, longitude: 30.42423701},
                {latitude: 59.83567701, longitude: 30.38064206},
            ],
        },
        {
            id: '2',
            points: [
                {latitude: 59.82934196, longitude: 30.42423701},
                {latitude: 59.82761295, longitude: 30.41705607},
                {latitude: 59.84660399, longitude: 30.29496392},
            ],

        },
        {
            id: '3',
            points: [
                {latitude: 59.83567701, longitude: 30.38064206},
                {latitude: 59.84660399, longitude: 30.29496392},
                {latitude: 59.82761295, longitude: 30.41705607},
            ]

        },
    ],
    selectedRoute: undefined,
    position: {
        latitude: 59.83567701,
        longitude: 30.41705607,
    }
}

const mapSlice = createSlice({
    name: 'map',
    initialState: initialState,
    reducers: {
        setSelectedRoute: (state, action: PayloadAction<Route['id']>) => {
            state.selectedRoute = action.payload;
        }
    }
})

export const {setSelectedRoute} = mapSlice.actions;
export const mapReducer = mapSlice.reducer;