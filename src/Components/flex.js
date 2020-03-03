import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class flex extends React.Component{
    constructor(props){
        super(props);
        this.state={text:'',passtext:''};
    }
  onChangeText(text){
   
  }
 render(){
     return(
         <View style={styles.container}>
        <View style={[styles.child,{backgroundColor:'blue'},styles.border]}/>
        
        
        </View>
     )
 }  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    child:{
        height:50,
        width:50,
        backgroundColor:'red'
    },
    border:{
        borderColor:'yellow',
        borderWidth:5
    }
  });

export default flex