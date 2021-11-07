import { ImFacebook2, ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";
import styled from "styled-components";

const Background = styled.div`
    background-color: #141414;
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 100;
    margin-top: -1px;
`;

const BackIcons = styled.div`
    width: 750px;
    height: 50px;
    display: flex;
    align-items: center;
`;

const Facebook = styled(ImFacebook2)`
    color: gray;
    font-size: 20px;
    margin: 10px;
`;

const Instagram = styled(ImInstagram)`
    color: gray;
    font-size: 20px;
    margin: 10px;
`;

const Twitter = styled(ImTwitter)`
    color: gray;
    font-size: 23px;
    margin: 10px;
`;

const Youtube = styled(ImYoutube)`
    color: gray;
    font-size: 26px;
    margin: 10px;
`;

const Menulist = styled.div`
    width: 750px;
    height: 130px;

    span {
        cursor: pointer;
        font-size: 10.5px;
        color: gray;
        display: inline-block;
        width: 167px;
        margin: 10px 10px;
    }
`;

const Servicediv = styled.div`
    width: 750px;
    height: 50px;

    button {
        background-color: #141414;
        font-size: 11px;
        padding: 5px;
        margin: 10px;
        color: gray;
        border: 1px solid gray;
        cursor: pointer;
        &:hover {
            color: white;
        }
    }
`;

const CompanyInfo = styled.div`
    width: 750px;
    height: 130px;

    p {
        font-size: 8px;
        color: gray;
        margin: 5px 10px;
    }
`;

export default function Footer() {
    return (
        <Background>
            <BackIcons>
                <Facebook></Facebook>
                <Instagram></Instagram>
                <Twitter></Twitter>
                <Youtube></Youtube>
            </BackIcons>
            <Menulist>
                <span>자막 및 음성</span>
                <span>음성 지원</span>
                <span>고객 센터</span>
                <span>기프트카드</span>
                <span>미디어 센터</span>
                <span>투자 정보(IR)</span>
                <span>입사 정보</span>
                <span>이용 약관</span>
                <span>개인 정보</span>
                <span>법적 고지</span>
                <span>쿠키 설정</span>
                <span>회사 정보</span>
                <span>문의하기</span>
            </Menulist>
            <Servicediv>
                <button>서비스 코드</button>
            </Servicediv>
            <CompanyInfo>
                <p>
                    넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호
                    전화번호: 080-001-9587
                </p>
                <p>대표: 레지널드 숀 톰프슨</p>
                <p>이메일 주소: korea@netflix.com</p>
                <p>
                    주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호
                    03161
                </p>
                <p>사업자등록번호: 165-87-00119</p>
                <p>클라우드 호스팅: Amazon Web Services Inc.</p>
                <p>공정거래위원회 웹사이트</p>
                <p>{"{c31ff6a2-5644-47f0-92c6-843a5bbe737d}"}</p>
            </CompanyInfo>
        </Background>
    );
}
