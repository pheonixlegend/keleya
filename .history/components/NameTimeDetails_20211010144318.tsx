import React, { useState, FC } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { Picker } from "@react-native-picker/picker";

interface Props {
  screenType: string;
}

const NameTimeDetails: FC<Props> = ({ screenType }) => {

 // const [screenType, setScreenType] = useState(0);
 const [routine, setRoutine] = useState('Unknown');

  return (
    <View>
      <Text style={[styles.titleText, screenType == "workoutScreen" ? { display: 'flex' } 
            : { display: 'none' }]}>
          How many times a week do you want to be active
      </Text>
      <View style={styles.centeredView}>
        <Text style={[styles.subText, screenType == "workoutScreen" ? { display: 'none' } 
            : { display: 'flex' }]}>
          {screenType == "nameScreen" ? 
            'It\'s great that you\'re here! First things first, what should we call you?'
           : 'When is your baby due, Sam?'}
        </Text>

        <TextInput
          placeholder="Your Name"
          style={[styles.input, screenType == "workoutScreen" ? { display: 'none' } 
          : { display: 'flex' }]}
        /> 

        <Picker
          selectedValue={routine}
          onValueChange={(value, index) => setRoutine(value)}
          mode="dropdown" // Android only
          style={[styles.picker, screenType == "workoutScreen" ? { display: 'flex' } 
          : { display: 'none' }]}
        >
          <Picker.Item label="Once a week" value="1" />
          <Picker.Item label="2 times a week" value="2" />
          <Picker.Item label="3 times a week" value="3" />
          <Picker.Item label="4 times a week" value="4" />
          <Picker.Item label="5 times a week" value="5" />
          <Picker.Item label="6 times a week" value="6" />

        </Picker>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: '125%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },

  subText: {
    textAlign: 'center',
    fontSize: 26,
    width: '90%',
    fontWeight: "300",
    color: "#4a4a4a",
    paddingBottom: '10%'
  },

  titleText: {
    textAlign: 'center',
    fontSize: 26,
    width: '100%',
    paddingLeft: '10%',
    paddingRight: '10%',
    fontWeight: "300",
    color: "#4a4a4a",
    paddingBottom: '10%',
    position: 'absolute',
    top: 0,
    paddingTop: '10%'
  },

  forgotPasswordText: {
    textAlign: 'center',
    fontSize: 19,
    width: '90%',
    fontWeight: "300",
    color: "#4a4a4a",
    paddingBottom: '7%'
  },

  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    position: 'absolute',
  },

  customBtnBGBottom: {
    backgroundColor: "#69c0ba",
    borderRadius: 7,
    width: '80%',
    paddingTop: '3%',
    paddingBottom: '3%',
    marginBottom: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  customBtnTextBottom: {
    fontSize: 26,
    fontWeight: "500",
    color: "#ffff",
    textAlign: "center"
  },

  input: {
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: '3%',
    marginBottom: '12%',
    borderBottomColor: '#4a4a4a',
    borderBottomWidth: 1
  },

  checkboxView: {
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginTop: '-6%',
    paddingLeft: '5%',
    paddingRight: '5%',
    // display: 'none'
  },

  label: {
    margin: 8,
  },

  picker: {
    width: '90%',
    padding: '5%',
  }
});

export default NameTimeDetails

