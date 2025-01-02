import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types'; 


const Mybutton = ({title = 'default', ...props}) => {
    // props.title = 'ooo'; 
    console.log(props);
    return (
        <TouchableOpacity
            style={{
                backgroundColor:'#3498db',
                padding:16,
                margin:10,
                borderRadius:8,
            }}
            // onPress={()=>alert('Click!!')}
            onPress ={() => props.onPress()}
        >
            <Text style={{color:'white',fontSize:24}}>
                {props.children || title} 
            </Text>
        </TouchableOpacity>
    );
};

Mybutton.propTypes = {
    title:PropTypes.string,
};

export default Mybutton;