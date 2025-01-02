import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const EventInput = () => {
    const [text, setText] = useState('');
    const _onChange = event => setText(event.nativeEvent.text);
    return (
        <View>
            <Text style={{ margin: 10, fontSize: 30 }}>text : {text}</Text>
            <TextInput 
                style={{
                    borderWidth: 1,          // 테두리 두께
                    borderColor: '#000',     // 테두리 색상
                    padding: 10,             // 내부 여백
                    fontSize: 20,            // 글자 크기
                }}
                placeholder="Enter a text..."
                onChange={_onChange}
            />
        </View>
    );
};

export default EventInput;
