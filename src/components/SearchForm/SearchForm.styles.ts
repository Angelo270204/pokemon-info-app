import styled from 'styled-components';
import { spin } from '../Layout/Layout.styles';

export const Form = styled.form`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  margin-bottom: 1.5rem;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  flex: 1;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchIconSpan = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  opacity: 0.6;
  z-index: 1;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 2.75rem;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.inputBorder};
  border-radius: 12px;
  background: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.shadow};
  }
`;

export const SuggestionsDropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.containerBg};
  border: 2px solid ${({ theme }) => theme.inputBorder};
  border-top: none;
  border-radius: 0 0 12px 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 250px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
`;

export const SuggestionItem = styled.li`
  padding: 0.75rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.text};
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.suggestionHover};
  }

  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

export const SuggestionId = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  background: ${({ theme }) => theme.cardBg};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
`;

export const SuggestionName = styled.span`
  text-transform: capitalize;
  font-weight: 500;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${({ theme }) => theme.shadow};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
