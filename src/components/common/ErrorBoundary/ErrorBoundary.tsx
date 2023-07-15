import type { ComponentProps, PropsWithChildren } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

type ErrorBoundaryProps = Omit<
  ComponentProps<typeof ReactErrorBoundary>,
  'fallbackRender'
> & {
  rejectFallback: ComponentProps<typeof ReactErrorBoundary>['fallbackRender'];
};

// TODO : 에러가 발생했을 경우 보여지는 Fallback Component에 대한 공통 시안 필요
const ErrorFallback = () => <p>에러가 발생했습니다.</p>;

const ErrorBoundary = ({
  children,
  rejectFallback,
}: PropsWithChildren<ErrorBoundaryProps>) => (
  <ReactErrorBoundary fallbackRender={rejectFallback || ErrorFallback}>
    {children}
  </ReactErrorBoundary>
);

export default ErrorBoundary;
