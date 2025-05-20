import React from 'react'

const useDashboard = () => {
  const [selectedData, setSelectedData] = React.useState<any>(null)

  return{
    selectedData,
    setSelectedData,
  }
}

export default useDashboard