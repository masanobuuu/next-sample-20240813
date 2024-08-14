import React, { useState } from "react";



interface DropdownProps {
    options: string[]
    selectedOption:string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  }


export default function RadioButton(props:DropdownProps) {
    const { options, selectedOption, onChange } = props
  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </div>
  )
}