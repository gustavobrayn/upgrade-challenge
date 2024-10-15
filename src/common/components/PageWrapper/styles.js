import styled from 'styled-components';

export const BasePageWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.sm};
  padding-right: ${({ theme }) => theme.spacing.sm};
`;
