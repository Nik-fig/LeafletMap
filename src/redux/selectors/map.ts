import {mapRootState} from '../store'


export const getView = (state: mapRootState): {center: mapRootState['position'], zoom: mapRootState['zoom']} => {
    return ({center: state.position, zoom: state.zoom})
}


