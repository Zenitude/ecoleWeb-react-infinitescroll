import styled from "styled-components";

export const FieldContainer = styled.form`
    width: 100%;
    margin: 0 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Label = styled.label`
    font-size: 1.5rem;
`;

export const Input = styled.input`
    background-color: rgba(0,0,0,0.1);
    border-radius: 15px;
    height: 50px;
    font-size: 1.1rem;
    padding: 0 0 0 15px;
    min-width: 260px;
`;