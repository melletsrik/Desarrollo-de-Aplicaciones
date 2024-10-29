/* import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [tarjetaCredito, setTarjetaCredito] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cliente = {
      nombre,
      tarjeta_credito: tarjetaCredito,
      correo_electronico: correoElectronico,
      telefono,
    };

    try {
      const response = await fetch('http://localhost:3001/insertar-cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente),
      });

      if (response.ok) {
        alert('Cliente insertado con éxito');
      } else {
        alert('Error al insertar cliente');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Registrar Cliente</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </label>
        <br />
        <label>
          Tarjeta de Crédito:
          <input type="text" value={tarjetaCredito} onChange={(e) => setTarjetaCredito(e.target.value)} required />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input type="email" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} required />
        </label>
        <br />
        <label>
          Teléfono:
          <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App; */
import React, { useState, useEffect } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [specialty, setSpecialty] = useState('Estadistica');
  const [files, setFiles] = useState({});
  const [selectedFileContent, setSelectedFileContent] = useState('');

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle specialty selection
  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
  };

  // Handle file upload submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Por favor selecciona un archivo.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('specialty', specialty);

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error al cargar el archivo');
      }

      const data = await response.json();
      alert(data.message);
      fetchFiles(); // Refresh file list after upload
    } catch (error) {
      console.error('Error al cargar el archivo:', error);
      alert('Error al cargar el archivo');
    }
  };

  // Fetch files organized by specialty
  const fetchFiles = async () => {
    try {
      const response = await fetch('http://localhost:3001/files');
      if (!response.ok) {
        throw new Error('Error al obtener los archivos');
      }
      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error('Error al obtener los archivos:', error);
    }
  };

  // Fetch content of a specific file
  const viewFileContent = async (specialtyName, fileName) => {
    try {
      const response = await fetch(`http://localhost:3001/files/${specialtyName}/${fileName}`);
      if (!response.ok) {
        throw new Error('Error al ver el archivo');
      }
      const data = await response.json();
      setSelectedFileContent(data.content);
    } catch (error) {
      console.error('Error al ver el archivo:', error);
      alert('Error al ver el archivo');
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="upload-container">
      <h1 className="upload-title">Cargar Archivo por Especialidad</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <label className="upload-label">
          Especialidad:
          <select
            value={specialty}
            onChange={handleSpecialtyChange}
            required
            className="upload-select"
          >
            <option value="Estadistica">Estadistica</option>
            <option value="DesarrolloWeb">Desarrollo Web</option>
            <option value="Testing">Testing</option>
          </select>
        </label>
        <label className="upload-label">
          Selecciona un archivo:
          <input
            type="file"
            onChange={handleFileChange}
            required
            className="upload-input"
          />
        </label>
        <button type="submit" className="upload-button">
          Subir Archivo
        </button>
      </form>

      <h2>Archivos por Especialidad</h2>
      {Object.keys(files).map((specialtyName) => (
        <div key={specialtyName}>
          <h3>{specialtyName}</h3>
          <ul>
            {files[specialtyName].map((file) => (
              <li key={file.nombre_archivo}>
                {file.nombre_archivo}
                <button onClick={() => viewFileContent(specialtyName, file.nombre_archivo)}>
                  Ver Contenido
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {selectedFileContent && (
        <div className="file-content">
          <h3>Contenido del archivo:</h3>
          <pre>{selectedFileContent}</pre>
        </div>
      )}
    </div>
  );
}

export default App;