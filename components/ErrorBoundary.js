import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-xl text-center my-8">
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <p>Sorry, an unexpected error occurred. Please try refreshing the page or contact support if the problem persists.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 