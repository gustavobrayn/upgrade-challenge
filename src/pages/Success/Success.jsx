import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Spacer,
  Button,
  PageWrapper,
  Card,
  Heading,
  Text,
} from '../../common/components';
import { useSignUp } from '../../common/contexts';

export function Success() {
  const { setInfo } = useSignUp();
  const navigate = useNavigate();

  const onClickRestart = () => {
    setInfo({ name: '', email: '', password: '', color: '', terms: false });
    navigate('/', { replace: true });
  };

  return (
    <PageWrapper>
      <Card>
        <header>
          <Heading>Success!</Heading>
        </header>
        <Spacer y="md" />
        <Text>You should receive a confirmation email soon.</Text>
        <Spacer y="lg" />
        <Button onClick={onClickRestart}>Restart</Button>
      </Card>
    </PageWrapper>
  );
}
