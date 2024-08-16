import styled from 'styled-components'

export const DropdownRoot = styled.div`
  position: relative;
  height: 38px;
`

// ドロップダウン外観
export const DropdownControl = styled.div<{ hasError?: boolean }>`
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  border: ${({ hasError }) =>
    hasError
      ? `1px solid red`
      : `1px solid #333333`};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 12px;
  width: auto;
`

export const DropdownValue = styled.div`
  color: #333333;
`

// ドロップダウンプレースホルダー
export const DropdownPlaceholder = styled.div`
  color: #757575;
  font-size: 14px;
  min-height: 20px;
  line-height: 20px;
`

// ドロップダウンの矢印の外観
export const DropdownArrow = styled.div<{ isOpen?: boolean }>`
  border-color: ${({ isOpen }) =>
    isOpen
      ? 'transparent transparent #222222;'
      : '#222222 transparent transparent'};
  border-width: ${({ isOpen }) => (isOpen ? '0 5px 5px' : '5px 5px 0;')};
  border-style: solid;
  content: ' ';
  display: block;
  height: 0;
  margin-top: -ceil(2.5);
  position: absolute;
  right: 10px;
  top: 16px;
  width: 0;
`

export const DropdownMenu = styled.div`
  background-color: #ffffff;
  border: 1px solid #666;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 10%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
`

export const DropdownOption = styled.div`
  padding: 8px 12px 8px 12px;
  &:hover {
    background-color: #f9f9f9;
  }
`