import React, {FC} from 'react';
import {Marker} from 'react-leaflet'
import L from 'leaflet';

import {useAppSelector} from '../../redux/hooks'
import {getSelectedRoute} from '../../redux/selectors/map'

interface OverlayProps {
}

type Props = OverlayProps;

export const Overlay: FC<Props> = () => {
    const selectedRoute = useAppSelector(state => getSelectedRoute(state));

    return (
        <>
            {selectedRoute?.points.map(
                (point, index) => {
                    return (
                        <Marker
                            position={[point.latitude, point.longitude]}
                            key={index}
                            icon={L.icon({
                                    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5817/5817087.png',
                                    iconSize: [30, 30],
                                }
                            )}
                        >
                        </Marker>
                    )
                }
            )}
        </>
    );
};
