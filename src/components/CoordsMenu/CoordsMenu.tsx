import React, {FC} from 'react';
import {Menu} from 'antd';

import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import {setSelectedRoute} from '../../redux/actions/route'
import {getAllRoutes, getSelectedRoute} from "../../redux/selectors/route";

interface CoordsMenuProps {
}

type Props = CoordsMenuProps;

export const CoordsMenu: FC<Props> = () => {
    const dispatch = useAppDispatch();
    const routes = useAppSelector(state => getAllRoutes(state.route));
    const selectedRoute = useAppSelector(state => getSelectedRoute(state.route));

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
