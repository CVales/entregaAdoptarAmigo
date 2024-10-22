import React, { useEffect, useState } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';

function ListaMascotas({ filters }) {
    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {
        const fetchMascotas = async () => {
            try {
                const response = await fetch('https://huachitos.cl/api/animales');
                const data = await response.json();
                setMascotas(data.data);
            } catch (error) {
                console.error('Error al obtener las mascotas:', error);
            }
        };

        fetchMascotas();
    }, []);

    const mascotasFiltradas = mascotas.filter((mascota) => {
        return (
            (!filters.tipo || mascota.tipo === filters.tipo) &&
            (!filters.estado || mascota.estado === filters.estado) &&
            (!filters.edad || mascota.edad === filters.edad) &&
            (!filters.genero || mascota.genero === filters.genero)
        );
    });

    return (
        <div className="lista-mascotas">
            <h2>Lista de Mascotas</h2>
            <ul>
                {mascotasFiltradas.map((mascota) => (
                    <li key={mascota.id} className="mascota-item">
                        {mascota.imagen && (
                            <img src={mascota.imagen} alt={mascota.nombre} className="mascota-imagen" />
                        )}
                        <div className="mascota-info">
                            <h3>{mascota.nombre}</h3>
                            <p>{mascota.tipo}</p>
                            <Link to={`/mascota/${mascota.id}`} className="mascota-link">
                                Ver más detalles
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaMascotas;
