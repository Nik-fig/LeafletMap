import React, {FC} from 'react';
import {Layout} from 'antd';

import {CoordsMenu} from '../CoordsMenu/CoordsMenu';
import {Map} from '../Map/Map';
import styles from './MainLayout.module.css'

interface MainLayoutProps {
}

type Props = MainLayoutProps;

const {Sider, Content} = Layout;
export const MainLayout: FC<Props> = () => {
    return (
        <>
            <Layout
                className={styles.mainLayout}
            >
                <Sider>
                    <CoordsMenu/>
                </Sider>
                <Content>
                    <Map/>
                </Content>
            </Layout>

        </>
    );
};
