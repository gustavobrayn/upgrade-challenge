import styled from 'styled-components';

export const BaseSpacer = styled.div`
  height: ${({ theme, y }) => theme.spacing[y]};
`;
