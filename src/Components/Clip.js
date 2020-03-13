import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    TouchableOpacity
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

class Clip extends React.Component{
    
        constructor(props) {
        super(props);
        }
render(){

    return(
        <SafeAreaView style={{flex:1}}>
            <Text>
        Heelloooo
            </Text>
        </SafeAreaView>
    );
}

    }
export default Clip