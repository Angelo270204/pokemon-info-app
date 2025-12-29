import React from 'react';
import { ErrorContainer, ErrorIcon, ErrorMessage } from './UI.styles';

interface ErrorDisplayProps {
  message: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorIcon>😢</ErrorIcon>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
};
