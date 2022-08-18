import logoImg from '../../assets/logo.svg';

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;