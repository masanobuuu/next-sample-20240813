import type { NextPage } from 'next'
import Box from 'components/layout/Box'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import Dropdown from 'components/molecules/Dropdown'
import SectionSelectDevice from 'components/organisms/SectionSelectDevice'


const Test: NextPage = () => {
  return (
    <div>
      <Box width="auto" height="auto" padding="16px">
        <SectionSelectDevice />
      </Box>
    </div>
  )
}

export default Test