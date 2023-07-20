import {RootState} from '../store'
import {Route} from '../../types/Route'
import {Point} from '../../types/Point'

export const getPosition = (state: RootState): Point => {
    return state.map.position;
}

export const getAllRoutes = (state: RootState): Route[] => {
    return state.map.routes;
}

export const getSelectedRoute = (state: RootState): Route | undefined => {
    return state.map.routes.find(
        route => route.id === state.map.selectedRoute
    )
}