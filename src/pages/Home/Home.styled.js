import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
margin-top: 40px;
margin-left:20px;`;

// export const MovieItem = styled.li`
// list-style: none;`;

export const MovieList = styled.ul`
 display: flex;
  flex-direction: column;
row-gap: 10px;
`;

export const MovieLink = styled(Link)`
&:hover {
    border-radius:3px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
};
text-decoration:none;
padding: 2px;`;