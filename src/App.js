import React from "react";
import { Text, View, Button } from "react-native";
import Mybutton from "./components/MyButton";
const App = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={{ fontSize: 30, marginBottom: 10 }}>Props</Text>
            <Mybutton title="Button"/>
            <Mybutton>Childeren Props</Mybutton>
            <Mybutton />
            {/* <Mybutton title={123}/> */}
        </View>
    );
};

export default App