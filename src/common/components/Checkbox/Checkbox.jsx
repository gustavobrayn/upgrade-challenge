import { BaseCheckBox } from './styles';

export function CheckBox(props) {
  const { id, name, onChange, checked, label } = props;

  return (
    <div>
      <BaseCheckBox
        type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
