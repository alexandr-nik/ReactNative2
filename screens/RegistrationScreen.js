import React, { useCallback, useState } from "react";
import { Dimensions } from "react-native";
import {
  ImageBackground,
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
  
const letfPositionAvatarImg = Dimensions.get("window").width / 2 - 60;
const initialState = {
  login: "",
  email: "",
  password: "",
};
export const RegistrationScreen = () => {
  const [state, setState] = useState(initialState);

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleSubmit = () => {
    if (
      state.login.trim() === "" ||
      state.password.trim() === "" ||
      state.email.trim() === ""
    ) {
      return;
    }
    console.log(state);
    setState(initialState);
    keyboardHide();
  };
  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}  onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/image/photoBg.jpg")}
        >
          <View style={styles.block}>
            <View style={styles.imgBlock}>
              <Image
                style={styles.img}
                source={require("../assets/image/rectangle.jpg")}
              />
              <Image
                style={styles.imgAdd}
                source={require("../assets/image/add.png")}
              />
            </View>
            <Text style={styles.title}>Регистрация</Text>
            <TextInput
              style={styles.input}
              value={state.login}
              placeholder="Логин"
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, login: value }))
              }
            />
            <TextInput
              style={styles.input}
              value={state.email}
              placeholder="Адрес электронной почты"
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              value={state.password}
              placeholder="Пароль"
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
            />
            <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit} style={styles.btn}>
              <Text style={styles.btnTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Уже есть аккаунт? Войти</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  block: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 90,
  },
  imgBlock: {
    position: "absolute",
    top: -60,
    left: letfPositionAvatarImg,
    width: 120,
    height: 120,
  },
  img: {
    borderRadius: 16,
  },
  imgAdd: {
    position: "absolute",
    width: 25,
    height: 25,
    bottom: 14,
    right: -14,
  },
  title: {
    marginBottom: 32,
    textAlign: "center",
    fontSize: 36,
    fontFamily:'Roboto-Medium',
   
  },
  input: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F6F6F6",
    backgroundColor: "#F6F6F6",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 16,
    color: "#000",
    fontFamily:'Roboto-Regular',
    paddingLeft: 16,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 0,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    elevation: 1,
  },
btn:{
  backgroundColor: "#FF6C00",
  marginTop: 27,
  padding: 16,
  marginBottom: 16,
  borderRadius: 100,
  marginHorizontal: 16,
},
  btnTitle: {
    fontFamily:'Roboto-Regular',
     textAlign: "center",
    color: "#FFFFFF",
    fontSize: 19,
  },
  text: {
    fontFamily:'Roboto-Regular',
     fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
    marginBottom: 43,
  },
});
