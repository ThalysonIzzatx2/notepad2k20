import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title } from './styles';

const Header = () => (
    <Container>
        <Icon name="sort" size={30} color="#343A54" />
        <Title>MyNotes</Title>
        <Icon name="search" size={30} color="#343A54" />
    </Container>
);

export default Header;