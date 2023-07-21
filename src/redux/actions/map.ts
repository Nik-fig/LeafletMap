import {createAction} from '@reduxjs/toolkit';

import {mapRootState} from '../store'

export const setView = createAction<{ center: mapRootState['position'], zoom: mapRootState['zoom'] }>('SET_VIEW_BY_POLYLINE');
