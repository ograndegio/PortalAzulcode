import { Technology } from '../models/technology.model';

export const TECHNOLOGIES: Technology[] = [
  { name: 'TypeScript', category: 'Linguagens e Frameworks', description: 'Tipagem estática para aplicações JavaScript escaláveis.', logo: 'assets/images/technologies/typescript.png' },
  { name: 'C#', category: 'Linguagens e Frameworks', description: 'Linguagem robusta para serviços e sistemas corporativos.', logo: 'assets/images/technologies/csharp.png' },
  { name: '.NET Core', category: 'Linguagens e Frameworks', description: 'Framework para APIs e aplicações de alta performance.', logo: 'assets/images/technologies/dotnet.png' },
  { name: 'Node.js', category: 'Linguagens e Frameworks', description: 'Runtime para APIs, integrações e serviços em tempo real.', logo: 'assets/images/technologies/nodejs.png' },
  { name: 'Angular', category: 'Linguagens e Frameworks', description: 'Framework front-end para interfaces modernas e responsivas.', logo: 'assets/images/technologies/angular.png' },
  { name: 'SignalR', category: 'Mensageria e Comunicação', description: 'Comunicação em tempo real para aplicações interativas.', logo: 'assets/images/technologies/signalr.png' },
  { name: 'RabbitMQ', category: 'Mensageria e Comunicação', description: 'Broker de mensagens para arquiteturas assíncronas.', logo: 'assets/images/technologies/rabbitmq.png' },
  { name: 'Apache Kafka', category: 'Mensageria e Comunicação', description: 'Streaming de eventos para alta escalabilidade.', logo: 'assets/images/technologies/kafka.png' },
  { name: 'SQL Server', category: 'Bancos de Dados e Armazenamento', description: 'Banco relacional para operações transacionais críticas.', logo: 'assets/images/technologies/sqlserver.png' },
  { name: 'PostgreSQL', category: 'Bancos de Dados e Armazenamento', description: 'Banco open-source robusto para workloads analíticos e transacionais.', logo: 'assets/images/technologies/postgresql.png' },
  { name: 'MySQL', category: 'Bancos de Dados e Armazenamento', description: 'Banco relacional amplamente adotado em sistemas web.', logo: 'assets/images/technologies/mysql.png' },
  { name: 'Redis', category: 'Bancos de Dados e Armazenamento', description: 'Cache em memória para baixa latência e alta disponibilidade.', logo: 'assets/images/technologies/redis.png' },
  { name: 'MinIO', category: 'Bancos de Dados e Armazenamento', description: 'Armazenamento de objetos para assets e backups.', logo: 'assets/images/technologies/minio.png' },
  { name: 'Report Builder', category: 'Relatórios', description: 'Criação de relatórios gerenciais e operacionais.', logo: 'assets/images/technologies/reportbuilder.png' },
  { name: 'Jasper Reports', category: 'Relatórios', description: 'Engine para geração de relatórios personalizados.', logo: 'assets/images/technologies/jasper.png' },
  { name: 'Docker', category: 'Infraestrutura', description: 'Containerização para ambientes padronizados e confiáveis.', logo: 'assets/images/technologies/docker.png' },
  { name: 'DevOps', category: 'Infraestrutura', description: 'Práticas de desenvolvimento e operações para entrega contínua.', logo: 'assets/images/technologies/devops.png' },
  { name: 'Harbor', category: 'Infraestrutura', description: 'Registro de imagens de container seguro e confiável.', logo: 'assets/images/technologies/harbor.png' }
];
