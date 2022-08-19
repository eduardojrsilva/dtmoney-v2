import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import NewTransactionModal from '../NewTransactionModal'
import logoImg from '../../assets/logo.svg'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
