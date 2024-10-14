import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Wrapper, Content, ListItem, List, Footer } from './styles';
import { Spacer, Button, Loading } from '../../common/components';
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
    console.log(signUpApi);
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
    <Wrapper>
      <Spacer y="md" />
      <Content>
        <header>
          <Heading>Confirmation</Heading>
        </header>
        <Spacer y="md" />
        <List>
          <ListItem>First name: {info.name}</ListItem>
          <ListItem>E-mail: {info.email}</ListItem>
          <ListItem>Password: {hidePassword(info.password)}</ListItem>
          <ListItem>Favorite color: {capitalize(info.color)}</ListItem>
          <ListItem>
            Terms and conditions: {info.terms ? 'Agreed' : 'Not agreed'}
          </ListItem>
        </List>
        <Spacer y="lg" />
        <Footer>
          <Button variant="outlined" onClick={onClickBack}>
            Back
          </Button>
          <Button onClick={onSubmit}>Submit</Button>
        </Footer>
      </Content>
    </Wrapper>
  );
}
