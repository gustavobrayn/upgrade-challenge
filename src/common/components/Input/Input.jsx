import { Text } from '../Text';
import { BaseInput } from './styles';

export function Input(props) {
  const {
    onChange,
    value,
    placeholder,
    name,
    id,
    type,
    required = false,
    label,
  } = props;

  return (
    <>
      {label ? (
        <Text as="label" htmlFor={id}>
          {label}
        </Text>
      ) : null}
      <BaseInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        id={id}
        type={type}
        required={required}
      />
    </>
  );
}
