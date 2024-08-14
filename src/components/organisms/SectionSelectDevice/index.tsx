import React, { useEffect, useState, useRef, useCallback } from 'react'
import styled from 'styled-components'
import Text from 'components/atoms/Text'
import Flex from 'components/layout/Flex'
import Box from 'components/layout/Box'
import Dropdown from 'components/molecules/Dropdown'



const SectionSelectDevice = () => {

    // ステートを定義
    const [option, setOption] = useState('')
    const [price24, setPrice24] = useState('')
    const [price48, setPrice48] = useState('')

    // 以下の関数をprops経由で子コンポーネント（Dropdown）に渡す
    // ドロップダウンの項目選択がトリガーとなって子コンポーネント（Dropdown）側で以下関数の引数にitemが格納される
    // itemが格納された時点で親コンポーネントが保有しているステート（price）を更新する
    const onChange = (item:any) => {
      setPrice24(item.data.price24)
      setPrice48(item.data.price48)
    }

    return (
      <div>
        <Box width="400px" height="auto" padding="16px" border="solid 1px">
            <Text>あなたが選択した製品の価格</Text>
            <Text>24回払いの場合：{price24}円/月</Text>
            <Text>48回払いの場合：{price48}円/月</Text>
            <Dropdown
                options={[
                  { id:1, value:'iPhone15ProMax', label:'iPhone15ProMax', data:{price24:10000, price48:5000}},
                  { id:2, value:'iPhone15Pro', label:'iPhone15Pro', data:{price24:8000, price48:4000}},
                ]}
                placeholder="製品を選択してください"
                onChange={onChange}
            />
        </Box>
      </div>
    )
  }
  
  export default SectionSelectDevice