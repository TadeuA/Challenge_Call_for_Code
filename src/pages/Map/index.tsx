import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { View, TouchableOpacity, Text, Alert } from "react-native";

import { MaterialIcons as Icon } from "@expo/vector-icons";

import MapView, { Marker, EventUserLocation } from "react-native-maps";

import * as Location from "expo-location";

import styles from "./styles";

interface Point {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  image: string;
  image_url: string;
}

export default function Maps() {
  const navigation = useNavigation();

  function navigateToQrCode() {
    navigation.navigate("QrCode");
  }
  function logOut() {
    navigation.navigate("Open");
  }

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [position, setPosition] = useState(initialPosition);
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Ooooops...",
          "Precisamos de sua permissão para obter a localização"
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    }

    loadPosition();
  });
  async function handleMyPosition() {
    const location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    const { latitude, longitude } = location.coords;
    setPosition([latitude, longitude]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {initialPosition[0] !== 0 && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: initialPosition[0],
              longitude: initialPosition[1],
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            {points.map((point) => (
              <Marker
                key={String(point.id)}
                style={styles.mapMarker}
                onPress={() => {}}
                coordinate={{
                  latitude: point.latitude,
                  longitude: point.longitude,
                }}
              ></Marker>
            ))}
          </MapView>
        )}
        <View style={styles.containerButtonMap}>
          <TouchableOpacity onPress={() => {}} style={styles.buttonMap}>
            <Icon name="autorenew" color="#FFF" size={25} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.buttonMap}>
            <Icon name="my-location" color="#FFF" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.burguerButton}>
        <Icon name="menu" color="#FFF" size={25} />
      </TouchableOpacity>
    </View>
  );
}
