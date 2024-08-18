import React, { useEffect, useState, useRef, useCallback } from 'react'
import styled from 'styled-components'
import Text from 'components/atoms/Text'
import Flex from 'components/layout/Flex'
import Box from 'components/layout/Box'
import Dropdown from 'components/molecules/Dropdown'



const SelectDeviceSection = () => {

  // ステートを定義
  const [option, setOption] = useState('')
  const [error, setError] = useState('')
  const [price24, setPrice24] = useState('')
  const [price48, setPrice48] = useState('')
  const [spec, setSpec] = useState('')

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

  // 子コンポーネント（Dropdown）側でステートを更新するための関数
  // ドロップダウンの項目選択がトリガーとなって子コンポーネント（Dropdown）側で以下関数の引数にオブジェクト（item）が格納される
  // itemが格納された時点で親コンポーネントが保有しているステート（price）を更新する
  const onChange = (item: any) => {
    setPrice24(item.data.price24)
    setPrice48(item.data.price48)
    setSpec(item.data.spec)
  }
  console.log(option)
  return (
    <div>
      {/* Boxを使わずにSelectDeviceSection専用のstyleComp.tsxを作成し同じディレクトリに設置するのはどうか？ */}
      <Box width="400px" height="auto" padding="16px" border="solid 1px">

        <Text>ご希望の製品を選択してください</Text>

        <Dropdown
          // スプレッド構文でステートoption内のオブジェクトを分解して出力
          /* @ts-ignore */
          options={ [...option]}
          placeholder="製品を選択してください"
          onChange={onChange}
          // disabled= {true}
          // hasError={true}
          // errorMessage='エラー時に表示するメッセージ'
        />
        <Box marginTop="16px" border="solid 1px">
          <Text>製品の価格</Text>
          {price24==='' ? '' : <Text>24回払いの場合：{price24}円/月</Text>}
          {price48==='' ? '' : <Text>48回払いの場合：{price48}円/月</Text>}
        </Box>

        <Box marginTop="16px" border="solid 1px">
          <Text>製品の特徴</Text>
          {spec==='' ? '' : <Text>{spec}</Text>}
        </Box>

      </Box>
    </div>
  )
}

export default SelectDeviceSection