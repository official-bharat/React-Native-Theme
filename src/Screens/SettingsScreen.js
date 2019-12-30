import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components'
import { light as lightTheme, dark } from '@eva-design/eva';

export default class SettingsScreen extends Component {
    constructor(props) {
        super(props)
        console.log(props, "props found")
    }
    setThemeFunc = (selectedTheme) => {
        if (selectedTheme === 'dark')
            this.props.screenProps.data(dark)
        else {
            this.props.screenProps.data(lightTheme)
        }
    }
    render() {
        return (
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.setThemeFunc('white')}>
                    <Text category="h5">White Theme </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setThemeFunc('dark')}>
                    <Text category="h5">Dark Theme </Text>
                </TouchableOpacity>
            </Layout>
        )
    }
}
