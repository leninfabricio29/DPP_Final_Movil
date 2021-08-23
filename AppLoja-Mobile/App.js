import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View, Button, Image } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }
    async getMovies() {
        try {
            const response = await fetch('http://localhost:4000/api/pelicula');
            const json = await response.json();
            this.setState({ data: json });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <View style={{ padding: 24, backgroundColor: 'black' }}>
                {isLoading ? <ActivityIndicator /> : (
                    <View>
                        <Text style={{ color: '#fff', fontSize: 25, marginLeft: 58, }}>Lista de peliculas </Text>
                        <Text> {'\n'} </Text>
                        <FlatList
                            data={data}
                            keyExtractor={({ id }) => id}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.row}>
                                        Titulo: <Text style={styles.innerText}>{item.titulo}</Text>
                                        Genero: <Text style={styles.innerText}> {item.genero} </Text>
                                        Año: <Text style={styles.innerText}>{item.anio} </Text>
                                        Duracion: <Text style={styles.innerText}>{item.duracion} min</Text>
                                        <br></br>
                                        <Button
                                            title="Ver pelicula"
                                            color="rgb(104, 11, 11)"
                                        />
                                    </View>
                                    <br></br>

                                </View>

                            )}
                        />
                    </View>
                )}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
    },
    box: {
        width: 50,
        height: 50,
    },
    row: {
        borderWidth: 2,
        padding: 10,
        marginLeft: 85,
        width: 150,
        height: 250,
        backgroundColor: 'black',
        borderRadius: 4,
        borderColor: 'gray',
        color: '#fff'

    },
    buttom: {
        width: 5,
        height: 15,
        backgroundColor: 'red',
    },
    innerText: {
        color: '#fff'
    }


})
