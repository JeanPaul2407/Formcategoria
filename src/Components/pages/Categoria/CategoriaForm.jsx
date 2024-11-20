import React, { useState } from 'react';



  const CategoriaForm = () => {
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaCategoria = { categoria, descripcion, monto, fecha };
    console.log('Formulario enviado:', nuevaCategoria);

    // Reinicia los campos del formulario
    setCategoria('');
    setDescripcion('');
    setMonto('');
    setFecha('');
  };

  return (
    
    <div className="container my-5">
      <br></br>
    <div className="row">
    <div className="col-6"> 
    <h3> Formulario Categoria</h3>
    <form className="p-5 border rounded shadow" onSubmit={handleSubmit}>
    
      <div className='row mt-2'>
        <label className="form-label">Categoría:</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />
      </div>
      <div className="row mt-3">
        <label className="form-label">Descripción:</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="row mt-3">
        <label className="form-label">Monto:</label>
        <input
          type="number"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          required
        />
      </div>
      <div className="row mt-3">
        <label className="form-label">Fecha:</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </div>
      
      <button type="submit" className="btn btn-outline-success my-3 w-20">Guardar Categoria</button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default CategoriaForm;
