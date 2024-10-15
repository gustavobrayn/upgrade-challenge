import styled from 'styled-components';

export const BaseText = styled.span`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme, size }) => theme.font.bodySizes[size]};
  font-weight: ${({ theme, weight }) => theme.font.weight[weight]};
  color: ${({ color }) => color};
`;
