import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
        apiKey: "AIzaSyBvUZYYN_Lxi_IZ6K26KFo1eEcBWI3ppPA",
        authDomain: "auth-d3db0.firebaseapp.com",
        databaseURL: "https://auth-d3db0.firebaseio.com",
        projectId: "auth-d3db0",
        storageBucket: "auth-d3db0.appspot.com",
        messagingSenderId: "820011171458"
        });
        
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true})
            } else {
                this.setState({ loggedIn: false})
            }
        });

    }

    renderContent() {
        if (this.state.loggedIn) {
            return (
                <Button>
                    Logg onAut
                </Button>
            );
        }

        return <LoginForm />;
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent}
            </View>
        );
    }
}

export default App;