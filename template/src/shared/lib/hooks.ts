import {useWindowDimensions} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export function useCalcFluidSize(foo = 300) {
  const {width, height} = useWindowDimensions();

  function size(fMax, vwMin = foo, vwMax = 390) {
    const fMin = 10;
    const k = (fMax - fMin) / (vwMax - vwMin);
    const b = fMin - k * vwMin;

    return Math.round(k * width + b);
  }

  return size;
}

export const useAppDispatch = () => useDispatch<App.Dispatch>();
export const useAppSelector: TypedUseSelectorHook<App.RootState> = useSelector;
