import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { persistor, store } from './pages/Redux/Store.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
)
