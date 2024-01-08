import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.flexContainer}>
          <AntDesign name="close" size={24} color="black" />
          <Text style={styles.textMain}>Sing in to</Text>
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </View>
      </View>
      <View>
        <Text style={styles.textEmial}>E mail</Text>
        <View style={styles.textInputBlock}>
          <MaterialIcons
            style={styles.textInputIcon}
            name="alternate-email"
            size={17}
            color="black"
          />
          <TextInput
            style={styles.textInput}
            placeholder="example.@gmail.com"
          />
        </View>
        <Text style={styles.textEmial}>Password</Text>
        <View style={styles.passwordInputBlock}>
          <FontAwesome5
            style={styles.textInputIcon}
            name="lock"
            size={17}
            color="black"
          />
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={true}
            placeholder="Password..."
          />
          <Ionicons
            style={styles.passwordInputIcon}
            name="eye-outline"
            size={17}
            color="black"
          />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
        
      </View>
      <View style={styles.forgetBlock}>
        <Text style={styles.textForget}>Forget your password? </Text>
      </View>
      <View style={styles.lineBlock}>
        <View style={styles.firstLine}></View>
        <Text style={styles.lineText}>or</Text>
        <View style={styles.secondLine}></View>
      </View>
      <View style={styles.accountBlock}>
        <View>
          
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: (40, 18),
    backgroundColor: "white",
  },

  main: {
    width: "100%",
    height: 104,
    backgroundColor: "white",
    paddingTop: 20,
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textMain: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  textEmial: {
    marginBottom: 4,
  },
  textInputBlock: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 38,
    borderColor: "#C2C1C9",
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 15,
  },
  textInputIcon: {
    margin: (0, 8),
  },
  textInput: {
    width: "90%",
    height: "100%",
    height: 38,
  },
  passwordInputBlock: {
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 38,
    borderColor: "#C2C1C9",
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 15,
  },
  passwordInput: {
    width: "80%",
    height: "100%",
    height: 38,
  },
  passwordInputIcon: {
    margin: (0, 8),
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#150425",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  buttonText:{
    color:"white",
  },
  forgetBlock: {
    width: '100%',
    alignItems: "center",
    marginTop:20,
    
  },
  textForget:{
    color: "black",
  },
  lineBlock:{
     marginBottom: 20,
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  firstLine:{
    marginTop:5, 
    width: "45%",
    height: 2,
    backgroundColor: "#C2C1C9"
  },
  secondLine:{
    marginTop:5, 
    width: "45%",
    height: 2,
    backgroundColor: "#C2C1C9"
  }
});
