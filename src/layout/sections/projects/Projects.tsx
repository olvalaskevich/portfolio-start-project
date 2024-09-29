import React from 'react';
import Picture1 from '../../../accets/images/picture1.webp'
import Picture2 from '../../../accets/images/picture2.webp'
import Picture3 from '../../../accets/images/picture3.webp'
import {Project} from "./Project";
import {Container} from "../../../components/container/Conteiner";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import {S} from "../stack/Stack_Styles";
import {Sp} from './Projects_Styles'
import {SliderMobile} from "./SliderMobile";
import {Fade, Zoom} from "react-awesome-reveal";

const projectsData=[
    {
        src:Picture1,
        alt:'pic1'
    },
    {
        src:Picture2,
        alt:'pic2'
    },
    {
        src:Picture3,
        alt:'pic3'
    }
]


export const Projects:React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 810;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <Sp.Projects id={'projects'}>
            <Container>
               <Zoom cascade={true} triggerOnce={true}>
                <StyledTitle2 size={'calc((100vw - 360px)/(1600 - 360) * (48 - 30) + 30px)'} height={'26px'} align={'center'}>Projects</StyledTitle2>
                <S.ThirdTitle>
                    Things I’ve build so far
                </S.ThirdTitle>
               </Zoom>

                {width<breakpoint ? <SliderMobile/>:
                    <Sp.Cards >
                        <Fade cascade={true} triggerOnce={true}>
                        {projectsData.map((s, index) => {
                            return <Project src={s.src} key={index}
                                            alt={s.alt} number={index}/>
                        })}
                        </Fade>
                    </Sp.Cards>

                }

            </Container>
        </Sp.Projects>
    );
};





