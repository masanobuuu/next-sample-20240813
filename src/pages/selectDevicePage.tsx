import type { NextPage } from 'next'
import Box from 'components/layout/Box'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import Dropdown from 'components/molecules/Dropdown'
import SelectDeviceSection from 'components/organisms/selectDeviceSection'
import SelectPlanSection from 'components/organisms/selectPlanSection'


const Test: NextPage = () => {
  return (
    <div>
      <Box width="auto" height="auto" padding="16px" margin="16px">
        <SelectDeviceSection />
      </Box>
      <Box width="auto" height="auto" padding="16px" margin="16px">
        <SelectPlanSection />
      </Box>
    </div>
  )
}

export default Test