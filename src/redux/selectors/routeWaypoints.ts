import {waypointsRootStateRoute} from '../store';
import {Point} from '../../types/Point';


export const getWaypoints = (state: waypointsRootStateRoute): Point[] => {
    return state.waypoints;
}