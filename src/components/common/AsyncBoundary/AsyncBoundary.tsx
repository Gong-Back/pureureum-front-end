import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { type ComponentProps, PropsWithChildren, Suspense } from 'react';

import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import Text from '@/components/common/Text';

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

interface AsyncBoundaryProps
  extends Omit<ErrorBoundaryProps, 'fallbackRender'> {
  pendingFallback?: ComponentProps<typeof Suspense>['fallback'];
  rejectedFallback?: ErrorBoundaryProps['fallbackRender'];
}

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => (
  <div>
    <Text fontStyleName="subtitle2R">알 수 없는 에러가 발생했습니다.</Text>
    <Button sizeType="medium" onClick={resetErrorBoundary}>
      새로고침
    </Button>
  </div>
);

/**
 * 컴포넌트 내부에서 발생한 에러나 Pending 상태의 비동기 요청이 존재할 경우 이를 대체하는 fallback Component를 보여주는 AsyncBoundary
 * 컴포넌트 내부에서 에러가 발생했을 경우에 대한 rejectedFallback, Pending 상태의 요청이 있을 경우에 대한 pendingFallback 으로 나뉜다.
 * @param param.pendingFallback Suspense에 넘겨줄 fallback Component
 * @param param.rejectedFallback ErrorBoundary의 fallbackRender Props에 넘겨줄 fallback Component
 */
const AsyncBoundary = ({
  pendingFallback,
  rejectedFallback,
  children,
}: PropsWithChildren<AsyncBoundaryProps>) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={rejectedFallback || FallbackComponent}
      >
        <Suspense fallback={pendingFallback || <Loader />}>{children}</Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);

export default AsyncBoundary;
