import img1 from '../assets/homepage/pumpkins.jpeg';
import img2 from '../assets/homepage/me.jpeg';
import img3 from '../assets/homepage/racing.jpeg';

const images = [
  { src: img1, initialRotation: '-2deg' }, // Storing the rotation value
  { src: img2, initialRotation: '1.5deg' },
  { src: img3, initialRotation: '-1.25deg' },
];

export default function ImageGallery() {
  return (
    <div className="gallery">
      {images.map((image, i) => (
        <img
          key={i}
          src={image.src}
          alt={`Paul Romer ${i + 1}`}
          className="avatar"
          style={{
            '--initial-rotation': image.initialRotation // Set a CSS custom property
          }}
        />
      ))}
    </div>
  );
}