/** @format */

import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Input, Button } from "react-native-elements";
import Gif from "react-native-gif";
import ShadowBox from "../../components/ShadowBox";
import { useRoute } from "@react-navigation/native";

const Location = () => {
  const route = useRoute(); 
  console.log(route.params);
  const service = route.params.service;
  const [markerCoordinates, setMarkerCoordinates] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [title, setTitle] = useState("");
  const [doorNo, setDoorNo] = useState("");
  const [landmark, setLandMark] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMarkerPress = (e) => {
    // Get the coordinates when the map is pressed
    const { coordinate } = e.nativeEvent;
    setMarkerCoordinates(coordinate);
  };

  const handleSetLocation = () => {
    // Handle saving the location data or perform other actions here
    console.log("Location Name:", locationName);
    console.log("Coordinates:", markerCoordinates);
    // You can save this data to your state or send it to an API.
  };

  return (
    <View style={styles.container}>
      {!loading ? (
        <>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 0,
              longitude: 0,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421, // Zoom level (you can adjust this)
            }}
            onPress={handleMarkerPress}>
            {markerCoordinates && (
              <Marker coordinate={markerCoordinates} title={locationName} />
            )}
          </MapView>
          <Input
            placeholder='Enter location name'
            onChangeText={(text) => setLocationName(text)}
            value={locationName}
            style={styles.form}
          />
          <View style={styles.content}>
            <View style={styles.addressHeader}>
              <Text style={styles.text}>ADD ADDRESS</Text>
            </View>
            <Input
              placeholder='*Title'
              onChangeText={(text) => setTitle(text)}
              value={title}
            />
            <Input
              placeholder='*Door no.'
              onChangeText={(text) => setDoorNo(text)}
              value={doorNo}
            />
            <Input
              placeholder='*Landmark'
              onChangeText={(text) => setLandMark(text)}
              value={landmark}
            />
            <View style={styles.btnContainer}>
              <Button
                title='Confirm'
                onPress={() => setLoading(!loading)}
                buttonStyle={styles.btn}
              />
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={styles.label}>
            <Text style={styles.labelText}>Searching Providers</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Gif
              source={require("../../../assets/loading.gif")} // Replace with the path to your GIF image
              style={{ width: 300, height: 300 }}
            />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.content1}>
              <ShadowBox style={styles.box}>
                <View style={styles.detailsContainer}>
                  <View>
                    <Text style={styles.title}>SERVICE</Text>
                    <Text style={styles.subtitle}>{service.service || "Dishwashing"}</Text>
                  </View>
                  <View>
                    <Text style={styles.title}>DATE</Text>
                    <Text style={styles.subtitle}>2023-08-14</Text>
                  </View>
                  <View>
                    <Text style={styles.title}>TIME</Text>
                    <Text style={styles.subtitle}>24hrs</Text>
                  </View>
                </View>
                <View style={styles.detailsContainer}>
                  <View>
                    <Text style={styles.title}>ADDRESS</Text>
                    <Text style={styles.subtitle}>
                      {locationName || "No 7, 19a Festac Access Rd, Amuwo Odofin Estate 102102, Lagos, Nigeria"}
                    </Text>
                  </View>
                </View>
                <View style={styles.btnContainer}>
                  <Button
                    title='CANCEL SEARCHING'
                    onPress={() => setLoading(!loading)}
                    buttonStyle={styles.btn1}
                  />
                </View>
              </ShadowBox>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "#fff",
  },
  map: {
    flex: 1,
  },
  addressHeader: {
    alignItems: "center",
    padding: 12,
    backgroundColor: "navy",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 10,
  },
  form: {
    position: "absolute",
    bottom: 370,
    left: 20,
    backgroundColor: "#fff",
    width: 350,
    padding: 10,
  },
  content: {
    position: "relative",
    bottom: 40,
  },
  text: {
    color: "#fff",
  },
  btn: {
    width: 150,
    backgroundColor: "navy",
  },
  btn1: {
    width: 250,
    backgroundColor: "navy",
  },
  btnContainer: {
    alignItems: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  content1: {
    position: "relative",
    bottom: 40,
    width: 350,
  },
  contentContainer: {
    alignItems: "center",
  },
  box: {
    padding: 10,
  },
  label: {
    color: "#8f9bb3",
    alignItems: "center",
  },
  labelText: {
    fontSize: 22,
    marginTop: 10,
  },
});

export default Location;
