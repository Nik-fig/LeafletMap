import {createAction} from '@reduxjs/toolkit';

import {RootStateMap} from '../store'

export const setView = createAction<{ center: RootStateMap['position'], zoom: RootStateMap['zoom'] }>('SET_VIEW_BY_POLYLINE');
