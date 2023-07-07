import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../components/Root';
import ItemListProyects from '../container/ItemListProyects';
import SobreNosotros from '../container/SobreNosotros';
import ItemDetailProyects from '../container/ItemDetailProyects';
import Contacto from '../container/Contacto';
import Colaboradores from '../container/Colaboradores';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <p>No Encontrado</p>,
    children: [
      {
        path: '/',
        element: <ItemListProyects />,
      },
      {
        path: '/proyects',
        element: <ItemListProyects />,
      },
      {
        path: '/detail/:id',
        element: <ItemDetailProyects />,
      },
      {
        path: '/sobreNosotros',
        element: <SobreNosotros />,
      },
      {
        path: '/contacto',
        element: <Contacto />,
      },
      {
        path: '/colaboradores',
        element: <Colaboradores />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
