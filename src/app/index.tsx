import* as Notifications from 'expo-notifications';
import{ useEffect, useState} from 'react';
import{ Alert,Button,StyleSheet,Text,TextInput,View}from'react-native';


export default function ReminderTab(){
  const[isReminding,setIsreminding]= useState(false);
  const[message,setMessage]= useState("Time to drink a glass of water!");
  const[intervalMinute, setInterrvalMinutes]= useState(1);

  useEffect(()=>{
    async function requestPermissions(){
      const{status} = await Notifications.requestPermissionsAsync();
      if(status !=='granted'){
        Alert.alert(
          'Permission required',
          'We need notifications to remind you to drink water!'
        );
      }
    }
  
requestPermissions();
},[]
);
async function sheduleReminder(){}













}

