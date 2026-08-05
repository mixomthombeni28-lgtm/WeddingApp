export default function Gallery() {
  const imageFiles = [
    "Couple 6.jpeg",
    "Couple1.jpeg",
    "Couple10.jpeg",
    "Couple2.JPG",
    "Couple3.jpeg",
    "Couple4.jpeg",
    "Couple5.jpeg",
    "Couple7.jpeg",
    "Couple8.jpeg",
    "Couple9.jpeg",
  ];

  return (
    <div className="gallery">
      {imageFiles.map((fileName, index) => (
        <div className="photo-card" key={index}>
          <img
            src={`/images/${encodeURIComponent(fileName)}`}
            alt={`Photo ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}