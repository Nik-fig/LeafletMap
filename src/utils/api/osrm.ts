import {Point} from '../../types/Point'
import {HttpError} from '../../types/Errors/HttpError'

export async function getFastestRoute(points: Point[]) {
    const service = 'route';
    const version = 'v1';
    const profile = 'driving';
    const url = 'http://router.project-osrm.org/';
    const coordinatesJSON = points.map(point => point.lng + ',' + point.lat);
    const options = [
        'geometries=geojson',
        'overview=full',
    ]

    const query = `${url}/${service}/${version}/${profile}/${coordinatesJSON.join(';')}?${options.join('&')}`;
    const data = await fetch(query, {
        method: 'GET',
    })

    if (data.ok)
        return data.json();
    else
        throw new HttpError(data.status, data.statusText);
}


export class NoRouteError extends Error {
    constructor(message: string, public code: string) {
        super(message);
    }
}