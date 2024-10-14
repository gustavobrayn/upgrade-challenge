import React, { useState } from 'react';
import { Heading, Wrapper, Content } from './styles';
import { Spacer, Input, Button } from '../../common/components';
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
    <Wrapper>
      <Spacer y="md" />
      <Content>
        <header>
          <Heading>Sign up</Heading>
        </header>
        <form onSubmit={onSubmit}>
          <Spacer y="md" />
          <Input
            placeholder="First name"
            name="name"
            onChange={handleChange}
            value={data.name}
            required
          />
          <Spacer y="xs" />
          <Input
            placeholder="E-mail"
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
          />
          <Spacer y="xs" />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <Spacer y="lg" />
          <Button type="submit">Next</Button>
        </form>
      </Content>
    </Wrapper>
  );
}
