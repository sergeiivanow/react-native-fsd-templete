import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

const config = {
  minWidth: 320,
  maxWidth: 390,
  minHeight: 500,
  maxHeight: 700,
}

interface Constraint {
  min: number
  max: number
}

type FluidType = Constraint

export const fluidType = ({min: minFontSize, max: maxFontSize}: FluidType) => {
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

export const fluidSize = ({
  min,
  max,
  scale = 1,
  axis = 'horizontal',
}: FluidSize) => {
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
