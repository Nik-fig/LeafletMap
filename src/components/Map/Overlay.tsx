import React, {FC, useEffect, useRef, RefObject} from 'react';
import {Marker, Polyline} from 'react-leaflet'
import L, {Polyline as PolylineClass, LatLngLiteral} from 'leaflet';


import {useAppSelector, useAppDispatch} from '../../redux/hooks'
import {getFastestRoute} from '../../redux/actions/routeWaypoints'
import {getWaypoints} from '../../redux/selectors/routeWaypoints'
import {getSelectedRoute} from "../../redux/selectors/route";

interface OverlayProps {
}

type Props = OverlayProps;

export const Overlay: FC<Props> = () => {
    const selectedRoute = useAppSelector(state => getSelectedRoute(state.route));
    const dispatch = useAppDispatch();

    const waypoints = useAppSelector(state => getWaypoints(state.routeWaypoints));
    const wayPointsArray = waypoints.map<LatLngLiteral>(
        (point) => {
            return {lng: point.longitude, lat: point.latitude}
        }
    )

    const polylineRef = useRef() as RefObject<PolylineClass>;

    useEffect(() => {
        if (selectedRoute)
            dispatch(getFastestRoute(selectedRoute.points));
    }, [selectedRoute])



    return (
        <>
            {
                selectedRoute?.points.map((point, index) => {
                    return (
                        <Marker
                            position={[point.latitude, point.longitude]}
                            key={index}
                            icon={
                                L.icon({
                                        iconUrl: 'https://cdn-icons-png.flaticon.com/512/5817/5817087.png',
                                        iconSize: [30, 30],
                                    }
                                )}
                        />
                    )
                })
            }
            <Polyline
                positions={wayPointsArray}
                ref={polylineRef}
            />

        </>
    );
};
