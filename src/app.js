import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
        apiKey: "AIzaSyBvUZYYN_Lxi_IZ6K26KFo1eEcBWI3ppPA",
        authDomain: "auth-d3db0.firebaseapp.com",
        databaseURL: "https://auth-d3db0.firebaseio.com",
        projectId: "auth-d3db0",
        storageBucket: "auth-d3db0.appspot.com",
        messagingSenderId: "820011171458"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;