import { useState, useEffect, useRef } from 'react';
import type { PokemonSuggestion } from '../types/pokemon';

const POKEMON_LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=1025';

export const usePokemonSuggestions = () => {
  const [allPokemon, setAllPokemon] = useState<PokemonSuggestion[]>([]);
  const [suggestions, setSuggestions] = useState<PokemonSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cacheRef = useRef<PokemonSuggestion[]>([]);

  // Cargar lista de Pokémon al montar el componente
  useEffect(() => {
    const fetchPokemonList = async () => {
      // Si ya tenemos la lista en caché, usarla
      if (cacheRef.current.length > 0) {
        setAllPokemon(cacheRef.current);
        return;
      }

      try {
        const response = await fetch(POKEMON_LIST_URL);
        const data = await response.json();
        const pokemonList: PokemonSuggestion[] = data.results.map(
          (pokemon: { name: string; url: string }, index: number) => ({
            name: pokemon.name,
            id: index + 1,
          })
        );
        cacheRef.current = pokemonList;
        setAllPokemon(pokemonList);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  const filterSuggestions = (query: string) => {
    if (!query.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = allPokemon
      .filter(
        (pokemon) =>
          pokemon.name.toLowerCase().startsWith(query.toLowerCase()) ||
          pokemon.id.toString() === query
      )
      .slice(0, 8);

    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  };

  const hideSuggestions = () => {
    // Pequeño delay para permitir que el click en una sugerencia se registre
    setTimeout(() => setShowSuggestions(false), 150);
  };

  const clearSuggestions = () => {
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return {
    suggestions,
    showSuggestions,
    filterSuggestions,
    hideSuggestions,
    clearSuggestions,
  };
};
