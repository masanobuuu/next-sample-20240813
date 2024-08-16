import type { NextPage } from 'next'
import Box from 'components/layout/Box'
import React, { useState } from "react";
import RadioButton from 'components/atoms/RadioButton'
import Text from 'components/atoms/Text'

const RadioButtonPage: NextPage = () => {

  const options = ["Option 1", "Option 2", "Option 3"];

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");

  const handleOptionChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption1(event.target.value);
  };

  const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption2(event.target.value);
  };
  
  const handleOptionChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption3(event.target.value);
  };

  return (
    <div>
      <RadioButton
        options={options}
        selectedOption={selectedOption1}
        onChange={handleOptionChange1}
        variant='none'
      />
      <Text>選択中の項目：{selectedOption1}</Text>

      <Box margin='8px' padding='8px' backgroundColor='rgb(247, 247, 247)'>
        <RadioButton
          options={options}
          selectedOption={selectedOption2}
          onChange={handleOptionChange2}
          variant='border'
        />
        <Text>選択中の項目：{selectedOption2}</Text>
      </Box>

      <Box margin='8px' padding='8px' backgroundColor='rgb(247, 247, 247)'>
        <RadioButton
          options={options}
          selectedOption={selectedOption3}
          onChange={handleOptionChange3}
          variant='border'
          disabled='disabled'
        />
        <Text>選択中の項目：{selectedOption3}</Text>
      </Box>
    </div>
  )
}

export default RadioButtonPage