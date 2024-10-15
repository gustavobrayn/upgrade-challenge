import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from './styles';
import {
  Spacer,
  Button,
  Select,
  CheckBox,
  Loading,
  PageWrapper,
  Card,
  Heading,
  Text,
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

  const colorsOptions = colors.data.reduce((acc, item) => {
    return [...acc, { value: item, text: capitalize(item) }];
  }, []);

  const options = [
    { value: '', text: 'Select your favorite color' },
    ...colorsOptions,
  ];

  return (
    <PageWrapper>
      <Card>
        <header>
          <Heading>Additional Info</Heading>
        </header>
        <form onSubmit={onSubmit}>
          <Spacer y="md" />
          <Select
            name="color"
            id="color"
            label="Favorite color*"
            onChange={handleChange}
            value={data.color}
            required
            options={options}
          />
          <Spacer y="xs" />
          <CheckBox
            id="terms"
            name="terms"
            onChange={onTermsChange}
            checked={data.terms}
            required
            label={
              <Text>
                I agree to{' '}
                <Link to="/terms-and-conditions">Terms and Conditions</Link>*
              </Text>
            }
          />
          <Spacer y="xs" />
          <Text size="sm">All fields with * are required</Text>
          <Spacer y="lg" />
          <Footer>
            <Button variant="outlined" type="button" onClick={onClickBack}>
              Back
            </Button>
            <Button type="submit">Next</Button>
          </Footer>
        </form>
      </Card>
    </PageWrapper>
  );
}
