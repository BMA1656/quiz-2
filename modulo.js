const fs = require('fs');

function copyfile() {
 


  fs.copyFile('./original.txt', './copia.txt', (error) => {
    if (error) {
      console.error('Error al copiar el archivo:', error);
      return;
    }
  });
  return 'Archivo copiado correctamente'
}




module.exports = {
  copyfile: copyfile,
}