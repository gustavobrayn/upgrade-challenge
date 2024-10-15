import { Text } from '../Text';
import { BaseSelect } from './styles';

export function Select(props) {
  const { options, name, id, onChange, value, required = false, label } = props;

  return (
    <>
      {label ? (
        <Text as="label" htmlFor={id}>
          {label}
        </Text>
      ) : null}
      <BaseSelect
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        required={required}
      >
        {options.map((option) => (
          <option key={option.text + option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </BaseSelect>
    </>
  );
}
