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

export function ErrorPage() {
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
          <Heading>Error</Heading>
        </header>
        <Spacer y="md" />
        <Text>Uh oh, something went wrong. Please try again later.</Text>
        <Spacer y="lg" />
        <Button onClick={onClickRestart}>Restart</Button>
      </Card>
    </PageWrapper>
  );
}
