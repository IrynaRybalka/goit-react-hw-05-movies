import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieSearchList = styled.ul`
 display: flex;
  flex-direction: column;
row-gap: 10px;
`;

export const MovieSearchLink = styled(Link)`
&:hover {
    border-radius:3px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
};
text-decoration:none;
padding: 2px;`;