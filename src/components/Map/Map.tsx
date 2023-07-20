import React, {FC} from 'react';
import {MapContainer, TileLayer} from 'react-leaflet'

import {useAppSelector} from '../../redux/hooks';
import {getPosition} from '../../redux/selectors/map';
import styles from './Map.module.css'
import {Overlay} from './Overlay'

interface MapProps {
}

type Props = MapProps;


export const Map: FC<Props> = () => {
    const position = useAppSelector(state => getPosition(state));

    return (
        <MapContainer
            center={[position.latitude, position.longitude]}
            zoom={13}
            scrollWheelZoom={true}
            className={styles.map}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Overlay/>
        </MapContainer>
    );
};
