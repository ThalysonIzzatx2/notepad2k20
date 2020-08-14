import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

const Footer = ({n, call, remove = {} }) => {
  return (
    <Container>
        <TouchableOpacity onPress={() => call()}>
            <Icon name={n ? "check" : "edit"} size={25} color="#343A54" />
        </TouchableOpacity>
        {!n && <>
                    <TouchableOpacity>
                    <Icon name="star-border" size={25} color="#343A54" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="share" size={25} color="#343A54" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => remove()}>
                    <Icon name="delete" size={25} color="#343A54" />
                </TouchableOpacity>
        </>}
    </Container>
  );
}

export default Footer;
