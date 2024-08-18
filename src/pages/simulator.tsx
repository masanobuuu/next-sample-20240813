import type { NextPage } from 'next'
import Box from 'components/layout/Box'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import Dropdown from 'components/molecules/Dropdown'
import SelectDeviceSection from 'components/organisms/selectDeviceSection'
import SelectPlanSection from 'components/organisms/selectPlanSection'
import SummarySection from 'pages/simulator'
import React, { useContext, createContext } from 'react'

// PlanDataを設定するとなぜかエラーになる。とりあえずanyで
export const PlanDataContext = React.createContext<any>(null)

type PlanData = [
  {
    id: number
    value: string
    label: string
    data: object
  }
]

/*
const planData = {
  id: 1,
  value: "3GB",
  label: "3GBまで",
  data: { price: 980 }
}
*/


const planData = [
  { id: 1, value: "3GB", label: "3GBまで", data: { price: 980 } },
  { id: 2, value: "3GB～20GBまで", label: "3GB～20GBまで", data: { price: 1980 } },
  { id: 3, value: "20GB以上", label: "20GB以上", data: { price: 2980 } }
]


const Simulator: NextPage = () => {

  return (
    <div>
      <Box width="auto" height="auto" padding="8px" margin="8px">
        <SelectDeviceSection />
      </Box>

      <Box width="auto" height="auto" padding="8px" margin="8px">
        <PlanDataContext.Provider value={planData}>
          <SelectPlanSection />
        </PlanDataContext.Provider>
      </Box>

      <Box width="auto" height="auto" padding="8px" margin="8px">
        <SummarySection />
      </Box>


    </div>
  )
}

export default Simulator