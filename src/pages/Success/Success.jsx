import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Wrapper, Content } from './styles';
import { Spacer, Button } from '../../common/components';
import { useSignUp } from '../../common/contexts';

export function Success() {
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
          <Heading>Success!</Heading>
        </header>
        <Spacer y="md" />
        <p>You should receive a confirmation email soon.</p>
        <Spacer y="lg" />
        <Button onClick={onClickRestart}>Restart</Button>
      </Content>
    </Wrapper>
  );
}
