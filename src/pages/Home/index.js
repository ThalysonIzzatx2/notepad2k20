import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Markdown from 'react-native-markdown-display';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header';
import { requestLoadNotes, deleteNote } from '../../store/modules/notes/actions';

import { Container, Card, Info, Title, Options, Date, Button } from './styles';

export default function Home() {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const notes = useSelector(state => state.notes.data);
    const loading = useSelector(state => state.notes.loading);
    const dispatch = useDispatch();

    function loadData() {
        dispatch(requestLoadNotes());
    }

    function deleteData(slug) {
        dispatch(deleteNote(slug));
    }
    useEffect(() => {
        loadData()
    }, [])
    useEffect(() => {
        loadData()
    }, [loading])

    return(
        <Container>
            <Header />
                <FlatList
                    data={notes}
                    keyExtractor={(item) => item?.id}
                    onEndReachedThreshold={30}
                    refreshing={refreshing}
                    onRefresh={loadData}
                    renderItem={( {item} ) => {
                return(
                    <TouchableOpacity onPress={() => { navigation.navigate("Note", {item})}}>
                        <Card>
                            <Info >
                                <Title>{item?.title}</Title>
                                <Markdown>{item?.note}</Markdown>
                            </Info>
                            <View>
                                <Options>
                                    <TouchableOpacity>
                                        <Icon name="star-border" size={25} color="#343A54" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => deleteData(item.slug)}>
                                        <Icon name="delete" size={25} color="#343A54" />
                                    </TouchableOpacity>
                                    
                                </Options>
                                <Date>
                                    {item?.date}
                                </Date>
                            </View>
                        </Card>
                    </TouchableOpacity>
                    )
                }}
                />
            <Button onPress={() => navigation.navigate('New', {item: null})}>
                <Icon name="add" size={25} color="#FFF" />
            </Button>
        </Container>
    );
}