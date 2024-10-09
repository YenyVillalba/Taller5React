import React from 'react';

const Header = () => {
  return (
    <header className="bg-pink-400 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Mi Tienda de Calzado</h1>
        <nav>
          <ul className="flex space-x-10">
            <li>
              <a href="#" className="text-white hover:text-pink">Inicio</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-pink">Productos</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-pink">Acerca de Nosotros </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-pink">Contacto</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-pink">Promociones</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
