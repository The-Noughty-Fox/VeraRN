import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { DirectEventHandler } from "react-native/Libraries/Types/CodegenTypes";
import RTNVera from 'vera-rtn-sdk/js/index';
import {VeraView, type VeraConfiguration, type VeraMessage} from 'vera-rtn-sdk/js/RTNVeraNativeComponent'

const App: () => JSX.Element = () => {
  const config: VeraConfiguration = {
    app: {
      siteIds: ['sdk-sample-site'],
      clientId: 'vera-example-rtn-app'
    },
    domain: 'https://vera.resonai.com',
    language: 'ru'
  }
  const handleMessage: DirectEventHandler<VeraMessage> = (event) => {
    console.log(`Got event ${event.nativeEvent}`)
  }

  return (
    <SafeAreaView>
    <StatusBar barStyle={'dark-content'} />
    <VeraView 
      style={{width: '100%', height: '100%'}} 
      config={config}
      onHandleMessage={handleMessage}
      />
    </SafeAreaView>
  )
}

export default App;
