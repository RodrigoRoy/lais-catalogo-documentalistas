# Catálogo Mujeres Documentalistas en México (1970-1985)

Proyecto coordinado por el Laboratorio Audiovisual de Investigación Social (LAIS) del Instituto Mora.

Con la finalidad de contribuir al conocimiento del trabajo documental que hicieron las mujeres entre 1970 y 1985 en México, enfatizando las diferentes actividades (realización, producción, cámara, sonido, etc.), temáticas abordadas y formas de organización en las que produjeron. Se catalogan y comentan documentales en los que las mujeres tuvieron un rol individual o colectivo, con el fin de promover el conocimiento sobre la vida y obra de las documentalistas.


## Acerca del código

Desarrollado en Node.js con [Nuxt](https://nuxt.com/) (v4).

### Requisitos para ambiente de desarrollo local

- [MongoDB Community Server](https://www.mongodb.com/try/download/community) (base de datos)
- [Yarn](https://yarnpkg.com/getting-started/install) (package manager)

### Variables de entorno

Crear archivo `.env` con la configuración necesaria:

```bash
MONGODB_URI=<database-connection-URI>
MONGODB_DBNAME=<database-name>
```

### Instalar dependencias

```bash
yarn install
```

### Ambiente de desarrollo

Iniciar servidor de desarrollo en `http://localhost:3000`:

```bash
yarn dev
```

## Ambiente de producción

Compilar código para ambniente producción:

```bash
yarn build
```

Vista previa en ambiente local:
```bash
yarn preview
```

## Contacto

Para conocer más sobre la investigación: [lais@mora.edu.mx](mailto:lais@mora.edu.mx)

Para detalles técnicos sobre el código fuente: [rcolin@mora.edu.mx](mailto:rcolin@mora.edu.mx)

## Licencia
Este proyecto es software libre, puede ser redistribuido y/o modificado bajo los términos de **GNU General Public License v3.0** siempre y cuando se mantenga la misma licencia.