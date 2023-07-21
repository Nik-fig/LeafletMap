import {waypointsRootStateRoute} from '../store';
import {Point} from '../../types/Point';

export const getFetchStatus = (state: waypointsRootStateRoute): { isLoading: waypointsRootStateRoute['isLoading'], error: waypointsRootStateRoute['error'] } => {
    return {isLoading: state.isLoading, error: state.error};
}
export const getWaypoints = (state: waypointsRootStateRoute): Point[] => {
    return state.waypoints;
}