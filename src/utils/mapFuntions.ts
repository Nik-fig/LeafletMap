import {Point} from '../types/Point'

export function centroid(coords: Point[]): Point {
    let latSum = 0;
    let lngSum = 0;
    coords.map((coord):void => {
        latSum += coord.latitude;
        lngSum += coord.longitude;
    })

    return {longitude: lngSum / coords.length, latitude: latSum / coords.length};
}

/**
 *  Get top-left coordinate and bottom-right coordinate from coordinates;
 */
export function getRectangle(coords: Point[]): {topLeft: Point, bottomRight: Point} {
    let topLeftPoint: Point = coords[0] ;
    let bottomRightPoint: Point = coords[0];

    for (const coord of coords) {
        if (coord.latitude < topLeftPoint.latitude && coord.longitude > topLeftPoint.longitude)
            topLeftPoint = coord;

        if (coord.latitude > bottomRightPoint.latitude && coord.longitude < bottomRightPoint.longitude)
            bottomRightPoint = coord;
    }
    return {topLeft: topLeftPoint, bottomRight: bottomRightPoint};
}