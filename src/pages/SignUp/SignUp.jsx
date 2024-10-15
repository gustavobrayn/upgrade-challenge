import React, { useState } from 'react';
import {
  Spacer,
  Input,
  Button,
  Text,
  Heading,
  Card,
  PageWrapper,
} from '../../common/components';
import { useSignUp } from '../../common/contexts';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const { info, setInfo } = useSignUp();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: info.name || '',
    email: info.email || '',
    password: info.password || '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    setInfo(data);
    navigate('/more-info');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <PageWrapper>
      <Card>
        <header>
          <Heading>Sign up</Heading>
        </header>
        <form onSubmit={onSubmit}>
          <Spacer y="md" />
          <Input
            id="name"
            placeholder="e.g. John"
            name="name"
            label="First name"
            onChange={handleChange}
            value={data.name}
            required
          />
          <Spacer y="xs" />
          <Input
            placeholder="e.g. john@doe.com"
            type="email"
            name="email"
            id="email"
            label="E-mail"
            onChange={handleChange}
            value={data.email}
            required
          />
          <Spacer y="xs" />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            label="Password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <Spacer y="lg" />
          <Button type="submit">Next</Button>
        </form>
      </Card>
    </PageWrapper>
  );
}
