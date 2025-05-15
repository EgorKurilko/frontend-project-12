import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import init from './init';

const initApp = async () => {
  const mountNode = document.getElementById('root');
  const root = ReactDOMClient.createRoot(mountNode);
  root.render(
    <BrowserRouter>
      {await init()}
    </BrowserRouter>,
  );
};

initApp();
