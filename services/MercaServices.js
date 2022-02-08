import config from '../react-native-config';
import axios from 'axios';

export const getPreferenceId= async (payer) => {
 /*  const url = `https://api.mercadopago.com/checkout/preferences?access_token=${config.MP_ACCESS_TOKEN}`;
    const valor = {
        items,
        payer:{
         email:payer,
        }
    }

    await axios.post(url.replace(' ','%20').replace('#json',''),{valor})
    .then((res) => {
        console.log(`respuesta : `, res);
        return res.id;
    })
    .catch((error) => {
        console.log(`error`,error);
    })

    */
    
        const response = await fetch(
          `https://api.mercadopago.com/checkout/preferences?access_token=${config.MP_ACCESS_TOKEN}`,
          {
             method:'POST',
             ContentType:'application/json',
             body: JSON.stringify({
                 items:[{
                  id:"a12",
                  status:"approved",
                  statusDetail:"good",
                  operationType:null,
                  paymentMethodId:null,
                  paymentTypeId:null,
                  quantity:1, 
                  issuerId:null,
                  installments:2,
                  captured:null,
                  liveMode:null,
                  transactionAmount:12.000,
                  description:"New products house and services",
                  title:"Buy products",
                  currency_id:"COP",
                  unit_price:12.000
                 }],
                 payer:{
                  email:payer,
                 },
             }), 
           }
          );
           
          const preferences = await response.json();
          return preferences.id;

        }




