import React from 'react';
import './../App.css';


function Filtros({ setFilters }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Filtrar Mascotas</h2>
            <label>
                Tipo:
                <input name="tipo" onChange={handleChange} />
            </label>
            <label>
                Estado:
                <input name="estado" onChange={handleChange} />
            </label>
            <label>
                Edad:
                <input name="edad" onChange={handleChange} />
            </label>
            <label>
                Sexo:
                <input name="sexo" onChange={handleChange} />
            </label>
        </div>
    );
}

export default Filtros;