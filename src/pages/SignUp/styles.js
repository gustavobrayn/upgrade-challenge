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
`;
