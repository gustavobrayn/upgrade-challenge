import { BasePageWrapper } from './styles';

export function PageWrapper(props) {
  const { children } = props;

  return <BasePageWrapper>{children}</BasePageWrapper>;
}
