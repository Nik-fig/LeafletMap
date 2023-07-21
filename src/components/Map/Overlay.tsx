import React, {FC, useEffect, useRef, RefObject} from 'react';
import {Marker, Polyline} from 'react-leaflet'
import L, {Polyline as PolylineClass} from 'leaflet';
import {message} from 'antd'

import {useAppSelector, useAppDispatch} from '../../redux/hooks'
import {getFastestRoute} from '../../redux/actions/routeWaypoints'
import {getWaypoints, getFetchStatus} from '../../redux/selectors/routeWaypoints'
import {getSelectedRoute} from "../../redux/selectors/route";

interface OverlayProps {
}

type Props = OverlayProps;

export const Overlay: FC<Props> = () => {
    const {error} = useAppSelector(state => getFetchStatus(state.routeWaypoints));
    const selectedRoute = useAppSelector(state => getSelectedRoute(state.route));
    const dispatch = useAppDispatch();

    const waypoints = useAppSelector(state => getWaypoints(state.routeWaypoints));

    const polylineRef = useRef() as RefObject<PolylineClass>;

    useEffect(() => {
        if (selectedRoute)
            dispatch(getFastestRoute(selectedRoute.points));
    }, [selectedRoute])


    const markers = selectedRoute?.points.map((point, index) => {
        return (
            <Marker
                position={point}
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

    const polilyne = (
        <Polyline
            positions={waypoints}
            ref={polylineRef}
        />
    );

    if (error) {
        message.error(error);
        return (
            <>
                {markers ? markers.map(marker => marker) : null}
            </>
        )
    } else {
        return (
            <>
                {markers ? markers.map(marker => marker) : null}
                {polilyne}
            </>
        )
    }
};
