import React from 'react';

import { 
  Container,
  TitleInst,
  DescInst,
  ImageInst,
  ButtonInst,
  TextButtonInst
 } from './styles';

 import imgInst from '../../../../assets/imgs/imgInst.png'

function Institutions () {
  return (
      <>
        <Container>
            <TitleInst>Instituições</TitleInst>
            <DescInst>
              Conheças os hemocentros que são parceiros do Conectando Vidas. Ou
              junte-se a nós e ajude-nos a levar a doação de sangue a cada vez
              mais áreas.
            </DescInst>
            <ImageInst source={imgInst} alt="imagem instituições"/>
            <ButtonInst>
              <TextButtonInst>
                Conheça nossos parceiros
              </TextButtonInst>
            </ButtonInst>
        </Container>
      </>
  );
}

export default Institutions;