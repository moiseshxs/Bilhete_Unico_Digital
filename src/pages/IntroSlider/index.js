
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



const slides = [
    {
        key: '1',
        title: 'Bilhete Unico Digital',
        text: 'Todos seus bilhetes em um só lugar!',
        image: image1

    },
    {
        key: '2',
        title: 'Passagens por QR Code e NFC',
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
            onDone={() => navigation.navigate('Login')}
            onSkip={() => navigation.navigate('Login')}
            />
            
    );
}