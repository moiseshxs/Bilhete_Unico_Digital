
import AppIntroSlider from "react-native-app-intro-slider";
import image1 from '../../../assets/img/slider/1.png'
import image2 from '../../../assets/img/slider/2.png'
import image3 from '../../../assets/img/slider/3.png'
import image4 from '../../../assets/img/slider/4.png'
import button from "./partials/button";
import doneButton from './partials/doneButton'
import renderSlides from "./partials/renderSlides";
import skipButton from './partials/skipButton'
import Api from "../../Services/api/Api";
import {getCpfStorage,getPasswordStorage,getIdStorage} from './axios';
import AuthPassageiro from '../../Controllers/AuthPassageiro';
import MyContext from '../../Context/context';
import { useContext } from "react";


const slides = [
    {
        key: '1',
        title: 'Bilhete Unico Digital',
        text: 'Todos seus bilhetes em um só lugar!',
        image: image1

    },
    {
        key: '2',
        title: 'Passagens por QR Code',
        text: 'É só aproximar e passar!',
        image: image2
    },
    {
        key: '3',
        title: 'Diversos métodos de pagamento',
        text: 'Pagamentos via pix, cartão e boleto!',
        image: image3

    },
    {
        key: '4',
        title: 'Otimize seu tempo!',
        text: 'Rápido, fácil e eficiente!',
        image: image4

    }
]

export default function IntroSlider({navigation}){
    const authP = new AuthPassageiro()
    const{setPassageiro, setToken} = useContext(MyContext) 
    const verificaoLogin = async() =>{
    
        const cpf = await getCpfStorage();
        const password = await getPasswordStorage();
        const id = await getIdStorage();
        if (cpf && password != null) {
            const response = await authP.login(cpf, password);
            console.log(response)
            if(response.message === undefined){
                setPassageiro(response.usuario)
                setToken(response.token_de_acesso)
                setTimeout(() => setLoading(false), 1000)
                navigation.navigate('ListaBilhetes')
            }
            
        } else {
            navigation.navigate('Login');
        }
    
    }
    
    
    return(
        
            <AppIntroSlider
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={{
                height: 15,
                width: 15,
                backgroundColor: '#f00',
                borderRadius: 100
            
            }}
            dotStyle={{
                height: 15,
                width: 15,
                backgroundColor: 'gray',
                borderRadius: 100
            }}
            showSkipButton={true}
            renderSkipButton={skipButton}
            bottomButton={true}
            renderNextButton={button}
            renderDoneButton={doneButton}
            onDone={verificaoLogin}
            onSkip={verificaoLogin}
            />
            
    );
}