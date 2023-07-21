import {createAction} from "@reduxjs/toolkit";

import {Route} from "../../types/Route";

export const setSelectedRoute = createAction<Route['id']>('SET_SELECTED_ROUTE');