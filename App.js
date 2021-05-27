import React from 'react'
import { useEffect } from 'react'
import { StatusBar, Platform, LogBox } from 'react-native'
import { AppColors } from './Src/Theme/AppColors'
import AuthStack from './Src/Routes/AuthStack'
import ProfileStack from './Src/Routes/ProfileStack'
import SkinDiagnosis from './Src/Screens/SkinDiagnosis'
import SkinDiagnosisReport from './Src/Screens/SkinDiagnosisReport'
import SkinWellbeing from './Src/Screens/SkinWellbeing'
import CreateAffirmation from './Src/Screens/CreateAffirmation'
import AllAffirmations from './Src/Screens/AllAffirmations'
const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content')
    Platform.OS == "android" && StatusBar.setBackgroundColor(AppColors.main)
    LogBox.ignoreAllLogs(true)
  }, [])
  return (
    <>
      {/* <ProfileStack /> */}
      {/* <AuthStack/> */}
      {/* <SkinDiagnosisReport /> */}
      <SkinDiagnosis />
      {/* <SkinWellbeing /> */}
      {/* <CreateAffirmation/> */}
      {/* <AllAffirmations/> */}
    </>
  )
}

export default App
