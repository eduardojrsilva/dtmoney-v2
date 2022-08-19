import { useForm } from "react-hook-form";
import * as Zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from "phosphor-react";

import { SearchFormContainer } from "./styles";

const searchFormSchema = Zod.object({
  query: Zod.string(),
});

type SearchFormInputs = Zod.infer<typeof searchFormSchema>;

const SearchForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};

export default SearchForm;