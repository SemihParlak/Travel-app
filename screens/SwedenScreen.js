import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function SwedenScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.ImagesContainer}>
        <Image source={require('../assets/image/swedenn.jpg')} style={{ width: 400, height: 350, }}></Image>
    </View>
    <View style={styles.subjectContainer}>
        <Text style={styles.SwedenTitleText}>Sweden </Text>
        <Text style={styles.SwedenPriceText}>€ 2450</Text>
        <Text style={styles.SwedenInfoText}>Sweden, officially the Kingdom of Sweden, is a country located on the Scandinavian peninsula in Northern Europe. The country's border neighbors are Norway from the west and north</Text>
        <View style={styles.timeContainer}>
            <Ionicons style={styles.timeIcon} name="time" size={32} color="#00bfff" />
            <Text style={styles.SwedenTimeText}>
                7 Days
            </Text>
            <Text style={styles.SwedenTimeTextInfo}>Duration</Text>
        </View>
        <View style={styles.locationContainer}>
            <Ionicons name="location" size={32} color="#e84242" />
            <Text style={styles.SwedenLocationText}>765 KM</Text>
            <Text style={styles.SwedenLocationTextInfo}>Distanse</Text>
        </View>
        <View style={styles.weatherContainer}>
            <Ionicons name="sunny" size={32} color="gold" />
            <Text style={styles.weatherText}>30°C</Text>
            <Text style={styles.weatherTextInfo}>Sunny</Text>
        </View>
        <TouchableOpacity style={styles.buttonBookNow}>
            <Text style={styles.buttonBookNowText}>
                Book Now
            </Text>
        </TouchableOpacity>
        

    </View>
</View>
)
}

const styles = StyleSheet.create({
container: {},
ImagesContainer: {},
subjectContainer: {
backgroundColor: '#dcdcdc',
width: 400,
height: 450,
bottom: 30,
borderTopRightRadius: 40,
borderTopLeftRadius: 40,
},
SwedenTitleText: {
fontSize: 36,
fontWeight: 'bold',
left: 30,
},
SwedenPriceText: {
textAlign: 'right',
fontSize: 28,
right: 40,
bottom: 40,
color: 'tomato'
},
SwedenInfoText: {
marginHorizontal: 22,
fontSize: 16,
fontStyle: 'italic',
bottom: 12,
},
timeContainer: {
width: 150,
justifyContent: 'flex-start',
top: 40,
},
timeIcon: {
left: 20,
top: 4,
},
SwedenTimeText: {
left: 60,
bottom: 30,
fontSize: 20,
fontWeight: '600',
},
SwedenTimeTextInfo: {
fontSize: 14,
left: 60,
bottom: 30,
},
locationContainer: {
width: 130,
left: 154,
bottom: 38,
},
SwedenLocationText: {
left: 34,
fontSize: 20,
bottom: 32,
fontWeight: '600',
},
SwedenLocationTextInfo: {
left: 41,
bottom: 32,
},
weatherContainer:{
bottom: 118,
width: 120,
left: 280,
},
weatherText:{
left: 42,
bottom: 33,
fontWeight: '600',
fontSize: 22,
},
weatherTextInfo:{
left: 44,
fontSize: 14,
bottom: 33,
},
buttonBookNow:{
backgroundColor:'tomato',
bottom:140,
marginHorizontal: 130,
padding: 10,
borderRadius: 24,
},
buttonBookNowText:{
textAlign: 'center',
fontWeight:'600',
fontSize: 20,
color: 'white',
},
});