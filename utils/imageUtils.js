// utils/imageUtils.js

const baseImageUrl = "https://image.tmdb.org/t/p";

async function loadImage(imagePath, size) {
  const imageUrl = `${baseImageUrl}/${size}${imagePath}`;

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(imageUrl); // Görsel yüklendiğinde URL'yi döndür
    };
    img.onerror = () => {
      reject(new Error("Görsel yüklenirken hata oluştu")); // Hata durumunda hata mesajı döndür
    };
    img.src = imageUrl;
  });
}

export { loadImage };
