import React from 'react'
import QRCode from 'react-native-qrcode'
import Icon from 'react-native-vector-icons/MaterialIcons'


import { Container, Code, Nav, NavItem, NavText, SignOutButton,SignOutButtonText } from './styles'
import { NavigationEvents } from 'react-navigation';

export default function Menu(){
    return(
        <Container> 
            <Code>
                <QRCode
                    value="nubank.com.br"
                    size={80}
                    fgColor="#FFF"
                    bgColor="#8B10AE"
                />
            </Code>
            
            <Nav>
                <NavItem>
                    <Icon name="help-outline" ize={20} color="#FFF"/>
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF"/>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF"/>
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF"/>
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>

        </Container>
    )
}