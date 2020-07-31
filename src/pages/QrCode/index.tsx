import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";

import styles from "./styles";
import { MaterialIcons as Icon } from "@expo/vector-icons";

export default function QrCode() {
  const navigation = useNavigation();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    return (
      <Text>
        Para ter acesso acamera, você deve permitir acesso do EcoRodas!
      </Text>
    );
  }
  const handleBarCodeScanned = (type: any, data: any) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  function navigateToRecharge() {
    navigation.navigate("Recharge");
  }
  function logOut() {
    navigation.navigate("Open");
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.camera}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <TouchableOpacity onPress={() => {}} style={styles.burguerButton}>
        <Icon name="menu" color="#FFF" size={25} />
      </TouchableOpacity>
    </View>
  );
}
