import type { NextPage } from 'next'
import Box from 'components/layout/Box'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import Dropdown from 'components/molecules/Dropdown'
import SelectDeviceSection from 'components/organisms/selectDeviceSection'
import SelectPlanSection from 'components/organisms/selectPlanSection'
import SummarySection from 'components/organisms/summarySection'
import React, { useContext } from 'react'


const Simulator: NextPage = () => {

  return (
    <div>
      <Box width="auto" height="auto" padding="8px" margin="8px">
        <SelectDeviceSection />
      </Box>

      <Box width="auto" height="auto" padding="8px" margin="8px">
        <PlanDataContexst.Provider>
          <SelectPlanSection />
        </PlanDataContexst.Provider>
      </Box>

      <Box width="auto" height="auto" padding="8px" margin="8px">
        <SummarySection />
      </Box>


    </div>
  )
}

export default Simulator