import React, { useEffect, useState, useRef, useCallback } from 'react'
import styled from 'styled-components'
import Text from 'components/atoms/Text'
import Flex from 'components/layout/Flex'
import Box from 'components/layout/Box'
import Dropdown from 'components/molecules/Dropdown'

const SectionSelectDevice = () => {

    const [priceFull, setPriceFull] = useState('')

    //ステート

    return (
      <div>
        <Box width="400px" height="auto" padding="16px" border="solid 1px">
            <Text>あなたが選択した製品の価格</Text>
            <Text>{priceFull}円</Text>
            <Dropdown
                options={[
                { id:1, value:'iPhone15ProMax', label:'iPhone15ProMax', priceFull:10000},
                { id:2, value:'iPhone15Pro', label:'iPhone15Pro', priceFull:8000},
                ]}
                placeholder="製品を選択してください"
                onChange={(e)=> setPriceFull(e?.priceFull)}
            />
        </Box>
      </div>
    )
  }
  
  export default SectionSelectDevice