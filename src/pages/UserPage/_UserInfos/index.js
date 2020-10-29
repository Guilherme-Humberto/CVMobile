import React from 'react';
import { Button, AsyncStorage } from 'react-native';

import { 
    Container,
    TitleInfos
} from './styles';

const UserInfos = () => {
  async function handleLogout () {
    await AsyncStorage.removeItem("infos")
  }
  return (
      <>
        <Container>
          <TitleInfos>Perfil do usuário</TitleInfos>
          <Button title="Sair" onPress={handleLogout}/>
        </Container>
      </>
  );
}

export default UserInfos;