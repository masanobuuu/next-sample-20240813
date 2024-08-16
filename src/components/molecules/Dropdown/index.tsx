import React, { useEffect, useState, useRef, useCallback } from 'react'
import styled from 'styled-components'
import Text from 'components/atoms/Text'
import Flex from 'components/layout/Flex'
import { DropdownRoot, DropdownControl, DropdownValue, DropdownPlaceholder, DropdownArrow, DropdownMenu, DropdownOption } from './styledComp'

interface DropdownItemProps {
  item: DropdownItem
}

const DropdownItem = (props: DropdownItemProps) => {
  const { item } = props
  return (
    <Flex alignItems="center">
      <Text margin={0} variant="small">
        {item.label ?? item.value}
      </Text>
    </Flex>
  )
}

export interface DropdownItem {
  id: string | number | null // カスタマイズ
  value: string | number | null
  label?: string
  data?: object | null // カスタマイズ
}

interface DropdownProps {
  /**
   * ドロップダウンの選択肢
   */
  options: DropdownItem[]
  /**
   * ドロップダウンの値
   */
  value?: string | number
  /**
   * <input />のname属性
   */
  name?: string
  /**
   * プレースホルダー
   */
  placeholder?: string
  /**
   * バリデーションエラーフラグ
   */
  hasError?: boolean
  /**
   * 値が変化した時のイベントハンドラ
   */
  onChange?: (selected?: DropdownItem) => void
  /**
 * Disable
 */
  disabled?: boolean | string
}

/**
 * ドロップダウン
 */
const Dropdown = (props: DropdownProps) => {
  // disableを追加する
  const { onChange, name, value, options, hasError, disabled } = props

  const initialItem = options.find((i) => i.value === value)

  const [isOpen, setIsOpenValue] = useState(false)

  const [selectedItem, setSelectedItem] = useState(initialItem)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDocumentClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      // 自分自身をクリックした場合は何もしない
      if (dropdownRef.current) {
        const elems = dropdownRef.current.querySelectorAll('*')

        for (let i = 0; i < elems.length; i++) {
          if (elems[i] == e.target) {
            return
          }
        }
      }

      setIsOpenValue(false)
    },
    [dropdownRef],
  )

  const handleMouseDown = (e: React.SyntheticEvent) => {
    setIsOpenValue((isOpen) => !isOpen)
    e.stopPropagation()
  }

  const handleSelectValue = (
    e: React.FormEvent<HTMLDivElement>,
    item: DropdownItem,
  ) => {
    e.stopPropagation()

    setSelectedItem(item)
    setIsOpenValue(false)
    onChange && onChange(item)
  }

  useEffect(() => {
    // 画面外のクリックとタッチをイベントを設定
    document.addEventListener('click', handleDocumentClick, false)
    document.addEventListener('touchend', handleDocumentClick, false)

    return function cleanup() {
      document.removeEventListener('click', handleDocumentClick, false)
      document.removeEventListener('touchend', handleDocumentClick, false)
    }
    // 最初だけ呼び出す
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DropdownRoot ref={dropdownRef}>

      {/* DropdownControlの外観と挙動をdisableの状態に応じて出し分けできないか？ */}
      <DropdownControl
        disabled = {disabled}  //disable==trueの場合は外観を変える
        hasError = {hasError}
        onMouseDown = {handleMouseDown} //disable==trueの場合は発火させない
        onTouchEnd = {handleMouseDown} //disable==trueの場合は発火させない
        data-testid = "dropdown-control"
      >
        {selectedItem && (
          <DropdownValue>
            <DropdownItem item={selectedItem} />
          </DropdownValue>
        )}
        {/* 何も選択されてない時はプレースホルダーを表示 */}
        {!selectedItem && (
          <DropdownPlaceholder>{props?.placeholder}</DropdownPlaceholder>
        )}
        {/* ダミーinput */}
        <input
          type="hidden"
          name={name}
          value={selectedItem?.value ?? ''}
          onChange={() => onChange && onChange(selectedItem)}
        />
        <DropdownArrow isOpen={isOpen} />
      </DropdownControl>

      {/* ドロップダウンを表示 */}
      {isOpen && (
        <DropdownMenu>
          {props.options.map((item, idx) => (
            <DropdownOption
              key={idx}
              onMouseDown={(e) => handleSelectValue(e, item)}
              onClick={(e) => handleSelectValue(e, item)}
              data-testid="dropdown-option"
            >
              <DropdownItem item={item} />
            </DropdownOption>
          ))}
        </DropdownMenu>
      )}
    </DropdownRoot>
  )
}

export default Dropdown