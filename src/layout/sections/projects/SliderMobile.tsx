import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Project} from "./Project";
import Picture1 from '../../../accets/images/picture1.webp';
import Picture2 from '../../../accets/images/picture2.webp';
import Picture3 from '../../../accets/images/picture3.webp';
import Picture4 from '../../../accets/images/picture4.webp';
import Picture5 from '../../../accets/images/picture5.webp';
import Picture6 from '../../../accets/images/picture6.webp';
import '../../../styles/Slider.css';
import {Container} from "../../../components/container/Conteiner";
import {Fade} from "react-awesome-reveal";



const items = [
    <Project src={Picture1} alt={'pic1'}/>,
    <Project src={Picture2} alt={'pic2'}/>,
    <Project src={Picture3} alt={'pic3'}/>,
    <Project src={Picture4} alt={'pic4'}/>,
    <Project src={Picture5} alt={'pic5'}/>,
    <Project src={Picture6} alt={'pic6'}/>
];
export const SliderMobile:React.FC = () => (
    <Container padding={'60px 0 0 0'}>
        <Fade>
        <AliceCarousel
            mouseTracking
            items={items}
            autoWidth
            autoHeight
        />
        </Fade>
    </Container>
);


