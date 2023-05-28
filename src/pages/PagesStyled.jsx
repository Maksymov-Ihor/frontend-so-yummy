import styled from "styled-components";
import imgm1x from '../images/bg-mobile/bgc1x.png';
import imgt1x from '../images/bg-table/bgct1x.png';
import imgd1x from '../images/bd-desk/bgd1x.png';
import interactionBG1x from '../images/bg-mobile/interactionBG1x.png';
import interactionBGt1x from '../images/bg-table/interactionBGt1x.png';
import interactionBGd1x from '../images/bd-desk/interactionBGd1x.png';

const Wrapp = styled.div`
    position: relative;
    background-color: ${p => p.theme.colors.bgPrimeryColor};
    /* height: 100%; */
    & {
        @media screen and (max-width: 767px) {
            padding-top: 322px;;
        }

        @media screen and (min-width: 768px) and (max-width: 1439px) {
            padding-top: 418px;
        };

        @media screen and (min-width: 1440px) {
            padding-top: 444px;
        };
    }
`;

const Image = styled.div`
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    & {
        @media screen and (max-width: 767px) {
            background-image: url(${interactionBG1x});
            top: 87px;
            width: 285px;
            height: 250px;
            left: 50%;
            transform: translate(-50%);
        };

        @media screen and (min-width: 768px) and (max-width: 1439px) {
            background-image: url(${interactionBGt1x});
            top: 96px;
            width: 409px;
            height: 359px;
            left: 50%;
            transform: translate(-50%);
        };

        @media screen and (min-width: 1440px) {
            background-image: url(${interactionBGd1x});
            width: 532px;
            height: 468px;
            top: 115px;
            left: 113px;
        };
    }
`;

const BgAccent = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    & {
        @media screen and (max-width: 767px) {
            background-image: url(${imgm1x});
            height: 490px;
        };

        @media screen and (min-width: 768px) and (max-width: 1439px) {
            background-image: url(${imgt1x});
            height: 606px;
        };

        @media screen and (min-width: 1440px) {
            background-image: url(${imgd1x});
            height: 325px;
        };
    }
`;

export { Wrapp, Image, BgAccent };