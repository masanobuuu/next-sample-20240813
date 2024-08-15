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
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#676767',
    pseudoClass: {
      hover: {
        backgroundColor: '#ff008c',
      },
      disabled: {
        backgroundColor: '#3f51b5',
      },
    },
  },
  border: {
    border: '1px solid #333333',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#333333',
    pseudoClass: {
      hover: {
        backgroundColor: '#ff008c',
      },
      disabled: {
        backgroundColor: '#3f51b5',
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
  backgroundColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
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
    disabled?: {
      backgroundColor?: Responsive<Color>
    }
  }
}

const RadioButtonStyle = styled.div<RadioButtonStyleProps>`
  ${({ variant, color, fontSize, border, borderRadius, pseudoClass }) => {
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
      !pseudoClass &&
        styles.push(
          `&:hover {
            ${toPropValue(
            'background-color',
            variants[variant].pseudoClass.hover.backgroundColor,
          )}
          }`.replaceAll('\n', ''),
        )
      !pseudoClass &&
        styles.push(
          `&:disabled {
            ${toPropValue(
            'background-color',
            variants[variant].pseudoClass.disabled.backgroundColor,
          )}
          }`.replaceAll('\n', ''),
        )
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
  margin:8px;
  padding:8px;
`

RadioButtonStyle.defaultProps = {
  // variant: 'normal',
}




interface RadioButtonProps {
  options: string[]
  selectedOption: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  variant: string
}

//P304を参考にして親コンポーネント側のpropsにvatiantを持たせたほうがいい
export default function RadioButton(props: RadioButtonProps) {
  //以下にswitchを追加する
  const { options, selectedOption, onChange, variant } = props

  /*
  const fnVariantCheck = () => {
    switch (variant) {
      case 'normal':
        return "border='none'"
      case 'border':
        return "border='1px solid #333333'"
    }}
  console.log(fnVariantCheck(variant))
  */


  type RadioButtonStylePropVar = {
    borderStyle: string;
    paddingStyle: string;
  }

  const { borderStyle, paddingStyle } = (
    ()=>{
      switch (variant) {
        case 'normal':
          return { borderStyle:'none', paddingStyle:'24px' }
        case 'border':
          return { borderStyle: '1px solid #333333', paddingStyle:'24px' }
      }}
  )()

  console.log(borderStyle)
  console.log(paddingStyle)

  return (
    <div>
      {options.map((option) => (
        <RadioButtonStyle border={borderStyle} padding={paddingStyle}>
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={onChange}
            />
            {option}
          </label>
        </RadioButtonStyle>
      ))}
    </div>
  )
}