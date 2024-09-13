import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

const RegistrationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require("../assets/Logo.png")} />
      </View>
    
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="user" size={20} color="#3DC2EC" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#707070"
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email-outline" size={20} color="#3DC2EC" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#707070"
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock" size={20} color="#3DC2EC" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#707070"
          secureTextEntry={true}
        />
        <Entypo name="eye-with-line" size={20} color="#3DC2EC" style={styles.eyeIcon} />
      </View>
      
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock" size={20} color="#3DC2EC" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#707070"
          secureTextEntry={true}
        />
        <Entypo name="eye-with-line" size={20} color="#3DC2EC" style={styles.eyeIcon} />
      </View>

      <TouchableOpacity style={styles.SignupButton}>
        <Text style={styles.SignupButtonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.LoginContainer}>
        <Text style={styles.LoginText}>Already have an account?</Text>
        <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.LoginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  logoImage: {
    width: 240,
    height: 240,
  },
  title: {
    color: '#3DC2EC',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
  },

  SignupButton: {
    backgroundColor: '#3DC2EC',
    padding: 15,
    borderRadius: 30,
    marginTop: 60,
    width: '100%',
    alignItems: 'center',
  },
  SignupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  LoginContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  LoginText: {
    marginLeft: 10,
  },
  LoginButton: {
  },
  LoginButtonText: {
    color: '#3DC2EC',
    fontWeight: 'bold',
    marginStart: 5,
  },

})