import React from 'react';
import { Card, Button } from 'react-native-paper';

const MyCard = ({ title, subtitle }) => {
    return (
        <Card>
             <Card.Title title={title} subtitle={subtitle}/>
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    )
};


export default MyCard;