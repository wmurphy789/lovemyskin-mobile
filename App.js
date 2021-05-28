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
import ViewAffirmation from './Src/Screens/ViewAffirmation'
import AffirmationStack from './Src/Routes/AffirmationsStack'
import MainTabNav from './Src/Routes/MainTab'
const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content')
    Platform.OS == "android" && StatusBar.setBackgroundColor(AppColors.main)
    // Platform.OS == "android" && StatusBar.setTranslucent(true)
    // Platform.OS == "android" && StatusBar.setBackgroundColor('rgba(1,1,1,0)')
    LogBox.ignoreAllLogs(true)
  }, [])
  return (
    <>
      {/* <ProfileStack /> */}
      {/* <AuthStack/> */}
      {/* <SkinDiagnosisReport /> */}
      {/* <SkinDiagnosis /> */}
      {/* <SkinWellbeing /> */}
      {/* <AffirmationStack/> */}
      <MainTabNav/>
    </>
  )
}

export default App
