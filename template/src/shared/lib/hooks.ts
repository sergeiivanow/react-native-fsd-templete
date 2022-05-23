import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

export const useAppDispatch = () => useDispatch<App.Dispatch>()
export const useAppSelector: TypedUseSelectorHook<App.RootState> = useSelector
