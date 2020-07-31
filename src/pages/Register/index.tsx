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
import DatePicker from "react-native-datepicker";
import styles from "./styles";

export default function Register() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [userWeight, setUserWeight] = useState(0);
  const [userHeight, setUserHeight] = useState(0);
  const [userWidth, setUserWidth] = useState(0);
  const [phone, setPhone] = useState(0);
  const [credentials, setCredentials] = useState(false);
  const [birthdate, setBirthdate] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [showPass, setShowPass] = useState(false);

  function navigateToInit() {
    navigation.navigate("Init");
  }

  async function handleRegister() {
    {
      /*  if(name != '' && companies != '' && email != '' && password != '') {
      if(password != otherPassword) {
        return
      }

      const response = await api.post('/register', {
        name,
        companies,
        email,
        password
      });
  
      const { _id } = response.data;

      if(_id) {
        navigation.navigate('Home');
      }
    }*/
    }
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigation.navigate("Login");
    }, 5000);
  }
  async function handleCredentials() {
    setCredentials(true);
  }

  return (
    <>
      <KeyboardAvoidingView
        enabled={Platform.OS === "ios"}
        behavior="padding"
        style={styles.container}
      >
        {credentials && showModal ? (
          <Text>Cadastro realizado com sucesso</Text>
        ) : (
          <>
            <View style={styles.header}>
              <TouchableOpacity onPress={navigateToInit}>
                <Icon name="arrow-left" color="#000000" size={30} />
              </TouchableOpacity>

              <Text style={styles.title}>Crie sua conta </Text>
              <View />
            </View>
            <ScrollView
              style={styles.scroll}
              contentContainerStyle={styles.contentContainer}
            >
              {!credentials ? (
                <>
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
                        onPress={() =>
                          showPass ? setShowPass(false) : setShowPass(true)
                        }
                      >
                        <Icon
                          name={showPass ? "eye" : "eye-off"}
                          size={24}
                          color="black"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={handleCredentials}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Próximo</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <View>
                    <Text style={styles.label}>Nome completo</Text>
                    <View style={styles.input}>
                      <TextInput
                        placeholder="Favor inserir seu nome completo"
                        placeholderTextColor="#999"
                        autoCapitalize="words"
                        autoCorrect={false}
                        value={name}
                        onChangeText={setName}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.label}>Sexo</Text>
                    <View style={styles.input}>
                      <TextInput
                        placeholder="Como você se auto define?"
                        placeholderTextColor="#999"
                        autoCapitalize="words"
                        autoCorrect={false}
                        value={gender}
                        onChangeText={setGender}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.label}>Data de nascimento</Text>
                    <View style={styles.input}>
                      <DatePicker
                        style={{ width: "100%" }}
                        date={birthdate}
                        format="DD-MM-YYYY"
                        minDate="01-07-1900"
                        maxDate=""
                        onDateChange={setBirthdate}
                        customStyles={{
                          dateInput: {
                            borderColor: "transparent",
                          },
                          dateText: {
                            fontSize: 18,
                          },
                        }}
                      />
                    </View>
                  </View>

                  <View>
                    <Text style={styles.label}>Peso</Text>
                    <View style={styles.input}>
                      <TextInput
                        placeholder="Favor inserir peso em KG"
                        placeholderTextColor="#999"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        value={userWeight === 0 ? "" : String(userWeight)}
                        onChangeText={(value) => setUserWeight(Number(value))}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.label}>Altura</Text>
                    <View style={styles.input}>
                      <TextInput
                        placeholder="Favor inserir peso em KG"
                        placeholderTextColor="#999"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        value={userHeight === 0 ? "" : String(userHeight)}
                        onChangeText={(value) => setUserHeight(Number(value))}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.label}>Telefone</Text>
                    <View style={styles.input}>
                      <TextInput
                        placeholder="Ex.: (00) 00000-0000"
                        placeholderTextColor="#999"
                        keyboardType="number-pad"
                        autoCompleteType="tel"
                        autoCorrect={false}
                        value={phone === 0 ? "" : String(phone)}
                        onChangeText={(value) => setPhone(Number(value))}
                      />
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={handleRegister}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                  </TouchableOpacity>
                </>
              )}
            </ScrollView>
          </>
        )}
      </KeyboardAvoidingView>
    </>
  );
}
