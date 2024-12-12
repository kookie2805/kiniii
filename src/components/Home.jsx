// src/components/HomePage.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faShoppingCart, faCog, faInfoCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import kapakImage from '../assets/Kapak.png';
import './Home.css'; // Mengimpor file CSS untuk homepage

const HomePage = () => {
  // State untuk mengelola status like
  const [liked, setLiked] = useState([false, false, false, false, false]);

  // Fungsi untuk menangani klik pada tombol like
  const handleLikeClick = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  return (
    <div>
      {/* Teks lokasi di bawah navbar */}
      <div className="location" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'black', fontSize: '24px', marginRight: '10px' }} />
          <span>Jalan. Peterongan Tengah Raya</span>
        </div>

        {/* Ikon tambahan di sebelah teks lokasi */}
        <div className="icon" style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
          <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'black', fontSize: '24px', marginLeft: '10px', marginRight: '10px' }} />
          <FontAwesomeIcon icon={faCog} style={{ color: 'black', fontSize: '24px', marginLeft: '10px', marginRight: '10px' }} />
          <FontAwesomeIcon icon={faInfoCircle} style={{ color: 'black', fontSize: '24px', marginLeft: '10px' }} />
        </div>
      </div>

      {/* Wrapper untuk box container dan teks */}
      <div className="box-container-wrapper">
        {/* Box/container di bawah teks lokasi */}
        <div className="box-container">
          <img src={kapakImage} alt="New Collection" className="box-image" />
          {/* Teks di dalam box */}
          <div className="box-text">
            <h2>New Collection</h2>
            <p>Recommendations, <br /> from our shop!</p>
          </div>
          {/* Tombol di bawah box */}
          <button className="shop-now-btn">Shop Now</button>
        </div>

        {/* Teks tambahan di sebelah box container */}
        <div className="welcome-text">
          <p>Hallo, User!</p>
          <p>Selamat Datang di Website UMKM</p>
          <p>“KIOS MINI”</p>

          {/* Teks Category */}
          <div className="category-title">Category</div>

          {/* Lingkaran kategori */}
          <div className="category-container">
            <div className="category-circle">A</div>
            <div className="category-circle">B</div>
            <div className="category-circle">C</div>
            <div className="category-circle">D</div>
          </div>
        </div>
      </div>

      {/* Garis pertama (panjang) */}
      <div className="full-line"></div>

      {/* Garis kedua (pendek) */}
      <div className="short-line"></div>

      {/* Teks "Product Kini" di bawah garis kedua */}
      <div className="product-text">
        Product Kini
      </div>

      {/* Teks "All Newest Popular" di sebelah kanan */}
      <div className="all-newest-popular">
        All Newest Popular
      </div>

      {/* 5 Box Containers */}
      <div className="boxes-wrapper">
        {Array(5).fill().map((_, index) => (
          <div className="box-container-like" key={index}>
            <FontAwesomeIcon
              icon={faHeart}
              className={`like-button ${liked[index] ? 'liked' : ''}`}
              onClick={() => handleLikeClick(index)}
            />
            <img src={kapakImage} alt={`Box ${index + 1}`} className="box-image" />
            <div className="box-title">Box {index + 1}</div>
            <div className="box-description">Description {index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
