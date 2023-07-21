import {routeRootState} from "../store";
import {Route} from "../../types/Route";


export const getAllRoutes = (state: routeRootState): Route[] => {
    return state.routes;
}
export const getSelectedRoute = (state: routeRootState): Route | undefined => {
    return state.routes.find(
        route => route.id === state.selectedRoute
    )
}