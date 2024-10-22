import React from 'react';

function FormularioAdopcion({ pet }) {
    if (!pet) {
        return <div>Cargando los detalles de la mascota para la adopción...</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Solicitud de adopción enviada para ${pet.nombre}`);
    };

    return (
        <div>
            <h2>Formulario de Adopción para {pet.nombre}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre del Adoptante:
                    <input name="adoptante" required />
                </label>
                <label>
                    Teléfono:
                    <input name="telefono" type="tel" required />
                </label>
                <label>
                    Dirección:
                    <input name="direccion" required />
                </label>
                <button type="submit">Enviar Solicitud</button>
            </form>
        </div>
    );
}

export default FormularioAdopcion;
