import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MyComponent = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuCategories}>
        <TouchableOpacity
          style={[
            styles.menuCategoryButton,
            selectedButton === 'All' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('All')}
        >
          <Text style={styles.menuCategoriesText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuCategoryButton,
            selectedButton === 'Popular' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('Popular')}
        >
          <Text style={styles.menuCategoriesText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuCategoryButton,
            selectedButton === 'Recommended' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('Recommended')}
        >
          <Text style={styles.menuCategoriesText}>Recommended</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuCategoryButton,
            selectedButton === 'More' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('More')}
        >
          <Text style={styles.menuCategoriesText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuCategories: {
    flexDirection: 'row',
  },
  menuCategoryButton: {
    padding: 10,
    margin: 5,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'tomato',
  },
  menuCategoriesText: {
    color: 'black',
  },
  selectedButton: {
    backgroundColor: 'tomato',
  },
});


export default MyComponent;

