import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 16px;
`;

export const Header = styled.header`
  padding: 20px 0;
  border-bottom: solid 1px grey;

  margin-bottom: 20px;
`;

export const LinkNav = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    background-color: orangered;
  }
`;