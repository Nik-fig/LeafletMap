import {RootStateRouteWaypoints} from '../store';
import {Point} from '../../types/Point';


export const getWaypoints = (state: RootStateRouteWaypoints): Point[] => {
    return state.waypoints;
}

export const getFetchStatus = (state: RootStateRouteWaypoints): {
    loading: RootStateRouteWaypoints['isLoading'],
    error: RootStateRouteWaypoints['error']
} => {
    return {
        loading: state.isLoading,
        error: state.error,
    }
}