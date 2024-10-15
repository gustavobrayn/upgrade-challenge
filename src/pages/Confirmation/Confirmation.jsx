import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItem, List, Footer } from './styles';
import {
  Spacer,
  Button,
  Loading,
  PageWrapper,
  Card,
  Heading,
  Text,
} from '../../common/components';
import { useSignUp } from '../../common/contexts';
import { capitalize, hidePassword } from '../../common/utils';
import { useSignUpApi } from '../../common/hooks';

export function Confirmation() {
  const { info } = useSignUp();
  const signUpApi = useSignUpApi();
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (signUpApi.success) {
      return navigate('/success');
    }

    if (signUpApi.error) {
      navigate('/error');
    }
  }, [signUpApi.success, signUpApi.error]);

  const onSubmit = async () => await signUpApi.submit(info);

  if (signUpApi.loading) {
    return <Loading />;
  }

  return (
    <PageWrapper>
      <Card>
        <header>
          <Heading>Confirmation</Heading>
        </header>
        <Spacer y="md" />
        <List>
          <Text as="li">First name: {info.name}</Text>
          <Text as="li">E-mail: {info.email}</Text>
          <Text as="li">Password: {hidePassword(info.password)}</Text>
          <Text as="li">Favorite color: {capitalize(info.color)}</Text>
          <Text as="li">
            Terms and conditions: {info.terms ? 'Agreed' : 'Not agreed'}
          </Text>
        </List>
        <Spacer y="lg" />
        <Footer>
          <Button variant="outlined" onClick={onClickBack}>
            Back
          </Button>
          <Button onClick={onSubmit}>Submit</Button>
        </Footer>
      </Card>
    </PageWrapper>
  );
}
