import type { NextPage } from 'next'
import Box from 'components/layout/Box'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import Dropdown from 'components/molecules/Dropdown'
import DropdownSection from 'components/organisms/selectDeviceSection'


const Test: NextPage = () => {
  return (
    <div>
      <Box width="256px" height="80px" padding="16px">
        <Button>ボタン</Button>
      </Box>
      <Box width="256px" height="80px" padding="16px">
        <Button variant="secondary">ボタン</Button>
      </Box>
      <Box width="256px" height="80px" padding="16px">
        <Button variant="monotone">ボタン</Button>
      </Box>

      <Box width="256px" height="auto" padding="16px">
        <Text>楽天会員1倍と楽天モバイルSPU＋4倍の合計値です。</Text>
        <Text variant='extraSmall'>※楽天モバイルSPUの毎月の獲得上限ポイント数は2,000ポイント。期間限定ポイントでの付与。詳細はこちらをご確認ください。</Text>
      </Box>

    </div>
  )
}

export default Test