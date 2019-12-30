import React, { useState } from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme, dark } from '@eva-design/eva';
import AppNavigator from './src/routes/Routes'



const App = (props) => {
  console.log(props)
  const [theme, setTheme] = useState(dark)

  return (
    <ApplicationProvider mapping={mapping} theme={theme}>
      <AppNavigator screenProps={{ data: setTheme }} />
    </ApplicationProvider>
  )
};

export default App;