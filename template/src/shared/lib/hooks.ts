import {useWindowDimensions} from 'react-native';

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
