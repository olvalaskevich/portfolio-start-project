import React from 'react';
import {Menu} from "./menu/Menu";
import {Logo1} from "../../components/logo/Logo1";
import {Container} from "../../components/container/Conteiner";
import {FlexWrapper} from "../../components/flexwrapper/FlexWrapper";
import {MenuMobile} from "./mobile/MenuMobile";
import {S} from './Header_Styles'



export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 930;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <S.Header>
            <Container padding={'0 15px'}>
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <Logo1/>

                    {width<breakpoint ? <MenuMobile/>
                                      : <Menu/>}

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};



