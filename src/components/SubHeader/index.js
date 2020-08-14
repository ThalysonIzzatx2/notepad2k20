import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

const SubHeader = () => {
    const navigation = useNavigation();
    
    return (

        <Container>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="keyboard-arrow-left" size={35} color="#343A54" />
            </TouchableOpacity>
            
        </Container>

    );
};

export default SubHeader;