// import React, { useState } from 'react';
// import '../assets/css/FSA.css';
// import img1 from '../assets/media/products//1.png';
// import img2 from '../assets/media/products/2.png';
// import img3 from '../assets/media/products/4.png';
// const ImageSlider = ({ images, onClose }) => {
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

//   const handleThumbnailClick = (index) => {
//     setCurrentSlideIndex(index);
//   };

//   return (
//     <div className="image-slider">
//       <div className="image-slider-overlay" onClick={onClose}></div>
//       <div className="image-slider-content">
//         <div className="slider-main-image">
//         <img src={images[currentSlideIndex]} alt={`Slide ${currentSlideIndex + 1}`} />
//         </div>
//         <div className="slider-thumbnails">
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={'Slide ${index + 1}'}
//               className={index === currentSlideIndex ? 'active' : ''}
//               onClick={() => handleThumbnailClick(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductInfoPage = () => {
//   const images = [
//     {img1},
//     {img2},
//     {img3}
// ]; // Replace with your image URLs
//   const [showSlider, setShowSlider] = useState(false);

//   const handleImageClick = () => {
//     setShowSlider(true);
//   };

//   const handleCloseSlider = () => {
//     setShowSlider(false);
//   };

//   return (
//     <div className="product-info-page">
//       <img src={images[0]} alt="Product" onClick={handleImageClick} />
//       {showSlider && <ImageSlider images={images} onClose={handleCloseSlider} />}
//     </div>
//   );
// };

// export default ProductInfoPage;
