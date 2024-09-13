import React, { useState } from 'react';
import './FilterMenu.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';  

const FilterMenu = () => {
  const [openFilter, setOpenFilter] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const handleToggle = (filter) => {
    setOpenFilter({ ...openFilter, [filter]: !openFilter[filter] });
  };

  return (
    <div className="filter-menu">
      <h3>Filters</h3>

    
      <div className="filter-section">
        <div onClick={() => handleToggle('idealFor')} className="filter-title">
          IDEAL FOR
          {openFilter.idealFor ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
        </div>
        {openFilter.idealFor && (
          <div className="filter-options">
            <input type="checkbox" id="men" /> <label htmlFor="men">Men</label><br />
            <input type="checkbox" id="women" /> <label htmlFor="women">Women</label><br />
            <input type="checkbox" id="baby" /> <label htmlFor="baby">Baby</label><br />
            <input type="checkbox" id="kids" /> <label htmlFor="kids">Kids</label>
          </div>
        )}
      </div>

    
      <div className="filter-section">
        <div onClick={() => handleToggle('occasion')} className="filter-title">
          OCCASION
          {openFilter.occasion ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
        </div>
        {openFilter.occasion && (
          <div className="filter-options">
            <input type="checkbox" id="occasion-men" /> <label htmlFor="occasion-men">Men</label><br />
            <input type="checkbox" id="occasion-women" /> <label htmlFor="occasion-women">Women</label><br />
            <input type="checkbox" id="occasion-baby" /> <label htmlFor="occasion-baby">Baby</label><br />
            <input type="checkbox" id="occasion-kids" /> <label htmlFor="occasion-kids">Kids</label>
          </div>
        )}
      </div>

      
      <div className="filter-section">
        <div onClick={() => handleToggle('work')} className="filter-title">
          WORK
          {openFilter.work ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
        </div>
        {openFilter.work && (
          <div className="filter-options">
            <input type="checkbox" id="work-men" /> <label htmlFor="work-men">Men</label><br />
            <input type="checkbox" id="work-women" /> <label htmlFor="work-women">Women</label><br />
            <input type="checkbox" id="work-baby" /> <label htmlFor="work-baby">Baby</label><br />
            <input type="checkbox" id="work-kids" /> <label htmlFor="work-kids">Kids</label>
          </div>
        )}
      </div>
      <div className="filter-section">
        <div onClick={() => handleToggle('fabric')} className="filter-title">
          FABRIC
          {openFilter.fabric ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
        </div>
        {openFilter.fabric && (
          <div className="filter-options">
            <input type="checkbox" id="fabric-men" /> <label htmlFor="fabric-men">Men</label><br />
            <input type="checkbox" id="fabric-women" /> <label htmlFor="fabric-women">Women</label><br />
            <input type="checkbox" id="fabric-baby" /> <label htmlFor="fabric-baby">Baby</label><br />
            <input type="checkbox" id="fabric-kids" /> <label htmlFor="fabric-kids">Kids</label>
          </div>
        )}
      </div>
      <div className="filter-section">
        <div onClick={() => handleToggle('segment')} className="filter-title">
          SEGMENT
          {openFilter.segment ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
        </div>
        {openFilter.segment && (
          <div className="filter-options">
            <input type="checkbox" id="segment-men" /> <label htmlFor="segment-men">Men</label><br />
            <input type="checkbox" id="segment-women" /> <label htmlFor="segment-women">Women</label><br />
            <input type="checkbox" id="segment-baby" /> <label htmlFor="segment-baby">Baby</label><br />
            <input type="checkbox" id="segment-kids" /> <label htmlFor="segment-kids">Kids</label>
          </div>
        )}
      </div>
      <div className="filter-section">
        <div onClick={() => handleToggle('suitableFor')} className="filter-title">
          SUITABLEFOR
          {openFilter.suitableFor ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
        </div>
        {openFilter.suitableFor && (
          <div className="filter-options">
            <input type="checkbox" id="suitableFor-men" /> <label htmlFor="suitableFor-men">Men</label><br />
            <input type="checkbox" id="suitableFor-women" /> <label htmlFor="suitableFor-women">Women</label><br />
            <input type="checkbox" id="suitableFor-baby" /> <label htmlFor="suitableFor-baby">Baby</label><br />
            <input type="checkbox" id="suitableFor-kids" /> <label htmlFor="suitableFor-kids">Kids</label>
          </div>
        )}
      </div>
      <div className="filter-section">
        <div onClick={() => handleToggle('rawMaterials')} className="filter-title">
          RAWMATERIALS
          {openFilter.rawMaterials ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
        </div>
        {openFilter.rawMaterials && (
          <div className="filter-options">
            <input type="checkbox" id="rawMaterials-men" /> <label htmlFor="rawMaterials-men">Men</label><br />
            <input type="checkbox" id="rawMaterials-women" /> <label htmlFor="rawMaterials-women">Women</label><br />
            <input type="checkbox" id="rawMaterials-baby" /> <label htmlFor="rawMaterials-baby">Baby</label><br />
            <input type="checkbox" id="rawMaterials-kids" /> <label htmlFor="rawMaterials-kids">Kids</label>
          </div>
        )}
      </div>
      <div className="filter-section">
        <div onClick={() => handleToggle('pattern')} className="filter-title">
          PATTERN
          {openFilter.pattern ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
        </div>
        {openFilter.pattern && (
          <div className="filter-options">
            <input type="checkbox" id="pattern-men" /> <label htmlFor="pattern-men">Men</label><br />
            <input type="checkbox" id="pattern-women" /> <label htmlFor="pattern-women">Women</label><br />
            <input type="checkbox" id="pattern-baby" /> <label htmlFor="pattern-baby">Baby</label><br />
            <input type="checkbox" id="pattern-kids" /> <label htmlFor="pattern-kids">Kids</label>
          </div>
        )}
      </div>
      
     </div>
  );
};

export default FilterMenu;
