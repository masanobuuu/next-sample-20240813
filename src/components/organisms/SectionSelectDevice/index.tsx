import React, { useEffect, useState, useRef, useCallback } from 'react'
import styled from 'styled-components'
import Text from 'components/atoms/Text'
import Flex from 'components/layout/Flex'
import Box from 'components/layout/Box'
import Dropdown from 'components/molecules/Dropdown'



const SectionSelectDevice = () => {

  // ステートを定義
  const [option, setOption] = useState('')
  const [error, setError] = useState('')
  const [price24, setPrice24] = useState('')
  const [price48, setPrice48] = useState('')

  // fhechDeviceDataを定義（publicディレクトリのjsonファイルを読み込む）
  const fhechDeviceData = async () => {
    const res = await fetch('deviceData.json')
    if (res.ok) { return res.json() }
    throw new Error(res.statusText)
  }

  // 初期描画時のみfhechDeviceDataを実行
  useEffect(() => {
    fhechDeviceData()
      .then(result => setOption(result))
      .catch(err => setError(err.message))
  }, [])

  console.log(option)

  // 子コンポーネント（Dropdown）側でステートを更新するための関数
  // ドロップダウンの項目選択がトリガーとなって子コンポーネント（Dropdown）側で以下関数の引数にオブジェクト（item）が格納される
  // itemが格納された時点で親コンポーネントが保有しているステート（price）を更新する
  const onChange = (item: any) => {
    setPrice24(item.data.price24)
    setPrice48(item.data.price48)
  }

  return (
    <div>
      <Box width="400px" height="auto" padding="16px" border="solid 1px">
        <Text>あなたが選択した製品の価格</Text>
        <Text>24回払いの場合：{price24}円/月</Text>
        <Text>48回払いの場合：{price48}円/月</Text>
        <Dropdown //以下を修正する
          options={
            [
              { id: 1, value: 'iPhone15ProMax', label: 'iPhone15ProMax', data: { price24: 10000, price48: 5000 } },
              { id: 2, value: 'iPhone15Pro', label: 'iPhone15Pro', data: { price24: 8000, price48: 4000 } },
            ]
          }
          placeholder="製品を選択してください"
          onChange={onChange}
        />
      </Box>
    </div>
  )
}

export default SectionSelectDevice