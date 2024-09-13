import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 


const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require("../assets/Logo.png")} />
      </View>
    
      <Text style={styles.title}>Log In</Text>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="user" size={20} color="#3DC2EC" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email or User Name"
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

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or Log In With</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="google" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Entypo name="facebook" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome6 name="x-twitter" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="linkedin" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have account?</Text>
        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

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
  forgotPassword: {
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#3DC2EC',
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: '#3DC2EC',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    marginTop: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  socialButton: {
    backgroundColor: '#3DC2EC',
    padding: 12,
    borderRadius: 19,
    width: '15%',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 200,
    shadowRadius: 100,
    elevation: 5,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    marginRight: 10,
  },
  signupButton: {
  },
  signupButtonText: {
    color: '#3DC2EC',
    fontWeight: 'bold',
  },
})