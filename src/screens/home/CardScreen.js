/** @format */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import Button from "../../components/Button";
import Loader from "../../components/Loader";

const CardScreen = ({ navigation }) => {
  const [data, setData] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Storage.getData("account")
      .then((data) => data)
      .then((value) => {
        setData(JSON.parse(value));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitPress = () => {
    if (!subject) {
      alert("Please Enter Subject");
      return;
    }
    if (!message) {
      alert("Please Enter Message");
      return;
    }
    setLoading(true);
    let dataToSend = {
      formId: "reportCard",
      subject,
      message,
    };

    Api(dataToSend)
      .then((json) => {
        setLoading(false);
        json = JSON.parse(json);
        // If server response message same as Data Matched
        if (json.output === "success") {
          navigation.replace("Success", {
            message: "Query submitted successfully",
          });
        } else {
          setErrortext(json.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <View style={styles.imageCover}>
            <Image
              style={styles.image}
              source={require("../../../assets/card.jpg")}
            />
            <Text style={styles.cardText}>... ... ... 7485</Text>
          </View>
        </View>
        <View style={styles.actions3}>
          <View style={styles.otherPart}>
            <Text style={styles.thickText}>{data.name}</Text>
            <Text style={styles.lightText}>Primary Cardholder</Text>
          </View>
          <View>
            <Text style={styles.thickText}>${data.card_balance}</Text>
            <Text style={styles.lightText}>Card Balance</Text>
          </View>
        </View>
        <View style={styles.actions4}>
          <View style={styles.otherPart}>
            <Text>ONLINE PAYMENTS & SUBSCRIPTIONS</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Products")}>
          <View style={styles.actions3}>
            <View style={styles.otherPart}>
              <Text style={styles.normalText}>Card on File</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={24}
              color='#1434A4'
            />
          </View>
        </TouchableOpacity>
        <View style={styles.actions4}>
          <View style={styles.otherPart}>
            <Text>SECURITY</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.actions5}>
            <View style={styles.otherPart}>
              <Text style={styles.normalText}>Freeze Card</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={24}
              color='#1434A4'
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.actions5}>
            <View style={styles.otherPart}>
              <Text style={styles.normalText}>Report Fraud</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={24}
              color='#1434A4'
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.actions5}>
            <View style={styles.otherPart}>
              <Text style={styles.normalText}>Report Lost Card</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={24}
              color='#1434A4'
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actions5}>
            <View style={styles.otherPart}>
              <Text style={styles.normalText}>Manage Notifications</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={24}
              color='#1434A4'
            />
          </View>
        </TouchableOpacity>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <View style={styles.textContainer}>
                <TextInput
                  label='Subject'
                  style={styles.input}
                  value={subject}
                  mode={"outlined"}
                  outlineColor={"#00000022"}
                  onChangeText={(text) => setSubject(text)}
                />
              </View>
              <View style={styles.textContainer}>
                <TextInput
                  label='Message'
                  style={styles.input}
                  // value={message}
                  mode={"outlined"}
                  outlineColor={"#00000022"}
                  editable
                  multiline
                  numberOfLines={4}
                  maxLength={40}
                  onChangeText={(text) => setMessage(text)}
                />
              </View>
              <View style={styles.modalFooter}>
                <Pressable
                  style={[styles.button, styles.buttonSubmit]}
                  onPress={handleSubmitPress}>
                  <Text style={styles.textStyle}>submit</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  textContainer: {
    marginBottom: 15,
  },
  input: {
    width: 330,
  },
  imageCover: { width: 300, height: 200 },
  image: {
    flex: 1,
    width: 300,
    height: 200,
    alignItems: "center",
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalFooter: {
    flexDirection: "row",
  },
  faq: {
    fontSize: 16,
    color: "#1434A4",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#1434A4",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    padding: 10,
    marginBottom: 5,
  },
  heading: {
    fontSize: 18,
    color: "#fff",
    width: "70%",
    marginTop: 10,
    textAlign: "center",
  },
  heading1: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "200",
  },
  heading2: {
    fontSize: 14,
    color: "#fff",
    marginTop: 10,
    fontWeight: "200",
  },
  icons: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    marginRight: 20,
  },
  cardInner: {
    width: 185,
    alignItems: "center",
  },
  cards: {
    margin: 10,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  otherPart: {
    marginLeft: 10,
  },
  thickText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  lightText: {
    fontSize: 14,
    color: "#00000077",
  },
  normalText: {
    fontSize: 17,
    fontWeight: "500",
  },
  card: {
    padding: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  actions: {
    marginTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
  },
  actions1: {
    marginTop: 15,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
  },
  actions2: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    borderBottomWidth: 0.5,
    borderBottomColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
  },
  actions3: {
    padding: 10,
    width: 400,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actions4: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    borderBottomWidth: 0.5,
    borderBottomColor: "#b3b3b3",
    padding: 10,
    width: 400,
    backgroundColor: "#00000044",
  },
  actions5: {
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    width: 370,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#CC5500",
    marginLeft: 10,
  },
  buttonSubmit: {
    backgroundColor: "#20B2AA",
    marginRight: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CardScreen;
