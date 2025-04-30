import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import Routing from './routes/Routing.jsx'
import { Provider } from 'react-redux'
import { store } from './Features/store/store.js'
import { ErrorBoundary } from 'react-error-boundary';



const FallbackComponent = ({ error, resetErrorBoundary }) => (
  <div role="alert" className="text-center p-4">
    <h2 className="text-lg font-semibold text-red-600">Something went wrong!</h2>
    <p className="text-sm text-gray-600">{error.message}</p>
    <button
      onClick={resetErrorBoundary}
      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      Try Again
    </button>
  </div>
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Routing />
    </ErrorBoundary>
    </Provider>
  </StrictMode>,
)
