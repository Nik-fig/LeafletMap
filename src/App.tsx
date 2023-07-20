import React, {FC} from 'react';
import {ConfigProvider} from 'antd'

import {MainLayout} from './components/MainLayout/MainLayout'

const App: FC = () => {
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: 'blue',
            }
        }}>
            <MainLayout/>
        </ConfigProvider>
    );
}

export default App;
