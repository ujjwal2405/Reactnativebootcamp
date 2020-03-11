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

class Flatmodal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrObj: [
        {
          title: "First Item",
          content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Second Item",
          content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Third Item",
          content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Fourth Item",
          content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Fifith Item",
          content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Sixth Item",
          content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Seventh Item",
          content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Eighth Item",
          content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Nineth Item",
          content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Tenth Item",
          content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Eleventh Item",
          content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Twelth Item",
          content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Thirteenth Item",
         content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Fourteenth Item",
         content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },{
          title: "Fifteenth Item",
         content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Sixteenth Item",
         content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Seventeenth Item",
         content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Eighteenth Item",
         content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Nineteenth Item",
         content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
        {
          title: "Twentieth Item",
         content:"lorem ipsium tipsium ripsium chipsium this content is for demo"
        },
      ],show:false,
      saveTitle:" ",
      saveContent:" "
    };
  }

 toggleModal=()=>{
     this.setState({
         show:true,
     })
 }

  render() {
    const { arrObj ,show,saveTitle,saveContent} = this.state;
    const {navigation}=this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
          
        <FlatList
          data={arrObj}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={()=>{
                {this.toggleModal(), this.setState({saveTitle:item.title,saveContent:item.content})}
              }}>
              <View style={{  borderColor:"black",
    borderWidth:2,margin:10}} >
                <Text style={styles.title}>
                    {item.title}
                </Text>
                
                <Text style={styles.content}>
                    {item.content}
                </Text>
              
              </View>

              </TouchableOpacity>
            );
          }}
          
        />

        <Modal isVisible={this.state.show}
                style={{opacity:0.5,alignItems:"center",margin:50,justifyContent:"center",backgroundColor:"white",flex:0.3}}
                coverScreen={false}
                animationIn="slideInDown"
                onBackdropPress={this.toggleModal}
              >
            <Text style={{textAlign:"center" ,padding:20}}>
            {saveTitle}
            </Text>

            <Text style={{textAlign:"center",padding:20}}>
            {saveContent}
            </Text>

            <TouchableOpacity  onPress={() => navigation.navigate('demoScreen',{data:`${saveTitle} ${saveContent}`})}>
              <View>
                  <Text style={{textAlign:"center"}}>
                      Press To Navigate
                  </Text>
              </View>
          </TouchableOpacity>

        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
title:{
    margin:10,
    padding:10,
   
},
content:{
    margin:10,
    padding:10,
    
}
});

export default Flatmodal;
