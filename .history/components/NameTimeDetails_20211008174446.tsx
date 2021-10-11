import React, { useState, FC } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

interface Props {
  screenType: string;
}

const NameTimeDetails: FC<Props> = ({ screenType }) => {

 // const [screenType, setScreenType] = useState(0);

  return (
    <View>
      <View style={styles.centeredView}>
        <Text style={styles.subText}>
          {screenType == "nameScreen" ? 'Its great that youre here! First things first, what should we call you?'
           : 'When is your baby due, Sam?'}</Text>

        <TextInput
          placeholder="Your Name"
          style={styles.input}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: '100%',
    paddingLeft: '10%',
    paddingRight: '10%'
  },

  subText: {
    textAlign: 'center',
    fontSize: 25,
    width: '90%',
    fontWeight: "300",
    color: "#4a4a4a",
    paddingBottom: '10%'
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
    fontWeight: '500',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: '3%',
    marginBottom: '10%',
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
  }

});

export default NameTimeDetails

