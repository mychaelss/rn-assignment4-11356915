import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const UserPage = () => {
  const featuredJobs = [
    {
      id: "1",
      company: "Facebook",
      title: "Software Engineer",
      location: "Accra, Ghana",
      salary: "$180,000",
      logo: require("../assets/facebook.png"),
    },
    {
      id: "2",
      company: "Google",
      title: "Product Manager",
      location: "California, US",
      salary: "$160,000",
      logo: require("../assets/google.png"),
    },
  ];

  const popularJobs = [
    {
      id: "1",
      company: "Burger King",
      title: "Jr Executive",
      location: "Los Angeles, US",
      salary: "$96,000/y",
      logo: require("../assets/burgerking.png"),
    },
    {
      id: "2",
      company: "Beats",
      title: "Product Manager",
      location: "Florida, US",
      salary: "$84,000/y",
      logo: require("../assets/beats.png"),
    },
    {
      id: "3",
      company: "Facebook",
      title: "Product Manager",
      location: "Florida, US",
      salary: "$86,000/y",
      logo: require("../assets/facebook.png"),
    },
    
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>Ocansey Michael</Text>
          <Text style={styles.email}>moakapo@st.ug.edu.gh</Text>
        </View>
        <Image
          source={require("../assets/profilepic.png")}
          style={styles.profilePic}
        />
      </View>
      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/searchicon.jpg")}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search a job or position"
        />
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={featuredJobs}
        renderItem={({ item }) => (
          <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.featuredJobCard}
          >
            <Image source={item.logo} style={styles.featuredJobLogo} />
            <Text style={styles.featuredJobTitle}>{item.title}</Text>
            <Text style={styles.featuredJobCompany}>{item.company}</Text>
            <Text style={styles.featuredJobSalary}>{item.salary}</Text>
            <Text style={styles.featuredJobLocation}>{item.location}</Text>
          </ImageBackground>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={popularJobs}
        renderItem={({ item }) => (
          <View style={styles.popularJobCard}>
            <Image source={item.logo} style={styles.popularJobLogo} />
            <View style={styles.popularJobTextContainer}>
              <Text style={styles.popularJobTitle}>{item.title}</Text>
              <Text style={styles.popularJobCompany}>{item.company}</Text>
              <Text style={styles.popularJobLocation}>{item.location}</Text>
            </View>
            <Text style={styles.popularJobSalary}>{item.salary}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 32,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  headerTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    color: "#666",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    marginBottom: 20,
    height: 60,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: "#95969D",
  },
  featuredJobCard: {
    backgroundColor: "#4f6d7a",
    borderRadius: 10,
    padding: 20,
    marginRight: 10,
    width: 270,
    height: 210,
    justifyContent: "center",
  },
  featuredJobLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginBottom: 10,
  },
  featuredJobTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  featuredJobCompany: {
    color: "#fff",
  },
  featuredJobSalary: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
  },
  featuredJobLocation: {
    color: "#fff",
  },
  popularJobCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  popularJobLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  popularJobTextContainer: {
    flex: 1,
  },
  popularJobTitle: {
    fontWeight: "bold",
  },
  popularJobCompany: {
    color: "#666",
  },
  popularJobLocation: {
    color: "#666",
  },
  popularJobSalary: {
    fontWeight: "bold",
  },
});

export default UserPage;