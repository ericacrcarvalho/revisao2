import React from 'react';
import { Button } from 'react-native-paper';

const MyButton = ({ title, color }) => {
    return (
        <Button
            icon="camera"
            mode="contained"
            onPress={() => console.log("MyButton.....")}
            style={{backgroundColor: color}}
        >{title}
        </Button>

    );
}

export default MyButton;