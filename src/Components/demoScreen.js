import React from "react";

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList,
    SafeAreaView
  } from "react-native";
  
  import Modal from "react-native-modal";

  class demoScreen extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
    const {route}=this.props
        return(
            <SafeAreaView>
                <View>
                    <Text>
            {route.params.data}
                    </Text>
                </View>
            </SafeAreaView>
        )
    }

}

export default demoScreen