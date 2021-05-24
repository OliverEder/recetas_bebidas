import React from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaRecetas from "./components/ListaRecetas";

// El provider se usa desde el componente principal
import CategoriasProvider from "./context/categoriasContext";
import RecetasProvider from "./context/recetasContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoriasProvider >
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
