import {Point} from '../types/Point'

export function centroid(coords: Point[]): Point {
    let latSum = 0;
    let lngSum = 0;

    coords.forEach(coord => {
        latSum += coord.lat;
        lngSum += coord.lng;
    })

    return {lng: lngSum / coords.length, lat: latSum / coords.length};
}

/**
 *  Get top-left coordinate and bottom-right coordinate from coordinates;
 */
export function getRectangle(coords: Point[]): {topLeft: Point, bottomRight: Point} {
    let topLeftPoint: Point = coords[0] ;
    let bottomRightPoint: Point = coords[0];

    for (const coord of coords) {
        if (coord.lat < topLeftPoint.lat && coord.lng > topLeftPoint.lng)
            topLeftPoint = coord;

        if (coord.lat > bottomRightPoint.lat && coord.lng < bottomRightPoint.lng)
            bottomRightPoint = coord;
    }
    return {topLeft: topLeftPoint, bottomRight: bottomRightPoint};
}