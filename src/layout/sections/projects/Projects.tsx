import React from 'react';
import Picture1 from '../../../accets/images/picture1.webp'
import Picture2 from '../../../accets/images/picture2.webp'
import Picture3 from '../../../accets/images/picture3.webp'
import Picture4 from '../../../accets/images/picture4.webp'
import Picture5 from '../../../accets/images/picture5.webp'
import Picture6 from '../../../accets/images/picture6.webp'
import {Project} from "./Project";
import {Container} from "../../../components/container/Conteiner";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import {S} from "../stack/Stack_Styles";
import {Sp} from './Projects_Styles'
import {SliderMobile} from "./SliderMobile";

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
    },
    {
        src:Picture4,
        alt:'pic4'
    },
    {
        src:Picture5,
        alt:'pic5'
    },
    {
        src:Picture6,
        alt:'pic6'
    }
]


export const Projects:React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 809;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <Sp.Projects>
            <Container>
                <StyledTitle2 size={'calc((100vw - 360px)/(1600 - 360) * (48 - 30) + 30px)'} height={'26px'} align={'center'}>Projects</StyledTitle2>
                <S.ThirdTitle>Things I’ve built so far</S.ThirdTitle>
                {width<breakpoint ? <SliderMobile/>:
                    <Sp.Cards>

                        {projectsData.map((s, index) => {
                            return <Project src={s.src} key={index}
                                            alt={s.alt}/>
                        })}

                    </Sp.Cards>

                }
            </Container>
        </Sp.Projects>
    );
};





