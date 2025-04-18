import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import courseData from './courses.json';
import styles from './styles';

const App = () => {
  // using useState hook to manage the user's favorite course
  const [favoriteCourse, setFavoriteCourse] = useState('');
  
  // Destructuring course categories from imported JSON data
  const { coreCourses, depthCourses, capstoneCourse } = courseData;

  return (
    // ScrollView  to scroll vertically if content overflows the screen
    // here i'am using contentContainerStyle instead of style to ensure padding applies to scrollable content
    // This helps make sure the inner views are styled properly and can scroll if needed
    <ScrollView contentContainerStyle={styles.container}>
      <View >
        <Image source={require('../assets/images/icon.png')} style={styles.logo} />
        <Text style={styles.title}>City University Of Seattle - MSCS Courses</Text>
      </View>

      <View >
        <Text>Which course did you like most?</Text>
        <TextInput style={styles.input}
          placeholder="eg. CS 624 - Full-Stack Development - Mobile App"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
        />
        {/* Display user’s input if it is not empty */}
        {favoriteCourse ? (
          <Text>
            Your favoriteCourse is: {favoriteCourse}
          </Text>
        ) : null}
      </View>

      {/* Displaying core, depth, and capstone courses from JSON file*/}
      <View>
        <Text style={styles.title}>Core Requirements (24 Credits)</Text>
        {coreCourses.map((course) => (
          <Text>{course}</Text> // List all the core courses
        ))}

        <Text style={styles.title}>Depth of Study (6 Credits)</Text>
        {depthCourses.map((course) => (
          <Text>{course}</Text> // List all the depth courses
        ))}

        <Text style={styles.title}>Capstone Course (3 Credits)</Text>
        {/* displays capstone course */}
        <Text>{capstoneCourse}</Text>  
      </View>
    </ScrollView>
  );
};

export default App;
