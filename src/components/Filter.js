import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Filter.css';

const Filter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleApplyFilter = () => {
    onFilterChange({
      searchTerm,
      minPrice,
      maxPrice,
      category,
      
    });
  };

  const handleClearFilter = () => {
    setSearchTerm('');
    setMinPrice('');
    setMaxPrice('');
    setCategory('');
    onFilterChange({
      searchTerm: '',
      minPrice: '',
      maxPrice: '',
      category: ''
    });
  };

  return (
    <div className="container fontv card" dir='rtl'>
      <div className="filter-header">فیلتر محصولات</div>
      <div className="filter-input">
        <label className="filter-label">جستجو</label>
        <input
          type="text"
          className="form-control"
          placeholder="کلمه مورد نظر را وارد نمایید"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="filter-input">
        <label className="filter-label">قیمت</label>
        <input
          type="number"
          className="form-control"
          placeholder="کمترین قیمت مد نظر"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          className="form-control mt-2"
          placeholder="بیشترین قیمت مد نظر"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="filter-input">
        <label className="filter-label ">دسته بندی</label>
        <select
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">انتخاب دسته بندی</option>
          <option value="t-shirt">تی شرت</option>
          <option value="socks">جوراب</option>
          <option value="pants">شلوار</option>
        </select>
      </div>
      <button className="btn btn-primary w-100 mt-3" onClick={handleApplyFilter}>
        اعمال فیلتر
      </button>
      <button className="btn btn-danger w-100 mt-2" onClick={handleClearFilter}>
        حذف فیلترها
      </button>
    </div>
  );
};

export default Filter;
