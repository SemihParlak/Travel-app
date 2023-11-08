import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function EverestScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.ImagesContainer}>
        <Image source={require('../assets/image/Everest.jpg')} style={{ width: 400, height: 350, }}></Image>
    </View>
    <View style={styles.subjectContainer}>
        <Text style={styles.EverestTitleText}>Everest</Text>
        <Text style={styles.EverestPriceText}>€ 3210</Text>
        <Text style={styles.EverestInfoText}>Mount Everest is the world's highest mountain above sea level. It is located in the Himalayas.China and Nepal in 2020, the current clearance of the mountain is 8,848 meters.</Text>
        <View style={styles.timeContainer}>
            <Ionicons style={styles.timeIcon} name="time" size={32} color="#00bfff" />
            <Text style={styles.EverestTimeText}>
                9 Days
            </Text>
            <Text style={styles.EverestTimeTextInfo}>Duration</Text>
        </View>
        <View style={styles.locationContainer}>
            <Ionicons name="location" size={32} color="#e84242" />
            <Text style={styles.EverestLocationText}>2158 KM</Text>
            <Text style={styles.EverestLocationTextInfo}>Distanse</Text>
        </View>
        <View style={styles.weatherContainer}>
        <Ionicons name="partly-sunny" size={24} color="gray" />
            <Text style={styles.weatherText}>8°C</Text>
            <Text style={styles.weatherTextInfo}>Cloudy</Text>
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
EverestTitleText: {
fontSize: 36,
fontWeight: 'bold',
left: 30,
},
EverestPriceText: {
textAlign: 'right',
fontSize: 28,
right: 40,
bottom: 40,
color: 'tomato'
},
EverestInfoText: {
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
EverestTimeText: {
left: 60,
bottom: 30,
fontSize: 20,
fontWeight: '600',
},
EverestTimeTextInfo: {
fontSize: 14,
left: 60,
bottom: 30,
},
locationContainer: {
width: 130,
left: 154,
bottom: 38,
},
EverestLocationText: {
left: 34,
fontSize: 20,
bottom: 32,
fontWeight: '600',
},
EverestLocationTextInfo: {
left: 41,
bottom: 32,
},
weatherContainer: {
bottom: 118,
width: 120,
left: 290,
},
weatherText: {
left: 40,
bottom: 26,
fontWeight: '600',
fontSize: 22,
},
weatherTextInfo: {
left: 38,
fontSize: 14,
bottom: 26,
},
buttonBookNow: {
backgroundColor: 'tomato',
bottom: 125,
marginHorizontal: 130,
padding: 10,
borderRadius: 24,
},
buttonBookNowText: {
textAlign: 'center',
fontWeight: '600',
fontSize: 20,
color: 'white',
},
});