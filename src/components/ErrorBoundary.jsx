import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error details
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6">
            <div className="text-red-500 text-6xl mb-4">💥</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Something went wrong!
            </h2>
            <p className="text-gray-600 mb-4">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            {this.props.showDetails && this.state.error && (
              <details className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-left">
                <summary className="cursor-pointer font-medium text-red-800 mb-2">
                  Error Details
                </summary>
                <div className="text-sm text-red-700">
                  <strong>Error:</strong> {this.state.error.toString()}
                  <br />
                  <strong>Stack:</strong>
                  <pre className="mt-2 whitespace-pre-wrap text-xs bg-red-100 p-2 rounded">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </details>
            )}
            <div className="space-x-2">
              <button 
                onClick={() => window.location.reload()} 
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Reload Page
              </button>
              <a 
                href="/" 
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors inline-block"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    // If no error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;