import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 5rem;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radius.sm};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonPrimary = styled(BaseButton)`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.accent};
  transition: opacity ease 500ms;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const ButtonOutlined = styled(BaseButton)`
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: all ease 500ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;
