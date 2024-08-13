import type { NextPage } from 'next'
import Box from 'components/layout/Box'
import Button from 'components/atoms/Button'


const Test: NextPage = () => {
  return (
    <div>
    <Box width="256px" height="80px" padding="16px">
        <Button>ボタン</Button>
    </Box>
    </div>
  )
}

export default Test