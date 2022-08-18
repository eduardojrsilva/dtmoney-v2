import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

const SearchForm: React.FC = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};

export default SearchForm;