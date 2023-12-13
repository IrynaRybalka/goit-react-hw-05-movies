import styled from 'styled-components';


export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 0;
  margin-right: 4px;
  margin-left: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    transform: scale(1.2);
  }
`;

export const FormSearch = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;