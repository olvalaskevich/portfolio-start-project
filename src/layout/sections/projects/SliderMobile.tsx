import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Project} from "./Project";
import Picture1 from '../../../accets/images/picture1.webp';
import Picture2 from '../../../accets/images/picture2.webp';
import Picture3 from '../../../accets/images/picture3.webp';
import '../../../styles/Slider.css';
import {Container} from "../../../components/container/Conteiner";
import {Fade} from "react-awesome-reveal";



const items = [
    <Project number={0} src={Picture1} alt={'pic1'}/>,
    <Project  number={1} src={Picture2} alt={'pic2'}/>,
    <Project number={2} src={Picture3} alt={'pic3'}/>
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


