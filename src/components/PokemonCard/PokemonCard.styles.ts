import styled from 'styled-components';
import { fadeIn, float } from '../Layout/Layout.styles';

export const PokemonCardContainer = styled.div`
  width: 100%;
  animation: ${fadeIn} 0.5s ease;
`;

export const PokemonId = styled.span`
  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.5rem;
`;

export const PokemonImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const PokemonImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  animation: ${float} 3s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
`;

export const PokemonName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 1rem;
`;

export const PokemonTypes = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TypeBadge = styled.span<{ $color: string }>`
  background: ${({ $color }) => $color};
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: capitalize;
  box-shadow: 0 2px 8px ${({ $color }) => $color}50;
`;

export const BasicStatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
`;

export const BasicStatItem = styled.div`
  text-align: center;
`;

export const BasicStatLabel = styled.span`
  display: block;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.25rem;
`;

export const BasicStatValue = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;
`;

export const StatsGrid = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const StatBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const StatName = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  width: 85px;
  text-align: right;
`;

export const StatBarContainer = styled.div`
  flex: 1;
  height: 8px;
  background: ${({ theme }) => theme.inputBorder};
  border-radius: 4px;
  overflow: hidden;
`;

export const StatBarFill = styled.div<{ $width: number; $value: number }>`
  height: 100%;
  width: ${({ $width }) => ($width / 150) * 100}%;
  background: ${({ $value }) =>
    $value >= 100
      ? '#48bb78'
      : $value >= 70
      ? '#ecc94b'
      : $value >= 40
      ? '#ed8936'
      : '#e53e3e'};
  border-radius: 4px;
  transition: width 0.5s ease;
`;

export const StatNumber = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  width: 35px;
`;

export const MovesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const MoveBadge = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color}20;
  border: 2px solid ${({ $color }) => $color};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-size: 0.8rem;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 120px;
`;

export const MoveName = styled.span`
  font-weight: 600;
`;

export const MoveType = styled.span<{ $color: string }>`
  font-size: 0.7rem;
  color: ${({ $color }) => $color};
  font-weight: 500;
`;

export const MoveStats = styled.span`
  font-size: 0.65rem;
  color: ${({ theme }) => theme.textSecondary};
`;
