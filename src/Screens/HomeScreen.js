import * as React from 'react';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'
import { ThemeColors, useTheme } from 'react-navigation';

function HomeScreen() {
    return (
        <Layout style = {{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
            <View>
                <Image source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }} style={{ height: 200, width: 200 }} /> 
            </View>
            <TouchableOpacity style = {{marginTop : 20}}>
                <Text >My Profile</Text>
            </TouchableOpacity>
        </Layout>
    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});

export default HomeScreen