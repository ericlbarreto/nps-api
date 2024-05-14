import { DataSource } from 'typeorm';

// Configuração do DataSource
const databasePath = process.env.NODE_ENV === 'test' ? './src/database/database.test.sqlite' : './src/database/database.sqlite';

console.log(process.env.NODE_ENV === 'test' ? 'AMBIENTE DE TESTE' : 'AMBIENTE DE PRODUÇÃO');

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: databasePath,
  migrations: [
    'src/database/migrations/*.ts',
  ],
  entities: ["./src/models/**.ts"],
  logging: true,
});

// Inicialização do DataSource
export const initializeDataSource = async (): Promise<DataSource> => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
    return AppDataSource; // Retorna o DataSource após a inicialização bem-sucedida
  } catch (err) {
    console.error("Error during Data Source initialization", err);
    throw err; // Rejeita a Promise para sinalizar um erro durante a inicialização
  }
};
