import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import ScanScreen from "./Scan";

const insights = [
  { id: "1", title: "Scan new", subtitle: "Scanned 483", icon: "scan-outline", color: "#D6CCFF" },
  { id: "2", title: "Counterfeits", subtitle: "Counterfeited 32", icon: "alert-circle-outline", color: "#FFE3D6" },
  { id: "3", title: "Success", subtitle: "Checkouts 8", icon: "checkmark-circle-outline", color: "#D6F8E3" },
  { id: "4", title: "Directory", subtitle: "History 26", icon: "calendar-outline", color: "#D6EBFF" },
];

const product_images = [
  require("./assets/products_1.png"),
  require("./assets/products_2.png"),
  require("./assets/products_3.png"),
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Phạm Đăng Khuê</Text>
        </View>
        <Image source={require("./assets/PDK.jpg")} style={styles.profile_pic} />
      </View>
      <Text style={styles.section_title}>Your Insights</Text>
      <View style={styles.insights_container}>
        {insights.map((item) => (
          <View key={item.id} style={[styles.insight_card, { backgroundColor: item.color }]}>
            <Icon name={item.icon} size={30} color="#333" />
            <Text style={styles.insight_title}>{item.title}</Text>
            <Text style={styles.insight_subtitle}>{item.subtitle}</Text>
          </View>
        ))}
      </View>
      <View style={styles.explore_container}>
        <Text style={styles.section_title}>Explore More</Text>
        <TouchableOpacity>
          <Icon name="arrow-forward-outline" size={20} color="#333" />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={product_images}
        renderItem={({ item }) => <Image source={item} style={styles.product_image} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  const unread_notifications = 3;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let icon_name;
            if (route.name === "Home") icon_name = "home-outline";
            else if (route.name === "Notification") icon_name = "notifications-outline";
            else if (route.name === "Scan") icon_name = "scan-outline";
            else if (route.name === "History") icon_name = "time-outline";
            else if (route.name === "Cart") icon_name = "cart-outline";
            return (
              <View>
                <Icon name={icon_name} size={size} color={color} />
                {route.name === "Notification" && unread_notifications > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badge_text}>{unread_notifications}</Text>
                  </View>
                )}
              </View>
            );
          },
          tabBarShowLabel: false,
          tabBarStyle: styles.tab_bar,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notification" component={HomeScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="History" component={HomeScreen} />
        <Tab.Screen name="Cart" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  greeting: { fontSize: 18, fontWeight: "bold" },
  username: { fontSize: 16, color: "#555" },
  profile_pic: { width: 40, height: 40, borderRadius: 20 },
  section_title: { fontSize: 18, fontWeight: "bold", marginBottom: 10, marginTop: 20 },
  insights_container: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 20 },
  insight_card: { width: "48%", height: "50%", padding: 15, borderRadius: 10, alignItems: "center", marginBottom: 10 },
  insight_title: { fontSize: 14, fontWeight: "bold", marginTop: 5 },
  insight_subtitle: { fontSize: 12, color: "#666" },
  explore_container: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 },
  tab_bar: { height: 60, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "#fff", elevation: 10 },
  badge: { position: "absolute", right: -6, top: -2, backgroundColor: "red", borderRadius: 10, width: 20, height: 20, justifyContent: "center", alignItems: "center" },
  badge_text: { color: "white", fontSize: 12, fontWeight: "bold" },
  product_image: { width: 150, height: 150, borderRadius: 10, marginRight: 10, resizeMode: "cover" },
});

export default App;