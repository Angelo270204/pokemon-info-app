import { useState } from 'react';
import type { PokemonData, MoveData } from '../types/pokemon';

export const usePokemonSearch = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [movesData, setMovesData] = useState<MoveData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchPokemon = async (name: string) => {
    if (!name.trim()) return;

    setLoading(true);
    setError(null);
    setPokemonData(null);
    setMovesData([]);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`
      );
      if (!response.ok) {
        throw new Error('¡Pokémon no encontrado! Verifica el nombre e intenta de nuevo.');
      }
      const data: PokemonData = await response.json();
      setPokemonData(data);

      // Obtener información de los primeros 6 movimientos
      const movesToFetch = data.moves.slice(0, 6);
      const movePromises = movesToFetch.map(async (moveInfo) => {
        try {
          const moveResponse = await fetch(moveInfo.move.url);
          const moveData = await moveResponse.json();
          return {
            name: moveData.name,
            type: moveData.type,
            power: moveData.power,
            accuracy: moveData.accuracy,
            pp: moveData.pp,
          } as MoveData;
        } catch {
          return null;
        }
      });

      const moves = await Promise.all(movePromises);
      setMovesData(moves.filter((m): m is MoveData => m !== null));
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return {
    pokemonData,
    movesData,
    loading,
    error,
    searchPokemon,
  };
};
