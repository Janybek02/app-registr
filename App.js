import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Animated
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export default function App() {
  const [array, setArray] = useState([]);
  const [name, setName] = useState("");
  const [color, setColor] = useState({
    em: "#C2C1C9",
    ps: "#C2C1C9",
  });
  const [password, setPassword] = useState("");
  const [pass, setPass] = useState();
  const onChangePassword = (text) => {
    console.log(text.length);
    if (text.length === 0) {
      setPass(
        
          <Animated.View
            style={[
              styles.paasswordPass,
              { width: "0%", backgroundColor: "red" },
            ]}
          ></Animated.View>
        
      );
    } else if (text.length >= 3 && 6 >= text.length) {
      setPass(
       
          <Animated.View
            style={[
              styles.paasswordPass,
              { width: "20%", backgroundColor: "red" },
            ]}
          ></Animated.View>
     
      );
    } else if (text.length >= 6 && 9 >= text.length) {
      setPass(
       
          <Animated.View
            style={[
              styles.paasswordPass,
              { width: "40%", backgroundColor: "red" },
            ]}
          ></Animated.View>
        
      );
    } else if (text.length >= 9 && 12 >= text.length) {
      setPass(
        
          <Animated.View
            style={[
              styles.paasswordPass,
              {
                width: "60%",
                backgroundColor: "rgb(201, 61, 61)",
              },
            ]}
          ></Animated.View>
        
      );
    } else if (text.length >= 12 && 14 >= text.length) {
      setPass(
        <Animated.View
          style={[
            styles.paasswordPass,
            {
              width: "80%",
              backgroundColor: "#45b94c",
            },
          ]}
        ></Animated.View>
      );
    } else {
      <Animated.View
        style={[
          styles.paasswordPass,
          {
            width: "100%",
            backgroundColor: "#00ff0d",
          },
        ]}
      ></Animated.View>;
    }
    setPassword(text);
  };
  const addTodo = () => {
    console.log(array);
    if (password <= 3 && name <= 3) {
      setColor({ ...color, em: "red", ps: "red" });
    } else if (password <= 3) {
      setColor({ ...color, ps: "red", em: "#C2C1C9" });
    } else if (name <= 3) {
      setColor({ ...color, em: "red", ps: "#C2C1C9" });
    } else setColor({ ...color, ps: "#C2C1C9", em: "#C2C1C9" });
    const i = array.length;
    setArray([{ name, password, i }]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.flexContainer}>
          <AntDesign name="close" size={24} color="black" />
          <Text style={styles.textMain}>Sing in to</Text>
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </View>
      </View>
      <View style={styles.ImageBox}>
        <Image style={styles.tinyLogo} source={require("./image/second.png")} />
      </View>
      <View style={styles.mainFlexBox}>
        <Text style={styles.textEmial}>E mail</Text>
        <View style={[styles.textInputBlock, { borderColor: color.em }]}>
          <MaterialIcons
            style={styles.textInputIcon}
            name="alternate-email"
            size={17}
            color="black"
          />
          <TextInput
            onChangeText={setName}
            value={name}
            style={styles.textInput}
            placeholder="example.@gmail.com"
          />
        </View>
        <Text style={styles.textEmial}>Password</Text>
        <View style={[styles.passwordInputBlock, { borderColor: color.ps }]}>
          <FontAwesome5
            style={styles.textInputIcon}
            name="lock"
            size={17}
            color="black"
          />
          <TextInput
            onChangeText={(password) => onChangePassword(password)}
            value={password}
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
        <View style={{ backgroundColor: "white", width: "100%", height: 2 }}>
          {pass}
        </View>
        <Pressable onPress={addTodo} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
        <View>
          <View style={styles.forgetBlock}>
            <Text style={styles.textForget}>Forget your password? </Text>
          </View>
          <View style={styles.lineBlock}>
            <View style={styles.firstLine}></View>
            <Text style={styles.lineText}>or</Text>
            <View style={styles.secondLine}></View>
          </View>
          <View>
            <View style={styles.accountBlock}>
              <View style={styles.appleBlock}>
                <View style={styles.flexBox}>
                  <FontAwesome name="apple" size={24} color="black" />
                  <Text style={styles.appleText}>Sing in with apple</Text>
                </View>
              </View>
            </View>
            <View style={styles.accountBlock}>
              <View style={styles.appleBlock}>
                <View style={styles.flexBoxGoogle}>
                  <AntDesign name="google" size={24} color="black" />
                  <Text style={styles.appleText}>Sing in with google</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.lastBlock}>
            <Text style={styles.lastText}>Sing up</Text>
          </View>
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
  mainFlexBox: {
    width: "100%",
    justifyContent: "center",
  },
  ImageBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: "80%",
    height: 250,
  },
  main: {
    width: "100%",
    height: 50,
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
    marginBottom: 0,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 38,
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
  paasswordPass: {
    transition: "1s",
    height: "100%",
    duration:100,
    useNativeDrive:false, 
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#150425",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
  },
  secondFlexBox: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forgetBlock: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  textForget: {
    color: "black",
  },
  lineBlock: {
    marginBottom: 20,
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  firstLine: {
    marginTop: 5,
    width: "45%",
    height: 2,
    backgroundColor: "#C2C1C9",
  },
  secondLine: {
    marginTop: 5,
    width: "45%",
    height: 2,
    backgroundColor: "#C2C1C9",
  },
  appleBlock: {
    marginBottom: 20,
    width: "100%",
    height: 60,
    backgroundColor: "#E7E7E7",
    borderRadius: 12,
    borderColor: "#C2C1C9",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flexBox: {
    width: 145,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appleText: {
    fontSize: 15,
  },
  flexBoxGoogle: {
    width: 155,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lastBlock: {
    width: "100%",
    marginTop: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  lastText: {
    fontSize: 15,
  },
});
