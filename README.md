# Consulta-Cedula
[![Deploment Pipeline](https://github.com/AlbVerHoy/consulta-cedula/actions/workflows/deployment.yml/badge.svg)](https://github.com/AlbVerHoy/consulta-cedula/actions/workflows/deployment.yml)

Frontend project created with ReactJS to query *Cedulas Profesionales*. React-query being used to consume backend.

## Deployment process (Github Actions pipeline)
1. Build docker image (consulta-cedula:{gitHash}
2. Push docker image to private container registry (Azure CR)
3. Deploy application using Azure Web App Service
