import React, {FC} from 'react';
import {Menu} from 'antd';

import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import {getAllRoutes, getSelectedRoute} from '../../redux/selectors/map';
import {setSelectedRoute} from '../../redux/slices/map'

interface CoordsMenuProps {
}

type Props = CoordsMenuProps;

export const CoordsMenu: FC<Props> = () => {
    const dispatch = useAppDispatch();
    const routes = useAppSelector(state => getAllRoutes(state));
    const selectedRoute = useAppSelector(state => getSelectedRoute(state));

    return (
        <Menu
            items={
                routes.map((route, index) => {
                    return {
                        key: route.id,
                        label: `Маршрут #${index + 1}`,
                    }
                })}

            selectedKeys={selectedRoute ? [selectedRoute.id] : undefined}
            onSelect={({key}) => dispatch(setSelectedRoute(key))}
        >
        </Menu>
    );
};
