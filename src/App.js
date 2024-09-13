import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import FilterMenu from './components/FilterMenu';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './App.css';

 export const App = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState('RECOMMENDED');
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSortedProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let sortedData = [...products];
    switch (sortOption) {
      case 'NEWEST FIRST':
        sortedData = sortedData.sort((a, b) => b.id - a.id);
        break;
      case 'POPULAR':
        sortedData = sortedData.sort((a, b) => b.rating.count - a.rating.count);
        break;
      case 'PRICE: HIGH TO LOW':
        sortedData = sortedData.sort((a, b) => b.price - a.price);
        break;
      case 'PRICE: LOW TO HIGH':
        sortedData = sortedData.sort((a, b) => a.price - b.price);
        break;
      default:
        sortedData = [...products];
        break;
    }
    setSortedProducts(sortedData);
  }, [sortOption, products]);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="header">
          <div className="header-left">
            <span className="items">{sortedProducts.length} ITEMS</span>
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="filter-toggle-btn"
            >
              {showFilter ? (
                <>
                  <FaChevronLeft className="icon" /> Hide Filter
                </>
              ) : (
                <>
                  <FaChevronRight className="icon" /> Show Filter
                </>
              )}
            </button>
          </div>
          <div className="header-right">
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className='header-right-options'>
              <option value="RECOMMENDED">RECOMMENDED</option>
              <option value="NEWEST FIRST">NEWEST FIRST</option>
              <option value="POPULAR">POPULAR</option>
              <option value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
              <option value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</option>
            </select>
          </div>
        </div>

        <div className="content">
          {showFilter && <FilterMenu />}
          <ProductGrid products={sortedProducts}  showFilter={showFilter}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};


