import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';
import { createNoteRequest} from '../../store/modules/notes/actions';

import { Container, TitleInput, NoteInput, Card, DateText } from './styles';

export default function New({ route }) {
    const item = route.params.item !== null ? route.params.item : null;
    const navigation = useNavigation();
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today = new Date();
    const formatedDate = months[today.getMonth()] + " " + today.getDay() + ", " + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes();
    const [title, setTitle] = useState();
    const [note, setNote] = useState();
    const [edit, setEdit] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(item)
        if (item !== null) {
            setTitle(item.title);
            setNote(item.note);
            setEdit(false);
        }else {
        }
    }, [])

    function saveNote() {
        try {

            const slug = "@" + title.replace(' ', '-'); 
            
            const data = {
                id: parseInt(Math.random() * (10000 - 1) + 1),
                slug,
                title,
                note,
                date: formatedDate,
            };
            dispatch(createNoteRequest(slug.toString(), data));
            navigation.navigate('Home');
          } catch (e) {
            alert(e)
          }
    }

    return(
        <Container>
            <SubHeader />
            <Card>
                <TitleInput editable={edit} onChangeText={(text) => { setTitle(text) }} value={title} placeholder="Title" />
                <NoteInput onChangeText={(text) => { setNote(text) }} value={note} multiline placeholder="Write a new note (Support markdown)" />

            </Card>
            <DateText>{formatedDate}</DateText>
            <Footer call={saveNote} n={true} />
        </Container>
    );
}