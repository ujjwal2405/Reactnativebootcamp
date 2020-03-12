import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  SectionList
} from "react-native";
const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];
import Modal from "react-native-modal";

class demoScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { route } = this.props;
    return (
      <SafeAreaView style={{flex:1}} >
          <View style={styles.container}>
        <Text>{route.params.datas}</Text>
        <SectionList
        sections={DATA}
        renderItem={({item})=>{
        return(<Text style={styles.item}>{item}</Text>)
        }}
        renderSectionHeader={(a)=>{
        ;
        return(<Text style={styles.sectionHeader}>{a.section.title}</Text>)
        }}
        
        />
           </View> 
       
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: "#5ead97"  
    },  
    sectionHeader: {  
        
        fontSize: 22,  
        fontWeight: 'bold',  
        color: "black",  
        backgroundColor: '#8fb1aa',
       marginTop:20
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    }  
})  
export default demoScreen;
