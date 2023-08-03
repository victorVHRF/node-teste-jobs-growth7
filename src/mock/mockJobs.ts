import { Job } from "../job.interface.ts";

export const mockJobs: Job[] = [
  {
    "id": 1,
    "descricao": "Importação de arquivos de fundos",
    "dataMaximaConclusao": new Date('2021-02-04 12:00:00'),
    "tempoEstimado": "8 horas",
  },
  {
    "id": 2,
    "descricao": "Importação de dados da Base Legada",
    "dataMaximaConclusao": new Date('2021-02-04 12:00:00'),
    "tempoEstimado": "4 horas",
  },
  {
    "id": 3,
    "descricao": "Importação de dados",
    "dataMaximaConclusao": new Date('2021-02-02 12:00:00'),
    "tempoEstimado": "6 horas",
  },
  {
    "id": 4,
    "descricao": "Desenvolver historia 745",
    "dataMaximaConclusao": new Date('2021-02-02 12:00:00'),
    "tempoEstimado": "2 horas",
  },
  {
    "id": 5,
    "descricao": "Gerar QRCode",
    "dataMaximaConclusao": new Date('2020-02-15 12:00:00'),
    "tempoEstimado": "6 horas",
  },
  {
    "id": 6,
    "descricao": "Importação de dados de integração",
    "dataMaximaConclusao": new Date('2020-02-15 12:00:00'),
    "tempoEstimado": "8 horas",
  },
]