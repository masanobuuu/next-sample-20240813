import type { NextPage } from 'next'
import Box from 'components/layout/Box'
import Text from 'components/atoms/Text'
import React, { useState } from "react";
import RadioButton from 'components/atoms/RadioButton'

const RadioButtonPage: NextPage = () => {
    const [selectedOption, setSelectedOption] = useState("");
    // const options = ["Option 1", "Option 2", "Option 3"];
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
          fontSize='24px'
        />
        <Text>選択中の項目：{selectedOption}</Text>
      </div>
    )
  }

  export default RadioButtonPage