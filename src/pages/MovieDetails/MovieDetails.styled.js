import styled from 'styled-components';



export const Button = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  font-weight: 500;
  &:hover {
    background-color: pink;
  }
`;

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
`;

export const MovieContainer = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: solid 1px grey;
`;
export const MovieInfo = styled.div`
  margin-left: 20px;
`;

export const InfoBox = styled.div`
  padding: 20px;
  border-bottom: solid 1px grey;
`;

