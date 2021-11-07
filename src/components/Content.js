import styled, { keyframes } from "styled-components";

const Myvideo = styled.iframe`
    width: 100%;
    border: none;
`;

const MyDiv = styled.div`
    height: fit-content;
`;

export default function Content() {
    return (
        <>
            <MyDiv>
                <Myvideo
                    height="685"
                    src="https://www.youtube.com/embed/Z1ZQMpp4BdU?controls=0&amp;autoplay=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></Myvideo>
            </MyDiv>
        </>
    );
}
