import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Wrapper, Content, ListItem, List, Footer } from './styles';
import { Spacer, Button, Loading } from '../../common/components';
import { useSignUp } from '../../common/contexts';

export function ErrorPage() {
  const { setInfo } = useSignUp();
  const navigate = useNavigate();

  const onClickRestart = () => {
    setInfo({ name: '', email: '', password: '', color: '', terms: '' });
    navigate('/', { replace: true });
  };

  return (
    <Wrapper>
      <Spacer y="md" />
      <Content>
        <header>
          <Heading>Error</Heading>
        </header>
        <Spacer y="md" />
        <p>Uh oh, something went wrong. Please try again later.</p>
        <Spacer y="lg" />
        <Button onClick={onClickRestart}>Restart</Button>
      </Content>
    </Wrapper>
  );
}
