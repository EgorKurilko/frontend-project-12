import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import AuthProvider from './components/AuthProvider.jsx';
import { store } from './services/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

// StrictMode:
// Работает только в режиме разработки. В продакшене он автоматически отключается.
// Не влияет на рендеринг в продакшене, поэтому вы можете безопасно оборачивать
// компоненты в StrictMode.
// Осн.функции:
// Выявление небезопасных методов жизненного цикла
// Дублированный рендеринг в целях проверки:
// (Проверки побочных эффектов, которые могут возникать в рендеринге или в хуках)
// Предупреждение об использовании устаревших API
// Выявление ошибок при работе с состоянием и эффектами
