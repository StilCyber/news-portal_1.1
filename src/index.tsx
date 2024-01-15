import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import './shared/config/i18n/i18n';

const root = document.getElementById('root');
if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(
  <StoreProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StoreProvider>,
);
