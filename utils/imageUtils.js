// utils/imageUtils.js

const baseImageUrl = "https://image.tmdb.org/t/p";
const pathUrl = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

async function loadImage(imagePath, size) {
  const imageUrl = (x, y) => {
    if (size === "orginal") {
      return `${pathUrl}${imagePath}`;
    } else {
      return `${baseImageUrl}/${size}${imagePath}`;
    }
  };

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(imageUrl(imagePath, size)); // Görsel yüklendiğinde URL'yi döndür
    };
    img.onerror = () => {
      reject(new Error("Görsel yüklenirken hata oluştu")); // Hata durumunda hata mesajı döndür
    };
    img.src = imageUrl(imagePath, size);
  });
}

export { loadImage };
