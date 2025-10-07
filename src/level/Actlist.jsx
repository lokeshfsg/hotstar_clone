
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Actlist() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  
  useEffect(() => {
    axios.get('http://localhost:5009/product')
      .then(res => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  // Apply all 3 filters on change
  useEffect(() => {
    let updated = [...products];

    // Search
    if (searchTerm) {
      updated = updated.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter
    if (filterType !== 'All') {
      updated = updated.filter(product => product.type.toLowerCase() === filterType.toLowerCase());
    }
    

    setFiltered(updated);
  }, [searchTerm, filterType,  products]);

  return (
    <div className="container-data">
      

      {/* Search, Filter Controls */}
      <div className="controls" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search movie name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className= "control-inp"
        />

        <select value={filterType} 
        onChange={e => setFilterType(e.target.value)} className= "luck">
          <option value="All">All Types</option>
          <option value="Suspense thriller">Suspense thriller</option>
          <option value="Action">Action</option>
          <option value="Horror">Horror</option>
          <option value="Anime">Anime</option>
          <option value="Mythalogical">Mythalogical</option>
        </select>

        
      </div>

      
        <div className="row">
        {filtered.length > 0 ? (
          filtered.map(product => (
            <div key={product.id} className="card col-md-3" style={{ marginBottom: '1rem' }}>
              <div className="row">
                <div className="card-img">
                  <img className="card-img-top" src={product.img} alt={product.name} />
                </div>
                <hr />
                <span className="topTemp">{product.name}</span>
              </div>
              <div className="card-body">
                
                <h4 className="card-title">{product.type}</h4>
                <div className="card-text">
                  <p className="day">{product.description}</p>
                </div>
              </div>
              
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>  
      
    </div>
  );
}

export default Actlist;