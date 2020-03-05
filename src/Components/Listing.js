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

class Listing extends React.Component {
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
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={arrObj}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.container}>
                <Image
                  // resizeMode="contain"
                  source={{ uri: item.image }}
                  style={styles.img}
                ></Image>
                <Text style={styles.text}> {item.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    arrObj.splice(index, 1);
                    this.setState({});
                  }}
                >
                  <View style={styles.crossButton}>
                    <Text>Press To Delete</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    height: 150,
    width: 150,

    flex: 0.5
  },
  text: {
    flex: 0.7,
    padding: 10
  },
  crossButton: {
    flex: 0.1,
    backgroundColor: "yellow"
  }
});

export default Listing;
