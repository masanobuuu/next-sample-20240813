import React, { useEffect, useState, useRef, useCallback } from 'react'
import styled from 'styled-components'
import Text from 'components/atoms/Text'
import Flex from 'components/layout/Flex'
import Box from 'components/layout/Box'
import Dropdown from 'components/molecules/Dropdown'



const SummarySection = () => {

  // ステートを定義
  const [option, setOption] = useState('')
  const [error, setError] = useState('')
  const [price, setPrice] = useState('')

  // fhechDeviceDataを定義（publicディレクトリのjsonファイルを読み込む）
  const fhechDeviceData = async () => {
    const res = await fetch('planData.json')
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
    setPrice(item.data.price)
  }

  return (
    <div>
      {/* Boxを使わずにSelectDeviceSection専用のstyleComp.tsxを作成し同じディレクトリに設置するのはどうか？ */}
      <Box width="400px" height="auto" padding="16px" border="solid 1px">

        <Text>毎月のデータ利用量を選択してください</Text>

        <Dropdown
          // スプレッド構文でステートoption内のオブジェクトを分解して出力
          /* @ts-ignore */
          options={ [...option] }
          placeholder="選択してください"
          onChange={onChange}
          // disabled= {true}
          // hasError={true}
          // errorMessage='エラー時に表示するメッセージ'
        />
        <Box marginTop="16px" border="solid 1px">
          <Text>月額料金</Text>
          {price==='' ? '' : <Text>{price}円/月</Text>}
        </Box>
      </Box>
    </div>
  )
}

export default SummarySection