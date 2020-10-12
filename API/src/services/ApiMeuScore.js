import connectMeuScore from '../config/ApiMeuScore';
import Axios from 'axios';
const tcpfcnpj = '18154813742';
const tdatnsc  = '11041999';
Axios.get(`${connectMeuScore.baseURL}/${tcpfcnpj}&${tdatnsc}`).then(response =>{
    console.log(response)
}).catch(err =>{
        console.log(err);
})
