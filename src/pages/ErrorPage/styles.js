import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;

  flex-direction: column;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.sm};
  padding-right: ${({ theme }) => theme.spacing.sm};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.headingSizes.h1};
  color: ${({ theme }) => theme.colors.text};
`;

export const List = styled.ul`
  margin-left: ${({ theme }) => theme.spacing.md};
`;

export const ListItem = styled.li`
  font-size: ${({ theme }) => theme.font.bodySizes.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;
