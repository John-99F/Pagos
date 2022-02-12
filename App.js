import config from './react-native-config';
import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';

import mercadopago from 'mercadopago'

import { MercadoPagoCheckout } from 'react-native-mercadopago-checkout';

import * as MercadoPagoService from './services/MercaServices';


const App = () => {

  const [state, setState] = useState(null);
  const [publickey,setPublic] = useState(null);

  const [paymentResult, setPaymentResult] = useState(null);

  const startCheckout = async () => {
    try {
      
        const preferenceId = await MercadoPagoService.getPreferenceId('payer@email.com');

        console.log(`preferenceId`,preferenceId);
        console.log(`Public key `,config.MP_PUBLIC_KEY );

 
      
        const payment1 = await MercadoPagoCheckout.startForPayment(
          preferenceId,
          config.MP_PUBLIC_KEY,{  
          backgroundColor: '#414141',
          enableDarkFont: true});
      
        setPaymentResult(payment1);
        console.log(paymentResult);
      
    } catch (error) {
      console.log(`Error : `, error);
    }
  };

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Confirmar compra</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder='Valor Compra'
          onChangeText={(value) => setState(value)} />
      </View>
      <View>
        <Button title='Buy' onPress={() => startCheckout()} />
      </View>
    </View>
  )
}




const styles = StyleSheet.create({

  inputGroup: {
    flex:1,
    padding:0,
    marginBottom:15,
    borderBottomWidth:1,
    borderBottomColor: '#cccccc'
  },
  title: {
    fontSize: 30,
    marginTop:70
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  }
})



export default App;