import { RouterProvider } from 'react-router-dom';
import {router} from './router';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


function App() {
  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <RouterProvider router={router}/>
      </MantineProvider>
  );
}

export default App;
