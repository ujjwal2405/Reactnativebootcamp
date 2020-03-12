import React from "react";

import {
  View,
  Text,
  StyleSheet,

} from "react-native";



    const SectionListItem=(props)=>{
        
        return(
            <Text style={styles.content}>{props.name} {props.categName} {props.quantity}</Text>
        )
      
  }

  const styles = StyleSheet.create({
    content: {
    
    
      fontSize:30,
    
    },
  });

export default SectionListItem