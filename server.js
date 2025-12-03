const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 4200;
const BASE_DIR = path.join(__dirname, 'dist/SmartCrop-App5');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // Eliminar barras al inicio y final
  pathname = pathname.replace(/^\/+|\/+$/g, '');

  let filePath;

  // Rutas en-US (raíz)
  if (pathname === '' || !pathname.startsWith('es-ES')) {
    filePath = path.join(BASE_DIR, 'browser/en-US', pathname === '' ? 'index.html' : pathname);
  } else {
    // Rutas es-ES
    filePath = path.join(BASE_DIR, 'es-ES/browser/es-ES', pathname.replace('es-ES/', ''));
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Si hay error (archivo no encontrado), servir index.html para Angular routing
      if (pathname.startsWith('es-ES')) {
        fs.readFile(path.join(BASE_DIR, 'es-ES/browser/es-ES/index.html'), (err2, data2) => {
          if (err2) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data2);
          }
        });
      } else {
        fs.readFile(path.join(BASE_DIR, 'browser/en-US/index.html'), (err2, data2) => {
          if (err2) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data2);
          }
        });
      }
      return;
    }

    // Determinar el Content-Type
    let contentType = 'text/plain';
    if (filePath.endsWith('.html')) contentType = 'text/html';
    else if (filePath.endsWith('.js')) contentType = 'application/javascript';
    else if (filePath.endsWith('.css')) contentType = 'text/css';
    else if (filePath.endsWith('.json')) contentType = 'application/json';
    else if (filePath.endsWith('.png')) contentType = 'image/png';
    else if (filePath.endsWith('.jpg')) contentType = 'image/jpeg';
    else if (filePath.endsWith('.gif')) contentType = 'image/gif';
    else if (filePath.endsWith('.svg')) contentType = 'image/svg+xml';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`✅ Versión EN: http://localhost:${PORT}`);
  console.log(`✅ Versión ES: http://localhost:${PORT}/es-ES`);
});
