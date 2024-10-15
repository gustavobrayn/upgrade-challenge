import styled from 'styled-components';

export const BaseSelect = styled.select`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.bodySizes.md};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.secondaryDark};
  outline-color: ${({ theme }) => theme.colors.secondaryDark};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radius.sm};
  border-style: solid;
  border-width: 1px;
`;
