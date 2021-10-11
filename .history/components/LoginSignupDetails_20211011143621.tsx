import React, { useState, FC } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

interface Props {
  screenType: string;
  callbackEmail: Function;
  callbackPassword: Function;
}

const LoginSignupDetails: FC<Props> = ({ screenType, callbackEmail, callbackPassword }) => {
  const [text, setText] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [truefalse, setTrueFalse] = useState<boolean>(false);
  const [truefalsePassword, setTrueFalsePassword] = useState<boolean>(false);

  function validateEmail (value: any) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(value);
  }

  function validatePassword (valuePass: any) {
    return valuePass.length >= 5
  }
  
  function testEmail (text: any) {
    setText(text)
    if (!validateEmail(text)) {
      // not a valid email
      setTrueFalse(false)
      callbackEmail(truefalse)
    } 
    else if (validateEmail(text)) {
      // valid email
      setTrueFalse(true)
      callbackEmail(truefalse)
   }
  }

  function testPassword (password: any) {
    setPassword(password)
    if (!validatePassword(password)) {
      // not a valid password
      setTrueFalsePassword(false)
      callbackPassword(truefalsePassword)
    } 
    else if (validatePassword(password)) {
      // valid password
      setTrueFalsePassword(true)
      callbackPassword(truefalsePassword)
   }
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
          onChangeText={text => testEmail(text)}
          onBlur={text => testEmail(text)}
        />

        <View style={{ flexDirection: 'row-reverse'}}>
          <TextInput
            placeholder={'Enter a password'}
            secureTextEntry={true}
            keyboardType="default"
            returnKeyType="next"
            style={styles.input}
            onChangeText={password => testPassword(password)}
            onBlur={password => testPassword(password)}
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

