/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import {Card, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import COLORS from "../../../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen = () => {
  const navigation = useNavigation();

  const apps = [
    {
      id: 1,
      name: "Dishwashing",
      logo: require("../../../assets/washing-dishes.png"),
      link: "ServiceDetail",
    },
    {
      id: 2,
      name: "Carwashing",
      logo: require("../../../assets/carwash.png"),
      link: "Carwashing",
    },
    {
      id: 3,
      name: "Caregiving",
      logo: require("../../../assets/care.png"),
      link: "Caregiving",
    },
    {
      id: 4,
      name: "Laundry",
      logo: require("../../../assets/washer.png"),
      link: "Laundry",
    },
    {
      id: 5,
      name: "Babysitting",
      logo: require("../../../assets/babysitting.png"),
      link: "Babysitting",
    },
    {
      id: 6,
      name: "Pet Walking",
      logo: require("../../../assets/petwalking.png"),
      link: "PetWalking",
    },
    {
      id: 7,
      name: "Massaging",
      logo: require("../../../assets/massaging.png"),
      link: "Massaging",
    },
    {
      id: 8,
      name: "Fitness Training",
      logo: require("../../../assets/fitness_training.png"),
      link: "FitnessTraining",
    }
  ];

  return (
    <SafeAreaView>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.welcome}>{"Welcome"}</Text>
              <Text style={styles.user}>{"Blaise"}</Text>
            </View>
            <View style={styles.bell}>
              <AntDesign name='bells' size={24} color='white' />
            </View>
          </View>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label='What do you need?'
            style={styles.searchBar}
            left={<TextInput.Icon icon='account-search' />}
          />
        </View>
      </View>
      <View style={styles.titles}>
        <View>
          <Text variant='titleMedium' style={styles.recommendation}>
            Recommendations
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Services")}>
            <Text variant='titleMedium' style={styles.recommendation}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionCard}>
        <FlatList
          data={apps}
          numColumns={4}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.link)}>
              <View style={styles.itemContainer}>
                <View style={styles.icon1}>
                  <Image source={item.logo} />
                  <Text
                    style={styles.name}
                    numberOfLines={2}
                    ellipsizeMode='tail'>
                    {item.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.titles}>
        <View>
          <Text
            variant='titleMedium'
            style={styles.recommendation}
            onPress={() => navigation.navigate("SplashScreen")}>
            Recent activities
          </Text>
        </View>
      </View>
      <View Style={{ flex: 1}}>
        <FlatList
          data={apps}
          scrollEnabled={true}
          renderItem={({ item }) => (
            <Card type={"elevated"} style={styles.recentCards}>
              <Card.Content>
                <View style={styles.innerCard}>
                  <View style={styles.lastInner}>
                    <View style={styles.icon}>
                      <FontAwesome5 name='history' size={24} color='grey' />
                    </View>
                    <View>
                      <Text variant='titleMedium'>{item.name}</Text>
                      <Text variant='bodyMedium'>3rd Jan, 2023</Text>
                    </View>
                  </View>
                  <View style={styles.amount}>
                    <Text variant='titleMedium'>3,000</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#B0C4DE",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: COLORS.secondary,
    color: "#fff",
  },
  innerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {
    marginTop: 15,
  },
  bell: {
    marginTop: 25,
  },
  lastInner: {
    flexDirection: "row",
  },
  icon: {
    marginTop: 1,
    borderRadius: 30,
    padding: 10,
    marginEnd: 10,
    backgroundColor: "rgb(237, 221, 246)",
  },
  icon1: {
    marginTop: 1,
    borderRadius: 30,
    alignItems: "center",
  },
  titles: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  sectionCard: {
    shadowColor: "#B0C4DE",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    alignItems: "center",
    color: "#fff",
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  sectionCardContent: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  contentContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  welcome: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "300",
  },
  user: {
    color: "#fff",
    fontSize: 30,
  },
  formContainer: {
    padding: 15,
  },
  searchBar: {
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    marginHorizontal: 5,
    marginVertical: 5,
    height: 90,
    width: 90,
    backgroundColor: "rgb(237, 221, 246)",
  },
  logo: {
    borderRadius: 50,
    height: 50,
    width: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  recentLists: {
    padding: 1,
  },
  recentCards: {
    shadowColor: "#B0C4DE",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 5,
    color: "#fff",
  },
  recommendation:{
    marginBottom: 15
  }
});