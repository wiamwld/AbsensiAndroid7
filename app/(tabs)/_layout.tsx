import { Tabs } from "expo-router";

export default function _layout() {
  return (
  <Tabs>
      <Tabs.Screen
        name="index"/>    
        <Tabs.Screen name="absen"/>
        <Tabs.Screen name="profile"/>
  </Tabs>
  )
}
