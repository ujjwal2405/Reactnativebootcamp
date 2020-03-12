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

class mapRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrObj: [
        {
          title: "First Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Second Item",
          image:
            "https://www.naturalworldsafaris.com/media/5405/nws-st-bengal-tiger.jpg"
        },
        {
          title: "Third Item",
          image: "https://thumbs.dreamstime.com/b/guitar-16722681.jpg"
        },
        {
          title: "Fourth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Fifith Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Sixth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Seventh Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Eighth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Nineth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Tenth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Eleventh Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Twelth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Thirteenth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Fourteenth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },{
          title: "Fifteenth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Sixteenth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Seventeenth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Eighteenth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Nineteenth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
          title: "Twentieth Item",
          image: "https://reactnative.dev/img/tiny_logo.png"
        },
      ]
    };
  }

  //   removeElement(){
  //     this.setState({
  // arrObj:" "
  //     })
  //   }

  render() {
    const { arrObj } = this.state;
    const {navigation}=this.props;
    return (
        <View>
            {
            arrObj.map(item=>{
                return(
                    <View >
                    <Image
                      // resizeMode="contain"
                      source={{ uri: item.image }}
                     
                    ></Image>
                    <Text > {item.title}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        arrObj.splice(index, 1);
                        this.setState({});
                      }}
                    >
                      <View >
                        <Text>Press To Delete</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )
            })}
        </View>
    )
        }}


export default mapRender;
