// Tipos para la API de Pokémon

export interface PokemonData {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
}

export interface MoveData {
  name: string;
  type: {
    name: string;
  };
  power: number | null;
  accuracy: number | null;
  pp: number;
}

export interface PokemonSuggestion {
  name: string;
  id: number;
}

export interface PokemonListResponse {
  results: Array<{
    name: string;
    url: string;
  }>;
}
