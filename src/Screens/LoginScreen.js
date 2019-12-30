import React, { Component } from 'react'
import { View } from 'react-native'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'
import { mapping, dark } from '@eva-design/eva'

export class LoginScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout style = {{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
                <Text> LoginScreen </Text>
            </Layout>
        )
    }
}

export default LoginScreen
