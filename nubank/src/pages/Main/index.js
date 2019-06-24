import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles'

import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'

export default function Main(){

  return( 
    <Container>

      <Header />

      <Content>
        <Menu />
        <Card>

          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>

          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$197.611,65</Description>
          </CardContent>
          
          <CardFooter>
            <Annotation>
                Transferencia de R$190.000,00 recebida de Saiph Sistemas Empresariais Ltda às 06:00h
            </Annotation>
          </CardFooter>

        </Card>

      </Content>

      <Tabs />
    </Container>
  )
}
