import React from 'react';
import type { PokemonSuggestion } from '../../types/pokemon';
import {
  Form,
  InputContainer,
  InputWrapper,
  SearchIconSpan,
  Input,
  SuggestionsDropdown,
  SuggestionItem,
  SuggestionId,
  SuggestionName,
  Button,
  Spinner,
} from './SearchForm.styles';

interface SearchFormProps {
  pokemonName: string;
  loading: boolean;
  suggestions: PokemonSuggestion[];
  showSuggestions: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSuggestionClick: (name: string) => void;
  onInputFocus: () => void;
  onInputBlur: () => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  pokemonName,
  loading,
  suggestions,
  showSuggestions,
  onInputChange,
  onSubmit,
  onSuggestionClick,
  onInputFocus,
  onInputBlur,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <InputContainer>
        <InputWrapper>
          <SearchIconSpan>🔍</SearchIconSpan>
          <Input
            type="text"
            value={pokemonName}
            onChange={onInputChange}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            placeholder="Ej: Pikachu, Charizard, 25..."
            autoComplete="off"
          />
        </InputWrapper>
        {showSuggestions && suggestions.length > 0 && (
          <SuggestionsDropdown>
            {suggestions.map((pokemon) => (
              <SuggestionItem
                key={pokemon.id}
                onMouseDown={() => onSuggestionClick(pokemon.name)}
              >
                <SuggestionId>#{String(pokemon.id).padStart(3, '0')}</SuggestionId>
                <SuggestionName>{pokemon.name}</SuggestionName>
              </SuggestionItem>
            ))}
          </SuggestionsDropdown>
        )}
      </InputContainer>
      <Button type="submit" disabled={loading}>
        {loading ? <Spinner /> : 'Buscar'}
      </Button>
    </Form>
  );
};
