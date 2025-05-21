import img1 from '../assets/homepage/pumpkins.jpeg';
import img2 from '../assets/homepage/me.jpeg';
import img3 from '../assets/homepage/racing.jpeg';

const images = [img1, img2, img3];

export default function ImageGallery() {
  return (
    <div className="gallery">
      {images.map((src, i) => (
        <img key={i} src={src} alt={`Paul Romer ${i + 1}`} className="avatar" />
      ))}
    </div>
  );
}