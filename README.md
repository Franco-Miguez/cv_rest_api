# cv_rest_api

## Descripción

cv_rest_api es una pequeña aplicación web que consume la API pública [RandomUser](https://randomuser.me/) para mostrar un “currículum” de usuario aleatorio. Al cargar la página, se obtienen datos de nombre, foto, género, teléfono, correo electrónico, ubicación y fecha de nacimiento, y se muestran de forma clara y atractiva.

## Características

- Obtiene datos de usuario aleatorios al cargar la página.
- Muestra nombre completo, foto de perfil, género, teléfono, correo electrónico, ubicación y fecha de nacimiento.
- Indicadores visuales de género con iconos y colores.
- Diseño sencillo y responsivo usando HTML, CSS y JavaScript.

## Tecnologías

- HTML5
- CSS3 (incluye Bootstrap Icons para iconografía)
- JavaScript (Fetch API)
- API externa: [RandomUser](https://randomuser.me/)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/cv_rest_api.git
   ```
2. Entra en la carpeta del proyecto:
   ```bash
   cd cv_rest_api
   ```
3. Abre `index.html` en tu navegador favorito.

> No se requieren dependencias ni servidor local; basta con un navegador moderno.

## Uso

1. Abre `index.html`.
2. La aplicación realizará una petición a la API y mostrará los datos del usuario.
3. Para generar otro usuario, recarga la página.

## Estructura de archivos

```
cv_rest_api/
├── css/          # Estilos CSS personalizados
├── image/        # Imágenes y assets
├── js/           # Scripts JavaScript adicionales
├── index.html    # Página principal
├── index.js      # Lógica para consumir la API y actualizar el DOM
└── README.md     # Documentación del proyecto
```

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.