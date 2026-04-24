const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const imagesDir = path.join(__dirname, '../public/images');
  const outputDir = path.join(__dirname, '../public/images/optimized');

  // Crear directorio de salida si no existe
  await fs.mkdir(outputDir, { recursive: true });

  const files = await fs.readdir(imagesDir);
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('optimized')
  );

  console.log(`Encontradas ${imageFiles.length} imágenes para optimizar`);

  for (const file of imageFiles) {
    const inputPath = path.join(imagesDir, file);
    const stats = await fs.stat(inputPath);
    const fileSizeMB = stats.size / (1024 * 1024);

    if (fileSizeMB > 1) {
      console.log(`Optimizando ${file} (${fileSizeMB.toFixed(2)} MB)...`);

      // Crear versiones optimizadas
      const basename = path.parse(file).name;

      // WebP version (mejor compresión)
      await sharp(inputPath)
        .resize(1920, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `${basename}.webp`));

      // JPEG version optimizada
      await sharp(inputPath)
        .resize(1920, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: 85, progressive: true })
        .toFile(path.join(outputDir, `${basename}-optimized.jpg`));

      // Thumbnail version
      await sharp(inputPath)
        .resize(400, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: 80 })
        .toFile(path.join(outputDir, `${basename}-thumb.jpg`));

      const optimizedStats = await fs.stat(path.join(outputDir, `${basename}.webp`));
      const optimizedSizeMB = optimizedStats.size / (1024 * 1024);

      console.log(`  ✓ Reducido de ${fileSizeMB.toFixed(2)} MB a ${optimizedSizeMB.toFixed(2)} MB (WebP)`);
    }
  }

  console.log('¡Optimización completada!');
  console.log('Las imágenes optimizadas están en: public/images/optimized/');
  console.log('Recuerda actualizar las referencias en tus componentes para usar las versiones optimizadas.');
}

optimizeImages().catch(console.error);