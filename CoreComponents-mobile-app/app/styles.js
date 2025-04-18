import { StyleSheet } from 'react-native';

// Defining a collection of styles for the app component
const styles = StyleSheet.create({
  
  // Styling For main view
  container: {
    padding: 15,
    flexGrow: 1,
    backgroundColor: 'white'
  },
  
  // Styling for logo image
  logo: {
    marginLeft:30,
    width: 200,
    height: 200
  },
  
  // Styling for title and course title text
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: 'yellow'
  },
  
  // Styling for input text field
  input: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 7,
    marginTop: 10
  },
  
});

export default styles;
