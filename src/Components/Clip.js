import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    TouchableOpacity,
    Clipboard
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

class Clip extends React.Component{
    
        constructor(props) {
        super(props);
        this.state={
            navigScreen:' '
        }
        }
        async getContent(){
            const CopiedText = await Clipboard.getString();
            this.setState({
                navigScreen:CopiedText
            });
        }
render(){
const {navigScreen}=this.state
    return(
        <SafeAreaView style={{flex:1}}>
            <Text>
        Heelloooo
            </Text>

            <TouchableOpacity
            onPress={()=>{
                this.getContent();
            }}>
                <Text>
                    Press Me to Copy
                </Text>
            </TouchableOpacity>
        <Text>{navigScreen}</Text>
        </SafeAreaView>
    );
}

    }
export default Clip