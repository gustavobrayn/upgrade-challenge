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

export function NotFound() {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate('/', { replace: true });
  };

  return (
    <PageWrapper>
      <Card>
        <header>
          <Heading>Page not found</Heading>
        </header>
        <Spacer y="md" />
        <Text>Sorry, the page you're looking for could not be found.</Text>
        <Spacer y="lg" />
        <Button onClick={onClickBack}>Back</Button>
      </Card>
    </PageWrapper>
  );
}
