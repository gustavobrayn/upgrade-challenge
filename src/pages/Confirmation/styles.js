import styled from 'styled-components';

export const List = styled.ul`
  margin-left: ${({ theme }) => theme.spacing.md};
`;

export const ListItem = styled.li`
  font-size: ${({ theme }) => theme.font.bodySizes.md};
  color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;
