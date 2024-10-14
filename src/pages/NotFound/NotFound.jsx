import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Wrapper, Content } from './styles';
import { Spacer, Button } from '../../common/components';

export function NotFound() {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate('/', { replace: true });
  };

  return (
    <Wrapper>
      <Spacer y="md" />
      <Content>
        <header>
          <Heading>Page not found</Heading>
        </header>
        <Spacer y="md" />
        <p>Sorry, the page you're looking for could not be found.</p>
        <Spacer y="lg" />
        <Button onClick={onClickBack}>Back</Button>
      </Content>
    </Wrapper>
  );
}
