import styled from 'styled-components';

export const BaseCheckBox = styled.input`
  margin-right: ${({ theme }) => theme.spacing.xs};
  border-color: ${({ theme }) => theme.colors.secondaryDark};
`;
