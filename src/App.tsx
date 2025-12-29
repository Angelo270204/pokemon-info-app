import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Styles
import { GlobalStyle } from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/theme';
import {
  AppContainer,
  Container,
  Header,
  PokeballIcon,
  Title,
  Subtitle,
  Footer,
} from './components/Layout/Layout.styles';

// Components
import { SearchForm } from './components/SearchForm/SearchForm';
import { PokemonCard } from './components/PokemonCard/PokemonCard';
import { ThemeToggle, Loading, ErrorDisplay } from './components/UI';

// Hooks
import { useTheme } from './hooks/useTheme';
import { usePokemonSearch } from './hooks/usePokemonSearch';
import { usePokemonSuggestions } from './hooks/usePokemonSuggestions';

const App = () => {
  const [pokemonName, setPokemonName] = useState<string>('');
  const { isDarkMode, toggleTheme } = useTheme();
  const { pokemonData, movesData, loading, error, searchPokemon } = usePokemonSearch();
  const {
    suggestions,
    showSuggestions,
    filterSuggestions,
    hideSuggestions,
    clearSuggestions,
  } = usePokemonSuggestions();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPokemonName(value);
    filterSuggestions(value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    clearSuggestions();
    searchPokemon(pokemonName);
  };

  const handleSuggestionClick = (name: string) => {
    setPokemonName(name);
    clearSuggestions();
    searchPokemon(name);
  };

  const handleInputFocus = () => {
    if (pokemonName.trim()) {
      filterSuggestions(pokemonName);
    }
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />

        <Container>
          <Header>
            <PokeballIcon>⚡</PokeballIcon>
            <Title>Pokédex</Title>
            <Subtitle>Busca información de tu Pokémon favorito</Subtitle>
          </Header>

          <SearchForm
            pokemonName={pokemonName}
            loading={loading}
            suggestions={suggestions}
            showSuggestions={showSuggestions}
            onInputChange={handleInputChange}
            onSubmit={handleSearch}
            onSuggestionClick={handleSuggestionClick}
            onInputFocus={handleInputFocus}
            onInputBlur={hideSuggestions}
          />

          {loading && <Loading />}
          {error && <ErrorDisplay message={error} />}
          {pokemonData && <PokemonCard pokemon={pokemonData} moves={movesData} />}
        </Container>

        <Footer>
          Datos obtenidos de{' '}
          <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer">
            PokéAPI
          </a>
        </Footer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
