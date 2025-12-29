import React from 'react';
import { LoadingContainer, LoadingPokeball, LoadingMessage } from './UI.styles';

export const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingPokeball>⚪</LoadingPokeball>
      <LoadingMessage>Buscando Pokémon...</LoadingMessage>
    </LoadingContainer>
  );
};
