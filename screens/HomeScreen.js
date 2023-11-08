import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Let's Discovery</Text>
        <Image style={styles.imageProfile} source={require('../assets/image/indir.png')} />
      </View>

      <View style={styles.searchIconsText}>
        <TextInput placeholder='Search' style={styles.searchTextInput}>
          <AntDesign style={styles.searchButton} name="search1" size={28} color="black" />
        </TextInput>

        <TouchableOpacity style={styles.categoriesOpacity}>
          <Text style={styles.categoriesText}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.seeAllOpacity}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        style={styles.menuCategoriesImages}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.item}>
          <Image
            source={require('../assets/image/resim1.jpg')}
            style={styles.image}
          />
          <Text style={styles.text}>Ocean</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/image/resim2.jpg')}
            style={styles.image}
          />
          <Text style={styles.texting}>Mountain</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/image/resim4.jpg')}
            style={styles.image}
          />
          <Text style={styles.text}>Camp</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/image/resim6.jpg')}
            style={styles.image}
          />
          <Text style={styles.text}>Beach</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/image/resim5.jpg')}
            style={styles.image}
          />
          <Text style={styles.text}>Sunset</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/image/resim8.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Hiking</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/image/resim7.jpg')}
            style={styles.image}
          />
          <Text style={styles.text}>Forest</Text>
        </View>
      </ScrollView>

      <View style={styles.menuTitleContainer}>
        <TouchableOpacity style={styles.menuTouchableOpacity}>
          <Text style={styles.menuText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuTouchableOpacity}>
          <Text style={styles.menuText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuTouchableOpacity}>
          <Text style={styles.menuText}>Recommended</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuTouchableOpacity}>
          <Text style={styles.menuText}>More</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.TravelImageArea}>
        <TouchableOpacity onPress={() => navigation.navigate('Italy')}>
          <Image style={styles.italyImages} source={require('../assets/image/isim6.jpg')}
          ></Image>
          <Text style={styles.italyText}>İtaly</Text>
          <Ionicons style={styles.italyIcon} name="heart-circle-outline" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dubai')}>
          <Image style={styles.dubaiImages} source={require('../assets/image/isim7.jpg')}></Image>
          <Text style={styles.dubaiText}>Dubai</Text>
          <Ionicons style={styles.dubaiIcon} name="heart-circle-outline" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Everest')}>
          <Image style={styles.everesImages} source={require('../assets/image/isim2.jpg')}></Image>
          <Ionicons style={styles.everestIcon} name="heart-circle-outline" size={32} color="white" />
          <Text style={styles.everestText}>Everest</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sweden')}>
          <Image style={styles.swedenImages} source={require('../assets/image/isim1.jpg')}></Image>
          <Text style={styles.swedenText}>Sweden</Text>
          <Ionicons style={styles.swedenIcon} name="heart-circle-outline" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

//! Title area

  headerContainer: {
    width: 450,
    height: 150,
  },
  header: {
    width: 210,
    height: 120,
    fontStyle: 'italic',
    fontWeight: 'bold',
    left: 40,
    fontSize: 32,
    top: 70,
  },
  imageProfile: {
    width: 45,
    height: 45,
    borderRadius: 50,
    position: 'relative',
    left: 320,
    bottom: 50,
  },

//! Title end

//! search area

  searchIconsText: {
    top: 10,
    width: 400,
    height: 140,
  },
  searchTextInput: {
    width: 335,
    height: 60,
    left: 35,
    backgroundColor: '#dcdcdc',
    borderRadius: 24,
  },
  searchButton: {
    position: 'absolute'
  },

  //! Search end

  //! Selected Area
  categoriesOpacity: {
    top: 40,
    width: 150,
    flex: 0.5,
    alignItems: 'flex-start',
    left: 35,
  },
  categoriesText: {
    fontSize: 18,
    top: 0,
    fontWeight: 'bold'
  },
  seeAllOpacity: {
    flex: 0.5,
    alignItems: 'center',
    left: 250,
    width: 150,
  },
  seeAllText: {
    fontSize: 18,
    color: 'tomato',
    fontWeight: 'bold',
  },
  menuCategoriesImages: {
    position: 'relative',
    top: 20,
    width:400,
    height: 150,
    left: 40,
  },
  item: {
    width: 130,
    height: 80,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },
  text: {
    left: 13,
  },
  texting: {
    left: 5,
  },

  //! Selected end


  //! Menu Title Area
  menuTitleContainer:{
    width:330,
    height:50,
    backgroundColor:'#dcdcdc',
    position:'relative',
    left:40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    borderWidth:2,
    borderColor:'tomato'
  },
  menuTouchableOpacity:{
    flexGrow:20,
  },
  menuText:{
    left:10,
  },
  //! Menu Title Area end



  //! Travel Image Area 
  TravelImageArea:{
    width:450,
    height:550,
    position:'relative',
    top:20,
  },
  italyImages:{
    left: 40,
    width:150,
    height:220,
    borderRadius:18,
    resizeMode:'contain',
  },
  italyText:{
    left:60,
    bottom:40,
    fontSize: 24,
    color:'tomato'
  },
  italyIcon:{
    left: 154,
    bottom: 242,
    
  },
  dubaiImages:{
    width:150,
    height: 220,
    position:'relative',
    left: 220,
    bottom: 285,
    borderRadius: 18,
  },
  dubaiText:{
    bottom:324,
    left:230,
    fontSize:24,
    color:'red',
  },
  dubaiIcon:{
    bottom:526,
    left: 334,

  },
  everesImages:{
    left: 40,
    width:150,
    height:220,
    bottom: 320,
    borderRadius:18,
    resizeMode:'contain',
  },
  everestText:{
    color: 'tomato',
    bottom: 395,
    left: 50,
    fontSize: 24,
  },
  everestIcon:{
    bottom:532,
    left: 150,
  },
  swedenImages:{
    width:150,
    height: 220,
    position:'relative',
    left: 220,
    bottom: 605,
    borderRadius: 18,
  },
  swedenText:{
    fontSize:24,
    bottom: 645,
    color: 'black',
    left:230,
  },
  swedenIcon:{
    bottom:850,
    left: 330,
  }

  //! Travel Image Area  End
})