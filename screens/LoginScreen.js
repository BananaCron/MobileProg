import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require("../assets/Logo.png")} />
      </View>
    
      <Text style={styles.title}>Log In</Text>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="user" size={20} color="#294380" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email or User Name"
          placeholderTextColor="#707070"
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock" size={20} color="#294380" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#707070"
          secureTextEntry={true}
        />
        <Entypo name="eye-with-line" size={20} color="#294380" style={styles.eyeIcon} />
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or Log In With</Text>

      <View style={styles.socialButtons}>
        {/* Replace with your actual social media icons */}
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="google" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Entypo name="facebook" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialCommunityIcons name="microsoft" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="linkedin" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have account?</Text>
        <TouchableOpacity style={styles.signupButton}>
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
    width: 250,
    height: 250,
  },
  title: {
    color: '#294380',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
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
  },
  forgotPasswordText: {
    color: '#294380',
  },
  loginButton: {
    backgroundColor: '#294380',
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
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  socialButton: {
    backgroundColor: '#294380',
    padding: 12,
    borderRadius: 30,
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signupText: {
    marginRight: 10,
  },
  signupButton: {
    backgroundColor: '#294380',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})