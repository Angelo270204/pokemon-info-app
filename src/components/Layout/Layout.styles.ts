import styled, { keyframes } from 'styled-components';

// Animaciones
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

export const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

// Componentes de layout
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.background};
  padding: 2rem 1rem;
  transition: background 0.3s ease;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.containerBg};
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px ${({ theme }) => theme.shadow};
  max-width: 480px;
  width: 100%;
  animation: ${fadeIn} 0.5s ease;
  backdrop-filter: blur(10px);

  @media (max-width: 520px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const PokeballIcon = styled.span`
  font-size: 3rem;
  display: block;
  margin-bottom: 0.5rem;
  animation: ${pulse} 2s infinite;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;

  a {
    color: white;
    text-decoration: underline;
  }
`;
