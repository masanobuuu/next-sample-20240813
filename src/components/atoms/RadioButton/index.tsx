import React, { useState } from "react";
import styled from 'styled-components'
import StyledRadioButton from './styledComp'


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
          <StyledRadioButton disabled={disabled} {...obj} >
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={onChange}
              disabled={disabled}
            />
            {option}
          </StyledRadioButton>
        </label>
      ))}
    </div>
  )
}