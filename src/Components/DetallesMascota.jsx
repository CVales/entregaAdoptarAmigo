import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './../App.css';
import { Link } from 'react-router-dom';


function DetalleMascota() {
    const { id } = useParams();  // El ID de la mascota que recibes de la URL
    const [mascota, setMascota] = useState(null);

    useEffect(() => {
        const fetchMascota = async () => {
            try {
                const response = await fetch(`https://huachitos.cl/api/animales`);
                const data = await response.json();
                const selectedPet = data.data.find(pet => pet.id === parseInt(id));
                setMascota(selectedPet);
            } catch (error) {
                console.error('Error al obtener la mascota:', error);
            }
        };

        fetchMascota();
    }, [id]);

    if (!mascota) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="detalle-mascota">
            <img src={mascota.imagen} alt={mascota.nombre} className="detalle-imagen" />
            <h2>{mascota.nombre}</h2>
            <p><strong>Tipo:</strong> {mascota.tipo}</p>
            <p><strong>Edad:</strong> {mascota.edad}</p>
            <p><strong>Estado:</strong> {mascota.estado}</p>
            <p><strong>Género:</strong> {mascota.genero}</p>
            <div dangerouslySetInnerHTML={{ __html: mascota.desc_fisica }}></div>
            <div dangerouslySetInnerHTML={{ __html: mascota.desc_personalidad }}></div>
            <div dangerouslySetInnerHTML={{ __html: mascota.desc_adicional }}></div>
            <p><strong>Esterilizado:</strong> {mascota.esterilizado ? 'Sí' : 'No'}</p>
            <p><strong>Vacunas:</strong> {mascota.vacunas ? 'Sí' : 'No'}</p>
            <p><strong>Región:</strong> {mascota.region}</p>
            <p><strong>Comuna:</strong> {mascota.comuna}</p>
            <Link to={`/mascota/${mascota.id}/adopcion`}>
        Ir al formulario de adopción
      </Link>
        </div>
    );
}

export default DetalleMascota;
