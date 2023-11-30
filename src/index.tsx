import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";
import { store } from "./redux";
import { router } from "./router";
import { RouterProvider } from "react-router";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

