/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import type { Responsive } from 'types/styles'
import {
  toPropValue,
  Space,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
} from 'utils/styles'

// テキストバリアント
export type TextVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'extraLarge'

export type TextProps = {
  variant?: TextVariant
  fontSize?: Responsive<FontSize>
  fontWeight?: Responsive<string>
  letterSpacing?: Responsive<LetterSpacing>
  lineHeight?: Responsive<LineHeight>
  textAlign?: Responsive<string>
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<Space>
  marginTop?: Responsive<Space>
  marginRight?: Responsive<Space>
  marginBottom?: Responsive<Space>
  marginLeft?: Responsive<Space>
  padding?: Responsive<Space>
  paddingTop?: Responsive<Space>
  paddingRight?: Responsive<Space>
  paddingBottom?: Responsive<Space>
  paddingLeft?: Responsive<Space>
}

const variants = {
  extraSmall: {
    fontSize: '12px',
    color: '#676767',
    letterSpacing: 1,
    lineHeight: 1.4,
  },
  small: {
    fontSize: '14px',
    color: '#333333',
    letterSpacing: 1,
    lineHeight: 1.4,
  },
  medium: {
    fontSize: '16px',
    color: '#333333',
    letterSpacing: 2,
    lineHeight: 1.5,
  },
  mediumLarge: {
    fontSize: '20px',
    color: '#333333',
    letterSpacing: 3,
    lineHeight: 3,
  },
  large: {
    fontSize: '24px',
    color: '#333333',
    letterSpacing: 4,
    lineHeight: 4,
  },
  extraLarge: {
    fontSize: '32px',
    color: '#333333',
    letterSpacing: 5,
    lineHeight: 5,
  },
}

/**
 * テキスト
 * バリアント、色、タイポグラフィ、レイアウト、スペース関連のPropsを追加
 */
const Text = styled.p<TextProps>`
  ${({ variant, color, fontSize, letterSpacing, lineHeight }) => {
    // バリアントのスタイルの適用
    if (variant && variants[variant]) {
      const styles = []
      !fontSize &&
        styles.push(toPropValue('font-size', variants[variant].fontSize))
      !color &&
        styles.push(toPropValue('color', variants[variant].color))
      !letterSpacing &&
        styles.push(
          toPropValue('letter-spacing', variants[variant].letterSpacing))
      !lineHeight &&
        styles.push(
          toPropValue('line-height', variants[variant].lineHeight))
      return styles.join('\n')
    }
  }}
  ${(props) => toPropValue('font-size', props.fontSize)}
  ${(props) => toPropValue('letter-spacing', props.letterSpacing)}
  ${(props) => toPropValue('line-height', props.lineHeight)}
  ${(props) => toPropValue('color', props.color)}
  ${(props) => toPropValue('background-color', props.backgroundColor)}
  ${(props) => toPropValue('width', props.width)}
  ${(props) => toPropValue('height', props.height)}
  ${(props) => toPropValue('min-width', props.minWidth)}
  ${(props) => toPropValue('min-height', props.minHeight)}
  ${(props) => toPropValue('display', props.display)}
  ${(props) => toPropValue('border', props.border)}
  ${(props) => toPropValue('overflow', props.overflow)}
  ${(props) => toPropValue('margin', props.margin)}
  ${(props) => toPropValue('margin-top', props.marginTop)}
  ${(props) => toPropValue('margin-left', props.marginLeft)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom)}
  ${(props) => toPropValue('margin-right', props.marginRight)}
  ${(props) => toPropValue('padding', props.padding)}
  ${(props) => toPropValue('padding-top', props.paddingTop)}
  ${(props) => toPropValue('padding-left', props.paddingLeft)}
  ${(props) => toPropValue('padding-bottom', props.paddingBottom)}
  ${(props) => toPropValue('padding-right', props.paddingRight)}
  font-family: 'Noto Sans JP",sans-serif';
`

Text.defaultProps = {
  variant: 'medium',
  margin: "8px",
}

export default Text