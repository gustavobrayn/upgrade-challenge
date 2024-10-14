import { Overlay, Spinner } from './styles';

export function Loading() {
  return (
    <Overlay data-testid="loading-overlay">
      <Spinner />
    </Overlay>
  );
}
