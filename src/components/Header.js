import styled, { keyframes } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { BsFillCaretDownFill } from "react-icons/bs";

const MyButton = styled.button`
    width: 100px;
    height: 50px;
    background-color: tomato;

    &:hover {
        background-color: blue;
    }
`;

const Myheader = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    img {
        width: 80px;
        margin: 40px;
        margin-right: 20px;
    }
`;

const Menu = styled.div`
    height: 65px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 11px;
    span {
        margin: 5px 8px;
        cursor: pointer;

        &:hover {
            color: gray;
        }
    }
`;

const Myetc = styled.div`
    height: 65px;
    display: flex;
    align-items: center;
    color: white;
    margin: 5px 40px;
    font-size: 15px;

    span {
        font-size: 11px;
        margin: 15px;
    }
`;

const MyWrap = styled.div`
    display: flex;
    align-items: center;
`;

const MyGoBell = styled(GoBell)`
    font-size: 17px;
`;

const MyAnimation = keyframes`
    from {
        transform: rotate( 0deg );
    }
    to {
        transform: rotate( 180deg );
    }
`;

const MyBsFillCaretDownFill = styled(BsFillCaretDownFill)`
    font-size: 11px;
    margin: 30px;
    &:hover {
        animation-name: ${MyAnimation};
        animation-timing-function: ease-in-out;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }
`;

export default function Header() {
    return (
        <>
            <Myheader>
                <MyWrap>
                    <img src="./netflixLogo.JPG"></img>
                    <Menu>
                        <span>홈</span>
                        <span>TV 프로그램</span>
                        <span>영화</span>
                        <span>NEW! 요즘 대세 콘텐츠</span>
                        <span>내가 찜한 콘텐츠</span>
                    </Menu>
                </MyWrap>
                <Myetc>
                    <FaSearch></FaSearch>
                    <span>키즈</span>
                    <MyGoBell></MyGoBell>
                    <MyBsFillCaretDownFill></MyBsFillCaretDownFill>
                </Myetc>
            </Myheader>
        </>
    );
}
