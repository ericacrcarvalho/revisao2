import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Button, Alert } from 'react-native';
import { colors } from '../../utils/colors';
import { sizes } from '../../utils/sizes';
import MyButton from '../../components/button/MyButton';
import MyCard from '../../components/card/MyCard';

const Focus = ({ size, yellow, pink }) => {
    return (
        <View style={styles({}).container} >
        <View style={styles({}).box1}>
            <Text style={styles({ size }).text} >View 1</Text>
            <Image
            style={styles({}).img}
            // source={{uri:'https://palavradodia.files.wordpress.com/2013/09/qualquer-ou-quaisquer-jpg.png'}}
            source={require('../../images/sextou.png')}
            />
            <TextInput
              style={ [styles({ pink }).textInput, {fontSize: 10}] }
              onChangeText={() => console.log("Digitei")}
              placeholder="Digite aqui..."
            />
            <TextInput
              style={[styles({ pink }).textInput, {fontSize: 15}]}
              onChangeText={() => console.log("Digitei")}
              placeholder="Digite aqui..."
            />
        </View>
        <View style={styles({}).box2}>
            <ScrollView 
            showsVerticalScrollIndicator={true}
            style={styles({}).scroll}
            >
            <Text style={styles({ size }).text}> View 2</Text>
            <Text style={styles({ size }).text}> View 2</Text>
            <Button
                onPress={() => Alert.alert("Cliquei nesse botão")}
                title="Clique aqui"
                color={yellow}
            />
              <MyButton
                title={"Cancel"}
                color={colors.dark.red}
              />
              <MyButton
                title={"Ok"}
                color={colors.dark.blue}
              />
              <MyCard
                title={"2021"}
                subtitle={"Pictures"}
              />
              <MyCard
                title={"2020"}
                subtitle={"Pictures"}
              />
            </ScrollView>            
        </View>      
    </View>
    );
}

export default Focus;

const styles = ({ size, pink }) => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.basic.red,
    }, 
    text: {
      fontSize: size,
      fontWeight: '700',
    }, 
    img: {
      width: 150,
      height: 100,
    },
    box1: {
      flex: 2,
      backgroundColor: colors.dark.blue,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box2:{
      flex: 2,
      backgroundColor: colors.dark.green,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      borderWidth: sizes.spacing.small,
      margin: sizes.spacing.medium,
      padding: sizes.spacing.medium,
      borderColor: pink,
    },
    scroll: {
      padding: sizes.spacing.xlarge,
    }
  
  });

