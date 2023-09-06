import React from 'react';
import Picture1 from '../../../accets/images/picture1.webp'
import Picture2 from '../../../accets/images/picture2.webp'
import Picture3 from '../../../accets/images/picture3.webp'
import Picture4 from '../../../accets/images/picture4.webp'
import Picture5 from '../../../accets/images/picture5.webp'
import Picture6 from '../../../accets/images/picture6.webp'
import {Project} from "./Project";
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";



export const Projects = () => {
    return (
        <section>
        <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                <Project src={Picture1} alt={'pic1'}/>
                <Project src={Picture2} alt={'pic1'}/>
                <Project src={Picture3} alt={'pic1'}/>
                <Project src={Picture4} alt={'pic1'}/>
                <Project src={Picture5} alt={'pic1'}/>
                <Project src={Picture6} alt={'pic1'}/>
        </FlexWrapper>
        </section>
    );
};




