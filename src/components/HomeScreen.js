import { Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ConsumoApi } from './ConsumoApi';

export const HomeScreen = ({ navigation, route }) => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        if (route.params?.pokemon) {
            setSelectedPokemon(route.params.pokemon);
        }
    }, [route.params?.pokemon]);


    const agregarPokemon = (pokemon) => {
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`;
        navigation.navigate('View', { pokemon: pokemon, imageUrl: imageUrl });
    };

    return (
        <View style={{ flex: 1 }}>
            <ConsumoApi agregarPokemon={agregarPokemon} />
            {selectedPokemon && (
                <Text style={{ margin: 10 }}>Pokemon seleccionado: {selectedPokemon.name}</Text>
            )}
        </View>
    );
  };