import React from 'react'
import { useEffect } from 'react'
import { StatusBar, Platform, LogBox } from 'react-native'
import { AppColors } from './Src/Theme/AppColors'
import AuthStack from './Src/Routes/AuthStack'
import ProfileStack from './Src/Routes/ProfileStack'
const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content')
    Platform.OS == "android" && StatusBar.setBackgroundColor(AppColors.main)
    LogBox.ignoreAllLogs(true)
  }, [])
  return (
    <>
      <ProfileStack />
      {/* <AuthStack/> */}
    </>
  )
}

export default App
