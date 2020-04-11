import React, {Component} from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
type Props = {};

class HomeScreen extends Component{
    render(){
        return(
          <View style = {styles.container}>
            <StatusBar barStyle = 'light-content'/>
            <Text style = {styles.login}>Login Page</Text>
            <TextInput style = {styles.input} placeholder = 'Username'/>
            <TextInput style = {styles.input} placeholder = 'Password' secureTextEntry/>
            <View style = {styles.btnContainer}>
            <TouchableOpacity style = {styles.btn} onPress = {()=> this.props.navigation.navigate('first')}>
                <Text style = {styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.btn} onPress = {()=> alert('signup works')}>
                <Text style = {styles.btnTxt}>SignUp</Text>
            </TouchableOpacity>
                
            </View>
          </View>
    
        );
      }
}


class firstScreen extends Component{
    render(){
        return(
            <View>
                <Text>Login Succesful</Text>
            </View>
        );

    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        first: firstScreen
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends Component<Props>{
  render(){
    return(
        <AppContainer/>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  login: {
    fontSize: 30,
    margin: 10,
    color: "#ffffff",
    fontStyle: 'italic',


  },
  input: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 10

  },
  btnContainer:
  {
      flexDirection:"row",
      justifyContent: "space-between",
      width: '70%'
  },
  btn: {
      backgroundColor: 'grey',
      padding: 5,
      justifyContent: 'center',
      width: '35%'
  },
  btnTxt:{
      fontSize: 20,
      color: 'white',
      fontStyle: 'italic',
      padding: 10
  }

  });
