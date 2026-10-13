import { createContext, useContext, useState } from 'react';

const ListaContext = createContext();

export function ListaProvider({ children }) {
  // { idDoGrupo: 'favorito' | 'gostei' | 'pretendo_ver' | 'nao_gostei' }
  const [statusPorGrupo, setStatusPorGrupo] = useState({});

  const definirStatus = (idGrupo, status) => {
    setStatusPorGrupo((atual) => {
      const novo = { ...atual };
      if (atual[idGrupo] === status) delete novo[idGrupo]; // tocar de novo remove
      else novo[idGrupo] = status;
      return novo;
    });
  };

  return (
    <ListaContext.Provider value={{ statusPorGrupo, definirStatus }}>
      {children}
    </ListaContext.Provider>
  );
}

export const useLista = () => useContext(ListaContext);
