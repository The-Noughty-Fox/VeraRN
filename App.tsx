import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import RTNVera from 'vera-rtn-sdk/js/index';
import type {VeraConfiguration} from 'vera-rtn-sdk/js/RTNVeraNativeComponent'

const App: () => JSX.Element = () => {
  const config: VeraConfiguration = {
    app: {
      siteIds: ['sdk-sample-site'],
      clientId: 'vera-example-rtn-app'
    },
    domain: 'https://vera.resonai.com',
    language: 'ru'
  }

  return (
    <SafeAreaView>
    <StatusBar barStyle={'dark-content'} />
    <RTNVera style={{width: '100%', height: '100%'}} config={config}/>
    </SafeAreaView>
  )
}

export default App;
