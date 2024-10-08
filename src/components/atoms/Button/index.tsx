/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { Responsive } from 'types/styles'
import {
  toPropValue,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  Space,
} from 'utils/styles'

// ボタンのバリアント
export type ButtonVariant = 'primary' | 'secondary' | 'monotone'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
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
  pseudoClass?: {
    hover?: {
      backgroundColor?: Responsive<Color>
    }
    disabled?: {
      backgroundColor?: Responsive<Color>
    }
  }
}

const variants = {
  // プライマリ
  primary: {
    color: '#ffffff',
    backgroundColor: '#ff008c',
    border: '1px solid #ff008c',
    pseudoClass: {
      hover: {
        backgroundColor: '#ff008c',
      },
      disabled: {
        backgroundColor: '#3f51b5',
      },
    },
  },
  // セカンダリ
  secondary: {
    color: '#ff008c',
    backgroundColor: '#ffffff',
    border: '1px solid #ff008c',
    pseudoClass: {
      hover: {
        backgroundColor: '#ffffff',
      },
      disabled: {
        backgroundColor: '#f50057',
      },
    },
  },
  // モノトーン
  monotone: {
    color: '#4d4d4d',
    backgroundColor: '#ffffff',
    border: '1px solid #666',
    pseudoClass: {
      hover: {
        backgroundColor: '#ffffff',
      },
      disabled: {
        backgroundColor: '#ed1c24',
      },
    },
  },
}

/**
 * ボタン
 * バリアント、色、タイポグラフィ、レイアウト、スペース関連のPropsを追加
 */
const Button = styled.button<ButtonProps>`
  ${({ variant, color, border, backgroundColor, pseudoClass }) => {
    // バリアントのスタイルの適用
    if (variant && variants[variant]) {
      const styles = []
      !color &&
        styles.push(toPropValue('color', variants[variant].color))
      !border &&
        styles.push(toPropValue('border', variants[variant].border))
      !backgroundColor &&
        styles.push(
          toPropValue(
            'background-color',
            variants[variant].backgroundColor,
          ),
        )
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
  &:hover {
    ${(props) =>
      toPropValue(
        'background-color',
        props?.pseudoClass?.hover?.backgroundColor,
      )}
  }
  &:disabled {
    ${(props) =>
      toPropValue(
        'background-color',
        props?.pseudoClass?.disabled?.backgroundColor,
      )}
  }
  cursor: pointer;
  outline: 0;
  text-decoration: 'none';
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border-radius: 50px;
  box-shadow: 0 4px 0 rgba(0,0,0,.1);
  font: bold 16px "Noto Sans JP",sans-serif;
`

Button.defaultProps = {
  variant: 'primary',
  paddingLeft: "24px",
  paddingRight: "24px",
  paddingTop: "16px",
  paddingBottom: "16px",
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  fontSize: 'inherit',
}

export default Button