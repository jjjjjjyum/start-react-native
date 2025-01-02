import React from "react";
import { Text, View, Button } from "react-native";
import Mybutton from "./components/MyButton";
import Counter from "./components/Counter";
import ViewBoxesWithColorAndText from "./components/ViewBoxesWithColorAndText";
import EventButton from "./components/EventButton";
import EventInput from "./components/EventInput";

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
            {/* <Text style={{ fontSize: 30, marginBottom: 10 }}>Props</Text>
            <Mybutton title="Button"/>
            <Mybutton>Childeren Props</Mybutton>
            <Mybutton /> */}
            {/* <Mybutton title={123}/> */}

            {/* <Counter /> */}
            {/* <ViewBoxesWithColorAndText /> */}
            <EventButton />
            <EventInput />
        </View>
    );
};

export default App