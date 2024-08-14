import type { NextPage } from 'next'
import Box from 'components/layout/Box'
import React, { useState } from "react";
import RadioButton from 'components/atoms/RadioButton'

const RadioButtonPage: NextPage = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const options = ["Option 1", "Option 2", "Option 3"];
  
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div>
        <RadioButton
          options={options}
          selectedOption={selectedOption}
          onChange={handleOptionChange}
        />
      </div>
    )
  }

  export default RadioButtonPage