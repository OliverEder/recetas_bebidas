import React, {useContext, useState} from 'react';
import {CategoriasContext} from "../context/categoriasContext";
import {RecetasContext} from "../context/recetasContext";

const Formulario = () => {
    const [busqueda, guardarBusqueda] = useState({
        nombre: "",
        categoria: ""
    });

    const obtenerDatoReceta = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] :  e.target.value
        });
    }

    const { categorias } = useContext(CategoriasContext); 
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext);


    return (  
        <form
            className="col-12"
            onSubmit={e => { 
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }} 
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por catgoria o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerDatoReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatoReceta}
                    >
                        <option value="categoria"> -- Selecciona categoria -- </option>
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.strCategory} 
                                value={categoria.strCategory}
                            >{categoria.strCategory} </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input 
                        className="btn btn-block btn-primary"
                        type="submit"
                        value="Buscar bebidas"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;