import { BaseSelect } from './styles';

export function Select(props) {
  const { children, name, id, onChange, value, required = false } = props;

  return (
    <BaseSelect
      name={name}
      id={id}
      onChange={onChange}
      value={value}
      required={required}
    >
      {children}
    </BaseSelect>
  );
}
