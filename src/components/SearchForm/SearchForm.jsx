import PropTypes from 'prop-types';
import { FormSearch } from './SearchBar.styled';


const SearchForm =({onSubmit, children})=>(
    <FormSearch onSubmit={onSubmit}>{children}</FormSearch>
);

export default SearchForm;

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };