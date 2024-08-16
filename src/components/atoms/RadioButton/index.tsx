import React, { useState } from "react";
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


const variants = {
  normal: {
    backgroundColor: '#FFFFFF',
    DisableBackgroundColor: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#676767',
    DisableColor: '#F7F7F7',
    pseudoClass: {
      hover: {
        backgroundColor: 'none',
      },
    },
  },
  border: {
    backgroundColor: '#FFFFFF',
    DisableBackgroundColor: 'F7F7F7',
    border: '1px solid #bfbfbf',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#333333',
    DisableColor: '#bfbfbf',
    pseudoClass: {
      hover: {
        backgroundColor: '#F7F7F7',
      },

    },
  },
}


// バリアント
type RadioButtonVariant =
  | 'normal'
  | 'border'


type RadioButtonStyleProps = {
  variant?: RadioButtonVariant
  fontSize?: Responsive<FontSize>
  fontWeight?: Responsive<string>
  letterSpacing?: Responsive<LetterSpacing>
  lineHeight?: Responsive<LineHeight>
  textAlign?: Responsive<string>
  color?: Responsive<Color>
  DisableColor?: Responsive<string>
  backgroundColor?: Responsive<Color>
  DisableBackgroundColor?: Responsive<string>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  disabled?: Responsive<string>
  border?: Responsive<string>
  borderRadius?: Responsive<string>
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
  pseudoClass?: {
    hover?: {
      backgroundColor?: Responsive<Color>
    }
  }
}

const RadioButtonStyle = styled.div<RadioButtonStyleProps>`
  { /* バリアントから受け取る・かつ条件分岐に使用するプロパティを指定 */}
  ${({ variant, backgroundColor, color, fontSize, border, borderRadius, pseudoClass, disabled }) => {
    // バリアントのスタイルの適用
    if (variant && variants[variant]) {
      const styles = []
      !fontSize &&
        styles.push(toPropValue('font-size', variants[variant].fontSize))
      !color &&
        styles.push(toPropValue('color', variants[variant].color))
      !border &&
        styles.push(toPropValue('border', variants[variant].border))
      !borderRadius &&
        styles.push(toPropValue('border-radius', variants[variant].borderRadius))
      if (disabled !== 'disabled') {
        !backgroundColor &&
          styles.push(toPropValue('background-color', variants[variant].backgroundColor))
        !pseudoClass &&
          styles.push(
            `&:hover {
            ${toPropValue(
              'background-color',
              variants[variant].pseudoClass.hover.backgroundColor,
            )}
          }`.replaceAll('\n', ''),
          )
      } else {
        disabled &&
          styles.push(toPropValue('background-color', variants[variant].DisableBackgroundColor))
          styles.push(toPropValue('color', variants[variant].DisableColor))
      }
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

RadioButtonStyle.defaultProps = {
  variant: 'normal',
  margin: '8px',
  padding: '8px'
}

interface RadioButtonProps {
  options: string[]
  selectedOption?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  variant: string
  disabled?: string | undefined | boolean
}


export default function RadioButton(props: RadioButtonProps) {

  // RadioButto実行時に渡されるプロパティを同名の変数に分割代入
  const { options, selectedOption, onChange, disabled, ...obj } = props

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          { /*@ts-ignore*/}
          <RadioButtonStyle disabled={disabled} {...obj} >
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={onChange}
              disabled={disabled}
            />
            {option}
          </RadioButtonStyle>
        </label>
      ))}
    </div>
  )
}