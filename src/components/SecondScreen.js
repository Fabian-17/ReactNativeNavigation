import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const SecondScreen = () => {
    return (
      <View style={styles.view}>
        <Text>Ola</Text>
        <StatusBar style="auto" />
      </View>
    );
  };


const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    });