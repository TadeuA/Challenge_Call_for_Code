import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  ScrollView,
  Modal,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Register() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPass, setShowPass] = useState(false);

  function navigateToInit() {
    navigation.navigate("Init");
  }

  async function handleLogin() {
    /*if (email != "" && password != "") {
      const response = await api.post("/login", {
        email,
        password,
      });

      const { _id } = response.data;

      if (_id) {
        navigation.navigate("Home");
      }
    }*/
    navigation.navigate("Auth");
  }

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === "ios"}
      behavior="padding"
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToInit}>
          <Icon name="arrow-left" color="#000000" size={30} />
        </TouchableOpacity>

        <Text style={styles.title}>Crie sua conta </Text>
        <View />
      </View>

      <View>
        <Text style={styles.label}>Email</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <View>
        <Text style={styles.label}>Senha</Text>

        <View style={styles.input}>
          <TextInput
            placeholder="Insira no mínimo 8 caracte"
            placeholderTextColor="#999"
            secureTextEntry={!showPass ? true : false}
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => (showPass ? setShowPass(false) : setShowPass(true))}
          >
            <Icon name={showPass ? "eye" : "eye-off"} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
