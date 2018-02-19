import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import RNFlash from 'react-native-flash';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { turnOn: false };
    }

    render() {
        const { turnOn, mainButtonStyle } = styles;
        return (
            <TouchableOpacity style={mainButtonStyle} onPress={this.checkFlash.bind(this)}>
                <Image style={turnOn} source={require('../../assets/icons/turnon.png')} />
            </TouchableOpacity>
        );
    }

    checkFlash() {
        if (this.state.turnOn) {
            RNFlash.turnOffFlash(); // turn off flash
            this.setState(previousState => {
                return { turnOn: false };
            });
        } else {
            RNFlash.turnOnFlash(); // turn on flash
            this.setState(previousState => {
                return { turnOn: true };
            });
        }
    }
}

const styles = {
    turnOn: {
        height: 100,
        width: 100
    },
    mainButtonStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        width: 150,
        height: 150,
        borderRadius: 100
    }
}

export default Button;

