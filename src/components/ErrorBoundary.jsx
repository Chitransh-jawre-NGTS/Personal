import { ErrorBoundary } from 'react-error-boundary';

const FallbackComponent = ({ error }) => (
  <div role="alert">
    Something went wrong: {error.message}
  </div>
);

const ProductGrid = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {/* Your Component */}
    </ErrorBoundary>
  );
};
