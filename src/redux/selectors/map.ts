import {RootState, RootStateMap} from '../store'
import {Point} from '../../types/Point'



export const getPosition = (state: RootState): Point => {
    return state.map.position;
}

export const getView = (state: RootStateMap): {center: RootStateMap['position'], zoom: RootStateMap['zoom']} => {
    return ({center: state.position, zoom: state.zoom})
}


