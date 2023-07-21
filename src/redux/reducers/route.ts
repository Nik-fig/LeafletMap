import {createReducer} from '@reduxjs/toolkit';

import {setSelectedRoute} from '../actions/route'
import {Route} from "../../types/Route";


interface IInitial {
    routes: Route[],
    selectedRoute?: Route['id'],
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
}

export default createReducer(initialState, builder => {
    builder
        .addCase(setSelectedRoute, (state, action) => {
            state.selectedRoute = action.payload;
        })
})