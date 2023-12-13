import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import { BsSearch } from 'react-icons/bs';
import SearchInput from './SearchInput';
import { ButtonIcon } from './SearchBar.styled';


export const SearchBar =({onSubmit})=>(
<div>
    <SearchForm onSubmit={onSubmit}>
<SearchInput/>
  <ButtonIcon type="submit" aria-label="search button">
    <BsSearch/>
  </ButtonIcon>
  </SearchForm>
</div>
);

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };



