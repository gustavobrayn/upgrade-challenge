import { BaseSelect } from './styles';

export function Select(props) {
  const { children, name, id, onChange, value } = props;

  return (
    <BaseSelect name={name} id={id} onChange={onChange} value={value}>
      {children}
    </BaseSelect>
  );
}
