import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { rootState, appDispatch } from './store'

export const useAppDispatch: () => appDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;