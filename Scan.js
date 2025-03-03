import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const ScanScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <Image source={require("./assets/juice.png")} style={styles.backgroundImage} />
            </View>

            <View style={styles.overlay}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>

                <View style={styles.scanFrame}>
                    <View style={[styles.corner, styles.topLeft]} />
                    <View style={[styles.corner, styles.topRight]} />
                    <View style={[styles.corner, styles.bottomLeft]} />
                    <View style={[styles.corner, styles.bottomRight]} />
                </View>

                <View style={styles.productInfo}>
                    <Image source={require("./assets/juice.png")} style={styles.productThumb} />
                    <View style={styles.productText}>
                        <Text style={styles.productName}>Lauren’s</Text>
                        <Text style={styles.productTitle}>Orange Juice</Text>
                    </View>
                    <TouchableOpacity style={styles.addButton}>
                        <Icon name="add" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundContainer: {
        width: width * 1,
        height: height * 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10,
        elevation: 3,
    },
    scanFrame: {
        position: "absolute",
        width: width * 0.7,
        height: height * 0.6,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
    corner: {
        position: "absolute",
        width: 50,
        height: 50,
        borderColor: "rgba(255, 255, 255, 1)",
        borderRadius: 5,
    },
    topLeft: { top: 0, left: 0, borderLeftWidth: 4, borderTopWidth: 4 },
    topRight: { top: 0, right: 0, borderRightWidth: 4, borderTopWidth: 4 },
    bottomLeft: { bottom: 0, left: 0, borderLeftWidth: 4, borderBottomWidth: 4 },
    bottomRight: { bottom: 0, right: 0, borderRightWidth: 4, borderBottomWidth: 4 },
    productInfo: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: 10,
        borderRadius: 10,
        position: "absolute",
        bottom: 50,
        width: "90%",
        elevation: 5,
    },
    productThumb: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10,
    },
    productText: {
        flex: 1,
    },
    productName: {
        fontSize: 12,
        color: "#888",
    },
    productTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    addButton: {
        width: 40,
        height: 40,
        backgroundColor: "#567DF4",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ScanScreen;