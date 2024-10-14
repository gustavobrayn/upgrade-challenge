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
  } = props;

  return (
    <BaseInput
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      name={name}
      id={id}
      type={type}
      required={required}
    />
  );
}
