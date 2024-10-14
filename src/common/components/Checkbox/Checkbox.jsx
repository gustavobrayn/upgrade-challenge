import { BaseCheckBox } from './styles';

export function CheckBox(props) {
  const { id, name, onChange, checked, label, required = false } = props;

  return (
    <div>
      <BaseCheckBox
        type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
        required={required}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
