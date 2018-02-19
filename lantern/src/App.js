import React, {Component} from 'react';
import {View} from 'react-native';
import Main from './components/Main';

class App extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#42A5F5',flex:1, justifyContent:'center', alignItems:'center'}}>
                <Main />
            </View>
        );
    }
}

export default App;