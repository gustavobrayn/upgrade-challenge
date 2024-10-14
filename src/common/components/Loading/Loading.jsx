import { Overlay, Spinner } from './styles';

export function Loading() {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
}
