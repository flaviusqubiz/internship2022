import { Provider } from 'react-redux';
import { store } from './quotes/store';
import { QuoteList } from './views/component';

function App() {
  return (
    <Provider store={store}>
      <QuoteList />
    </Provider>
  );
}

export default App;
