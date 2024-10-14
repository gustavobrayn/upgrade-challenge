import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heading, Wrapper, Content, Label, Footer } from './styles';
import {
  Spacer,
  Button,
  Select,
  CheckBox,
  Loading,
} from '../../common/components';
import { useSignUp } from '../../common/contexts';
import { useColorsApi } from '../../common/hooks';
import { capitalize } from '../../common/utils';

export function MoreInfo() {
  const { info, setInfo } = useSignUp();
  const colors = useColorsApi();
  const navigate = useNavigate();
  const [data, setData] = useState({
    color: info.color || '',
    terms: info.terms || false,
  });

  const onClickBack = () => {
    navigate(-1);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setInfo((prev) => ({ ...prev, ...data }));
    navigate('/confirmation');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onTermsChange = () => {
    setData((prev) => ({ ...prev, terms: !prev.terms }));
  };

  if (colors.loading || !colors.data) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Spacer y="md" />
      <Content>
        <header>
          <Heading>Additional Info</Heading>
        </header>
        <form onSubmit={onSubmit}>
          <Spacer y="md" />
          <label htmlFor="color">Favorite color</label>
          <Select
            name="color"
            id="color"
            onChange={handleChange}
            value={data.color}
            required
          >
            <option value="">Select your favorite color</option>
            {colors.data.map((color) => (
              <option key={color} value={color}>
                {capitalize(color)}
              </option>
            ))}
          </Select>
          <Spacer y="xs" />
          <CheckBox
            id="terms"
            name="terms"
            onChange={onTermsChange}
            checked={data.terms}
            required
            label={
              <Label>
                I agree to{' '}
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </Label>
            }
          />
          <Spacer y="lg" />
          <Footer>
            <Button variant="outlined" type="button" onClick={onClickBack}>
              Back
            </Button>
            <Button type="submit">Next</Button>
          </Footer>
        </form>
      </Content>
    </Wrapper>
  );
}
