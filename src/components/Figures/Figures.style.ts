import styled from "styled-components";

export const FiguresContainer = styled.figure`
    max-width: 940px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-inline: auto;
    gap: 20px;
`;

export const Image = styled.img`
    width: 33%;
    max-width: 300px;
    min-width: 260px;
    height: 400px;
    object-fit: cover;
    box-shadow: 0 0 5px #000;
    border-radius: 15px;
`;