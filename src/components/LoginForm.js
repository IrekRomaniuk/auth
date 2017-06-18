import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' }

    render() {
        return (
            <Card>
                <CardSection >
                    <Input
                    placeholder = "user@email.com"
                    value={this.state.text}
                    label="Email"
                    onChangeText={email => this.setState({ email })}
                     />
                </CardSection>

                <CardSection />

                <CardSection >
                    <Input
                        secureTextEntry
                        placeholder = "password"
                        value={this.state.password}
                        label="Password"
                        onChangeText={password => this.setState({ password })}
                    />
                </ CardSection >

                <CardSection >
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
