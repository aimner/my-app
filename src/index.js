import './index.scss';
import reportWebVitals from './reportWebVitals';
import store from './state/redux-store.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

// export const renderTree = () => {

//   root.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </React.StrictMode>
//   );
// }

 root.render(
      <Provider store={store}>
        <App />
      </Provider>
  );

// store.subscribe(renderTree) // в данную функцию мы передаем renderTree для того, что б не создавать циклическую зависимость

// renderTree()

reportWebVitals();



