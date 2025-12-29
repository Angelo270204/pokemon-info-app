import styled from 'styled-components';
import { spin, fadeIn } from '../Layout/Layout.styles';

// Theme Toggle
export const ThemeToggleButton = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.containerBg};
  box-shadow: 0 4px 15px ${({ theme }) => theme.shadow};
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 100;

  &:hover {
    transform: scale(1.1) rotate(15deg);
  }
`;

// Loading
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const LoadingPokeball = styled.span`
  font-size: 3rem;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingMessage = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
  margin-top: 1rem;
`;

// Error
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  animation: ${fadeIn} 0.3s ease;
`;

export const ErrorIcon = styled.span`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

export const ErrorMessage = styled.p`
  color: #e53e3e;
  font-size: 1rem;
  text-align: center;
`;
