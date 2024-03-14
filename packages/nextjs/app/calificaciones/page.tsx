"use client";
import React, { useState } from 'react';
import type { NextPage } from "next";

interface FormData {
    nombre: string;
    cuenta: string;
    periodo: string;
    espanol: number;
    matematicas: number;
    ingles: number;
    historia: number;
    filosofia: number;
    biologia: number;
}

const RatingForm: NextPage = () => {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        cuenta: '',
        periodo: '',
        espanol: 0,
        matematicas: 0,
        ingles: 0,
        historia: 0,
        filosofia: 0,
        biologia: 0,
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: name === 'espanol' || name === 'matematicas' || name === 'ingles' || name === 'historia' || name === 'filosofia' ? parseInt(value) : value,
        }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP
        console.log('Datos enviados:', formData);
        // También puedes restablecer el estado del formulario después de enviar los datos
        setFormData({
          nombre: '',
          cuenta: '',
          periodo: '',
          espanol: 0,
          matematicas: 0,
          ingles: 0,
          historia: 0,
          filosofia: 0,
          biologia: 0,
        });
      };
    
      return (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Formulario de Calificaciones</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="cuenta" className="block">Cuenta:</label>
              <input
                type="text"
                id="cuenta"
                name="cuenta"
                value={formData.cuenta}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="periodo" className="block">Periodo:</label>
              <input
                type="text"
                id="periodo"
                name="periodo"
                value={formData.periodo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="espanol" className="block">Español:</label>
                <input
                  type="number"
                  id="espanol"
                  name="espanol"
                  value={formData.espanol}
                  onChange={handleChange}
                  min={0}
                  max={100}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="matematicas" className="block">Matemáticas:</label>
                <input
                  type="number"
                  id="matematicas"
                  name="matematicas"
                  value={formData.matematicas}
                  onChange={handleChange}
                  min={0}
                  max={100}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="ingles" className="block">Inglés:</label>
                <input
                  type="number"
                  id="ingles"
                  name="ingles"
                  value={formData.ingles}
                  onChange={handleChange}
                  min={0}
                  max={100}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="historia" className="block">Historia:</label>
                <input
                  type="number"
                  id="historia"
                  name="historia"
                  value={formData.historia}
                  onChange={handleChange}
                  min={0}
                  max={100}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="filosofia" className="block">Filosofía:</label>
                <input
                  type="number"
                  id="filosofia"
                  name="filosofia"
                  value={formData.filosofia}
                  onChange={handleChange}
                  min={0}
                  max={100}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="filosofia" className="block">Biologia:</label>
                <input
                  type="number"
                  id="filosofia"
                  name="filosofia"
                  value={formData.biologia}
                  onChange={handleChange}
                  min={0}
                  max={100}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">Guardar</button>
          </form>
        </div>
      );
};

export default RatingForm;
