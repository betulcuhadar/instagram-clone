import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabsIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/48/FFFFFF/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png",
    inactive: "https://img.icons8.com/ios-glyphs/30/FFFFFF/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/FFFFFF/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/50/FFFFFF/instagram-reel.png",
  },
  {
    name: "Shop",
    active: "https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/shopping-bag-full.png",
  },
  {
    name: "Profile",
    active:
      "https://i.pinimg.com/originals/1f/be/ee/1fbeee054891f121ad73a5727df6bc40.jpg",
    inactive:
      "https://i.pinimg.com/originals/1f/be/ee/1fbeee054891f121ad73a5727df6bc40.jpg",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.constainer}>
        {bottomTabsIcons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "3%",
    zindex: 999,
    backgroundColor: "#000",
  },
  constainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});
export default BottomTabs;
