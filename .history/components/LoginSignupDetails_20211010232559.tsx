import React, { useState, FC } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

interface Props {
  screenType: string;
}

const LoginSignupDetails: FC<Props> = ({ screenType }) => {
  const [text, setText] = useState<String>('');
  const [truefalse, setTrueFalse] = useState<String>('');
  const [truefalsePassword, setTrueFalsePassword] = useState<String>('');

  function validateEmail (value: any) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(value);
  }

  function validatePassword (value: any) {
    const regexpPass = /^.{6,14}$/;
    return regexpPass.test(value);
  }
  

  return (
    <View>
      <View style={styles.centeredView}>
        <Text style={styles.subText}>{screenType == "signInScreen" ? 'Welcome back' : 'Add your details below to set up an account'}</Text>

        <TextInput
          placeholder="example@gmail.com"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          style={styles.input}
          onChangeText={text => setText(text)}
          onBlur = {() => {
            if (!validateEmail(text)) {
               // not a valid email
               setTrueFalse('false')
            } else {
               // valid email
               setTrueFalse('true')
            }
          }}
        />

        <Text style={{padding: 10, fontSize: 42}}>
        {truefalsePassword}
      </Text>

        <View style={{ flexDirection: 'row-reverse'}}>
          <TextInput
            placeholder={'Enter a password'}
            secureTextEntry={true}
            keyboardType="default"
            returnKeyType="next"
            style={styles.input}
            onChangeText={text => setTrueFalse(text)}
            onBlur = {() => {
              if (!validatePassword(text)) {
                 // not a valid email
                 setTrueFalsePassword('false')
              } else {
                 // valid email
                 setTrueFalsePassword('true')
              }
            }}
          />
          <MaterialIcons 
            name='remove-red-eye' size={24}
            color="#4a4a4a"
            style={{position: 'absolute', marginRight: '0.5%',}}
          />
        </View>

      </View>

      <View style={[styles.checkboxView, screenType == "signInScreen" ? { display: 'none'} : { display: 'flex'}]}>
        <CheckBox
          title="I've read the privacy policy"
          uncheckedColor='#9adcd7'
          size={26}
          containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', margin: 0}}
        />
        <CheckBox
          title="I accept the terms & conditions and Keleya's advice"
          uncheckedColor='#9adcd7'
          size={26}
          containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', marginTop: '-3%'}}
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
    marginTop: '80%',
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

export default LoginSignupDetails

