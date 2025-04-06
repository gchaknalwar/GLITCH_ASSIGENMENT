<<<<<<< HEAD
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function DetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Cover Image */}
      <View style={styles.header}>
        <Image source={require('../assets/images/background.png')} style={styles.coverImage} />


        {/* Top Icons */}
        <View style={styles.topIcons}>
          <Ionicons name="share-outline" size={25} color="white" style={{ marginRight: 15, top: 25, transform: [{ rotate: '-90deg' }] }} />
          <MaterialIcons name="settings" size={25} color="white" style={{ top: 25, }} />
        </View>

        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
          <View style={styles.userInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.username}>@theo_from_hsr</Text>
              <Ionicons name="checkmark-circle" style={{ fontSize: 18, color: "cyan", marginLeft: 1 }} />
            </View>
            <Text style={styles.country}>🇮🇳 INDIA</Text>
            <Text style={styles.bio}>18 y/o with high ambitions. want to build cool stuff!</Text>
          </View>
          <TouchableOpacity style={styles.editProfileBtn}>
            <Text style={styles.editText}>EDIT PROFILE</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Following Count */}
      <View style={styles.stats}>
        {/* <Ionicons name="people-outline" size={16} color="white" /> */}
        <Image source={require('../assets/images/User.png')} style={{ width: 15, height: 15 }} />
        <Text style={styles.statsText}>2 </Text>
      </View>
      <Text style={{
        marginLeft: 100, color: 'white', right: 65
      }}>FOLLOWING</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}><Link href="/details">COLLECTIONS</Link></Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.inactiveTab]}>
          <Text style={styles.tabText}><Link href="/">MANAGE TAGS</Link></Text>
        </TouchableOpacity>
      </View>

      {/* Collections */}
      <View style={styles.collectionContainer}>
        {collections.map((collection, index) => (
          <TouchableOpacity key={index} style={styles.collectionItem}>
            <View style={styles.imageRow}>
              {collection.images.map((img, i) => (
                <Image
                  key={i}
                  source={typeof img === 'string' ? { uri: img } : img}
                  style={styles.collectionImage}
                />
              ))}
            </View>
            {/* <Text style={styles.collectionTitle}>
              {collection.title} ({collection.count})
            </Text> */}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const collections = [
  {
    images: [require('../assets/images/Frame1.png')],
  },
  {
    images: [require('../assets/images/Frame2.png')],
  },
  {
    images: [require('../assets/images/Frame3.png')],
  },
];
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { height: 200, position: 'relative' },
  coverImage: { width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.8 },
  topIcons: { flexDirection: 'row', justifyContent: 'flex-end', padding: 10, position: 'absolute', right: 10, top: 10 },
  profileContainer: { alignItems: 'center', marginTop: -140, marginRight: 100 },
  profileImage: { width: 100, height: 100, borderRadius: 1, borderWidth: 2, borderColor: '#fff', marginRight: 160 },
  userInfo: { alignItems: 'center', marginTop: 10 },
  nameRow: { flexDirection: 'row', alignItems: 'center', marginRight: 100 },
  username: { fontSize: 18, color: '#fff', fontWeight: 'bold', marginRight: 5, marginLeft: 3, padding: 3 },
  country: { fontSize: 14, color: 'gray', marginRight: 210 },
  bio: { fontSize: 13, color: '#ccc', marginTop: 10, paddingHorizontal: 20, marginLeft: 10 },
  editProfileBtn: { marginTop: -100, borderWidth: 1, borderColor: 'white', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 5, marginLeft: "120%", width: 100 },
  editText: { fontSize: 12, color: 'white' },
  stats: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 1, marginRight: 330, marginTop: 80 },
  statsText: { color: 'white', fontSize: 14, marginLeft: 5 },

  // Tabs
  tabs: { flexDirection: "row", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: "gray", marginTop: 20 },
  tab: { paddingVertical: 10, paddingHorizontal: 60 },
  inactiveTab: { borderBottomWidth: 2, borderBottomColor: "transparent" },
  activeTab: { borderBottomWidth: 2, borderBottomColor: "green" },
  tabText: { color: "gray", fontSize: 14 },
  activeTabText: { color: "green", fontSize: 14, fontWeight: "bold" },
  // Collections
  collectionContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 15 },
  collectionItem: { backgroundColor: "#222", padding: 5, borderRadius: 10, margin: 5, width: 200 },
  // collectionTitle: { color: "white", fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  imageRow: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  collectionImage: { width: 200, height: 200, borderRadius: 10 },
});

=======
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function DetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Cover Image */}
      <View style={styles.header}>
        <Image source={require('../assets/images/background.png')} style={styles.coverImage} />


        {/* Top Icons */}
        <View style={styles.topIcons}>
          <Ionicons name="share-outline" size={25} color="white" style={{ marginRight: 15, top: 25, transform: [{ rotate: '-90deg' }] }} />
          <MaterialIcons name="settings" size={25} color="white" style={{ top: 25, }} />
        </View>

        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
          <View style={styles.userInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.username}>@theo_from_hsr</Text>
              <Ionicons name="checkmark-circle" style={{ fontSize: 18, color: "cyan", marginLeft: 1 }} />
            </View>
            <Text style={styles.country}>🇮🇳 INDIA</Text>
            <Text style={styles.bio}>18 y/o with high ambitions. want to build cool stuff!</Text>
          </View>
          <TouchableOpacity style={styles.editProfileBtn}>
            <Text style={styles.editText}>EDIT PROFILE</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Following Count */}
      <View style={styles.stats}>
        {/* <Ionicons name="people-outline" size={16} color="white" /> */}
        <Image source={require('../assets/images/User.png')} style={{ width: 15, height: 15 }} />
        <Text style={styles.statsText}>2 </Text>
      </View>
      <Text style={{
        marginLeft: 100, color: 'white', right: 65
      }}>FOLLOWING</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}><Link href="/details">COLLECTIONS</Link></Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.inactiveTab]}>
          <Text style={styles.tabText}><Link href="/">MANAGE TAGS</Link></Text>
        </TouchableOpacity>
      </View>

      {/* Collections */}
      <View style={styles.collectionContainer}>
        {collections.map((collection, index) => (
          <TouchableOpacity key={index} style={styles.collectionItem}>
            <View style={styles.imageRow}>
              {collection.images.map((img, i) => (
                <Image
                  key={i}
                  source={typeof img === 'string' ? { uri: img } : img}
                  style={styles.collectionImage}
                />
              ))}
            </View>
            {/* <Text style={styles.collectionTitle}>
              {collection.title} ({collection.count})
            </Text> */}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const collections = [
  {
    images: [require('../assets/images/Frame1.png')],
  },
  {
    images: [require('../assets/images/Frame2.png')],
  },
  {
    images: [require('../assets/images/Frame3.png')],
  },
];
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { height: 200, position: 'relative' },
  coverImage: { width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.8 },
  topIcons: { flexDirection: 'row', justifyContent: 'flex-end', padding: 10, position: 'absolute', right: 10, top: 10 },
  profileContainer: { alignItems: 'center', marginTop: -140, marginRight: 100 },
  profileImage: { width: 100, height: 100, borderRadius: 1, borderWidth: 2, borderColor: '#fff', marginRight: 160 },
  userInfo: { alignItems: 'center', marginTop: 10 },
  nameRow: { flexDirection: 'row', alignItems: 'center', marginRight: 100 },
  username: { fontSize: 18, color: '#fff', fontWeight: 'bold', marginRight: 5, marginLeft: 3, padding: 3 },
  country: { fontSize: 14, color: 'gray', marginRight: 210 },
  bio: { fontSize: 13, color: '#ccc', marginTop: 10, paddingHorizontal: 20, marginLeft: 10 },
  editProfileBtn: { marginTop: -100, borderWidth: 1, borderColor: 'white', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 5, marginLeft: "120%", width: 100 },
  editText: { fontSize: 12, color: 'white' },
  stats: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 1, marginRight: 330, marginTop: 80 },
  statsText: { color: 'white', fontSize: 14, marginLeft: 5 },

  // Tabs
  tabs: { flexDirection: "row", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: "gray", marginTop: 20 },
  tab: { paddingVertical: 10, paddingHorizontal: 60 },
  inactiveTab: { borderBottomWidth: 2, borderBottomColor: "transparent" },
  activeTab: { borderBottomWidth: 2, borderBottomColor: "green" },
  tabText: { color: "gray", fontSize: 14 },
  activeTabText: { color: "green", fontSize: 14, fontWeight: "bold" },
  // Collections
  collectionContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 15 },
  collectionItem: { backgroundColor: "#222", padding: 5, borderRadius: 10, margin: 5, width: 200 },
  // collectionTitle: { color: "white", fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  imageRow: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  collectionImage: { width: 200, height: 200, borderRadius: 10 },
});

>>>>>>> f6de3b3af1738f83cd2ac15693880f7ac19bf642
// justifyContent: "center",