import styled from 'styled-components';

export const BaseInput = styled.input`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.secondaryDark};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radius.sm};
  border-style: solid;
  border-width: 1px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutralDark};
    font-size: ${({ theme }) => theme.font.bodySizes.md};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;
