import {takeEvery, call, put} from 'redux-saga/effects'

import {
    getFastestRoute as getFastestRouteAction,
    getFastestRouteSuccess as getFastestRouteSuccessAction
} from '../actions/routeWaypoints'
import {getFastestRoute as getFastestRouteFetch} from '../../api/osrm';
import {Point} from '../../types/Point'

function* getFastestRoute(action: ReturnType<typeof getFastestRouteAction>): any {
    try {
        const response = yield call(getFastestRouteFetch, action.payload);
        const waypoints = response.routes[0].geometry.coordinates.map(
            (coordinate: any):Point => {
                return {
                    lng: coordinate[0],
                    lat: coordinate[1],
                }
            }
        );
        yield put(getFastestRouteSuccessAction(waypoints))
    } catch (err) {
        console.error(err);
    }
}

export default function* watcherRouteWaypoints() {
    yield takeEvery(getFastestRouteAction, getFastestRoute)
}