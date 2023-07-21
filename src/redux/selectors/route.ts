import {RootStateRoute} from "../store";
import {Route} from "../../types/Route";


export const getAllRoutes = (state: RootStateRoute): Route[] => {
    return state.routes;
}
export const getSelectedRoute = (state: RootStateRoute): Route | undefined => {
    return state.routes.find(
        route => route.id === state.selectedRoute
    )
}