import {takeEvery, call, put} from 'redux-saga/effects'
import {HttpError} from '../../types/Errors/HttpError'

import {
    getFastestRoute as getFastestRouteAction,
    getFastestRouteSuccess as getFastestRouteSuccessAction,
    getFastestRouteError as getFastestRouteErrorAction,
} from '../actions/routeWaypoints'
import {getFastestRoute as getFastestRouteFetch} from '../../utils/api/osrm';
import {Point} from '../../types/Point'


function* getFastestRoute(action: ReturnType<typeof getFastestRouteAction>): any {
    try {
        const response = yield call(getFastestRouteFetch, action.payload);
        const waypoints = response.routes[0].geometry.coordinates.map(
            (coordinate: any): Point => {
                return {
                    lng: coordinate[0],
                    lat: coordinate[1],
                }
            }
        );
        yield put(getFastestRouteSuccessAction(waypoints))
    } catch (e) {
        if (e instanceof HttpError) {
            yield put(getFastestRouteErrorAction(`HttpError ${e.code}: ${e.message}`));
        } else if (e instanceof TypeError) {
            yield put(getFastestRouteErrorAction(`TypeError: ${e.message}`));
        }
        else {
            const e_name = (e as Error).name;
            const e_message = (e as Error).message;
            yield put(getFastestRouteErrorAction(`${e_name}: ${e_message}`));
        }
        console.error(e);
    }
}

export default function* watcherRouteWaypoints() {
    yield takeEvery(getFastestRouteAction, getFastestRoute)
}