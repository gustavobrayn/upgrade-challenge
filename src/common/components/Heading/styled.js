import styled from 'styled-components';

export const BaseHeading = styled.h1`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme, size }) => theme.font.headingSizes[size]};
  font-weight: ${({ theme, weight }) => theme.font.weight[weight]};
  color: ${({ color }) => color};
`;
