import {Dimensions} from 'react-native'

export const {width, height} = Dimensions.get('window')

const config = {
  minWidth: 320,
  maxWidth: 428,
  minHeight: 480,
  maxHeight: 926,
}

interface Constraint {
  min: number
  max: number
}

type FluidType = Constraint

export const fluidType = (value: FluidType | number) => {
  let options = value
  if (typeof value === 'number') {
    options = {
      min: value * 0.8,
      max: value,
    } as FluidType
  }
  const {min: minFontSize, max: maxFontSize} = options as FluidType

  switch (true) {
    case width <= config.minWidth:
      return minFontSize
    case width >= config.maxWidth:
      return maxFontSize
    default:
      return Math.ceil(
        minFontSize +
          (maxFontSize - minFontSize) *
            ((width - config.minWidth) / (config.maxWidth - config.minWidth)),
      )
  }
}

type FluidSize = Constraint & {
  scale?: number
  axis?: 'horizontal' | 'vertical'
}

export const fluidSize = (
  value: FluidSize | number,
  _axis: 'horizontal' | 'vertical' = 'horizontal',
) => {
  let options = value
  if (typeof value === 'number') {
    options = {
      min: value * 0.75,
      max: value,
      scale: 1,
      axis: _axis,
    } as FluidSize
  }
  const {min, max, scale = 1, axis = 'horizontal'} = options as FluidSize

  const minSize = min * scale
  const maxSize = max * scale
  const isHorizontal = axis === 'horizontal'
  const length = isHorizontal ? width : height
  const minLength = isHorizontal ? config.minWidth : config.minHeight
  const maxLength = isHorizontal ? config.maxWidth : config.maxHeight
  switch (true) {
    case length <= minLength:
      return minSize
    case length >= maxLength:
      return maxSize
    default:
      return Math.ceil(
        minSize +
          (maxSize - minSize) *
            ((length - minLength) / (maxLength - minLength)),
      )
  }
}
