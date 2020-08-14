import React from 'react';
import Markdown from 'react-native-markdown-display';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';
import { deleteNote } from '../../store/modules/notes/actions';

import { Container, Title, Card, Date, Mark } from './styles';

export default function Note({route }) {
    const { item } = route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    function editNote() {
        navigation.navigate('New', {item})
    }
    function deleteData() {
        dispatch(deleteNote(item.slug));
        navigation.navigate('Home')
    }

    return(
        <Container>
            <SubHeader />
            <Card>
                <Title>{item.title}</Title>
                <Mark>
                    <Markdown>{item.note}</Markdown>
                </Mark>
                
            </Card>
            <Date>{item.date}</Date>
            <Footer call={editNote} n={false} remove={deleteData} />
        </Container>
    );
}