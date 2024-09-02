import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  const resetErrorBoundary = () => {
    setHasError(false);
    setError(null);
    setErrorInfo(null);
  };

  const ErrorFallback = ({ error, resetErrorBoundary }) => (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);
      console.error("ErrorBoundary caught an error", error, errorInfo);
    };

    const origConsoleError = console.error;
    console.error = (...args) => {
      const [firstArg] = args;
      if (firstArg instanceof Error) {
        handleError(firstArg, args);
      }
      origConsoleError(...args);
    };

    return () => {
      console.error = origConsoleError;
    };
  }, []);

  if (hasError) {
    return <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />;
  }

  return children;
}

export default ErrorBoundary;
