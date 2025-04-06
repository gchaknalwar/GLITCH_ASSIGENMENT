import { Link } from 'expo-router';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export default function HomeScreen() {
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
        <TouchableOpacity style={[styles.tab, styles.inactiveTab]}>
          <Text style={styles.tabText}><Link href="/details">COLLECTIONS</Link></Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}><Link href="/">MANAGE TAGS</Link></Text>
        </TouchableOpacity>
      </View>

      {/* Recommendation Cards */}
      <View style={styles.recommendations}>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.recommendationText}>
            Our recommendations work best when you let us know these things:</Text>
          <Text style={styles.cardTitle}>YOUR DIFFICULTY ✨</Text>
          <Text style={styles.cardDesc}>You decide the level of challenge you want!</Text>
          <Ionicons name="chevron-forward" size={18} color="gray" style={styles.arrow} marginTop="26%" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>INTERESTS YOU LIKE ✨</Text>
          <Text style={styles.cardDesc}>We'll use these to show you cool builds</Text>
          <Ionicons name="chevron-forward" size={18} color="gray" style={styles.arrow} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>TOOLS USED 🛠️</Text>
          <Text style={styles.cardDesc}>We'll suggest better using these picks.</Text>
          <Ionicons name="chevron-forward" size={18} color="gray" style={styles.arrow} />
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
}
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
  tabs: { flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: 'gray', marginTop: 20 },
  tab: { paddingVertical: 10, paddingHorizontal: 60 },
  inactiveTab: { borderBottomWidth: 2, borderBottomColor: 'transparent' },
  activeTab: { borderBottomWidth: 2, borderBottomColor: 'green' },
  tabText: { color: 'gray', fontSize: 14 },
  activeTabText: { color: 'green', fontSize: 14, fontWeight: 'bold' },
  recommendations: { padding: 5 },
  recommendationText: { color: 'gray', fontSize: 14, marginBottom: 50, margin: 1, padding: 1 },
  card: { backgroundColor: '#1a1a1a', padding: 25, borderRadius: 10, marginBottom: 5, position: 'relative', borderBottomWidth: 1, borderBottomColor: 'grey' },
  cardTitle: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  cardDesc: { color: 'gray', fontSize: 14, marginTop: 5 },
  arrow: { position: 'absolute', right: 10, top: 25 },
});
