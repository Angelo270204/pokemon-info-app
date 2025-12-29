import React from 'react';
import type { PokemonData, MoveData } from '../../types/pokemon';
import { translateType, translateStat, translateMove } from '../../utils/translations';
import { getTypeColor } from '../../utils/constants';
import {
  PokemonCardContainer,
  PokemonId,
  PokemonImageWrapper,
  PokemonImage,
  PokemonName,
  PokemonTypes,
  TypeBadge,
  BasicStatsContainer,
  BasicStatItem,
  BasicStatLabel,
  BasicStatValue,
  SectionTitle,
  StatsGrid,
  StatBar,
  StatName,
  StatBarContainer,
  StatBarFill,
  StatNumber,
  MovesGrid,
  MoveBadge,
  MoveName,
  MoveType,
  MoveStats,
} from './PokemonCard.styles';

interface PokemonCardProps {
  pokemon: PokemonData;
  moves: MoveData[];
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, moves }) => {
  return (
    <PokemonCardContainer>
      <PokemonId>#{String(pokemon.id).padStart(3, '0')}</PokemonId>
      <PokemonImageWrapper>
        <PokemonImage
          src={
            pokemon.sprites.other['official-artwork'].front_default ||
            pokemon.sprites.front_default
          }
          alt={pokemon.name}
        />
      </PokemonImageWrapper>
      <PokemonName>{pokemon.name}</PokemonName>

      <PokemonTypes>
        {pokemon.types.map((typeInfo, index) => (
          <TypeBadge key={index} $color={getTypeColor(typeInfo.type.name)}>
            {translateType(typeInfo.type.name)}
          </TypeBadge>
        ))}
      </PokemonTypes>

      <BasicStatsContainer>
        <BasicStatItem>
          <BasicStatLabel>Altura</BasicStatLabel>
          <BasicStatValue>{(pokemon.height / 10).toFixed(1)} m</BasicStatValue>
        </BasicStatItem>
        <BasicStatItem>
          <BasicStatLabel>Peso</BasicStatLabel>
          <BasicStatValue>{(pokemon.weight / 10).toFixed(1)} kg</BasicStatValue>
        </BasicStatItem>
      </BasicStatsContainer>

      <SectionTitle>📊 Estadísticas Base</SectionTitle>
      <StatsGrid>
        {pokemon.stats.map((stat, index) => (
          <StatBar key={index}>
            <StatName>{translateStat(stat.stat.name)}</StatName>
            <StatBarContainer>
              <StatBarFill
                $width={Math.min(stat.base_stat, 150)}
                $value={stat.base_stat}
              />
            </StatBarContainer>
            <StatNumber>{stat.base_stat}</StatNumber>
          </StatBar>
        ))}
      </StatsGrid>

      <SectionTitle>⚔️ Movimientos</SectionTitle>
      <MovesGrid>
        {moves.map((move, index) => (
          <MoveBadge key={index} $color={getTypeColor(move.type.name)}>
            <MoveName>{translateMove(move.name)}</MoveName>
            <MoveType $color={getTypeColor(move.type.name)}>
              {translateType(move.type.name)}
            </MoveType>
            <MoveStats>
              {move.power ? `Poder: ${move.power}` : 'Estado'} | PP: {move.pp}
            </MoveStats>
          </MoveBadge>
        ))}
      </MovesGrid>
    </PokemonCardContainer>
  );
};
