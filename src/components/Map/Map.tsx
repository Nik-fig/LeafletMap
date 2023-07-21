import React, {FC, useRef, useEffect, RefObject} from 'react';
import L from 'leaflet';
import {Map as MapObject} from 'leaflet';
import {MapContainer, TileLayer} from 'react-leaflet'

import {useAppSelector} from '../../redux/hooks';
import {getView} from '../../redux/selectors/map';
import {getSelectedRoute} from '../../redux/selectors/route';
import styles from './Map.module.css'
import {Overlay} from './Overlay'
import {centroid, getRectangle} from "../../utils/mapFuntions";

interface MapProps {
}

type Props = MapProps;


export const Map: FC<Props> = () => {
    const {center, zoom} = useAppSelector(state => getView(state.map));
    const selectedRoute = useAppSelector(state => getSelectedRoute(state.route));
    const mapRef = useRef() as RefObject<MapObject>;

    useEffect(() => {
        mapRef.current?.setView({lat: center.latitude, lng: center.longitude}, zoom);
    }, [])

    useEffect(() => {
        if (selectedRoute) {
            const center = centroid(selectedRoute.points);
            mapRef.current?.setView([center.latitude, center.longitude]);
            const {topLeft: topLeftPoint, bottomRight: bottomRightPoint} = getRectangle(selectedRoute.points);
            mapRef.current?.fitBounds(
                L.latLngBounds(
                    {lat: topLeftPoint.latitude, lng: topLeftPoint.longitude},
                    {lat: bottomRightPoint.latitude, lng: bottomRightPoint.longitude},
                )
            );
        }
    }, [selectedRoute])

    return (
        <MapContainer
            center={[center.latitude, center.longitude]}
            zoom={zoom}
            scrollWheelZoom={true}
            className={styles.map}
            ref={mapRef}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Overlay/>
        </MapContainer>
    );
};
