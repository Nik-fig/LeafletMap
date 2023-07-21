import {Point} from '../types/Point'

export async function getFastestRoute(points: Point[]) {
    const service = 'route';
    const version = 'v1';
    const profile = 'driving';
    const url = 'http://router.project-osrm.org/';
    const coordinatesJSON = points.map(point => point.longitude + ',' + point.latitude);
    const options = [
        'geometries=geojson',
        'overview=full',
    ]

    const query = `${url}/${service}/${version}/${profile}/${coordinatesJSON.join(';')}?${options.join('&')}`
    const data = await fetch(query, {
        method: 'GET',
    })

    return data.json();
}


export class NoRouteError extends Error {
    constructor(message: string, public code: string) {
        super(message);
    }
}