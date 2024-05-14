import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    migrations: [
        'src/database/migrations/*.ts',
      ],
    entities: ["./src/models/**.ts"],
    logging: true
})


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

// export default async (): Promise<Connection> => {
//     const defaultOptions = await getConnectionOptions();

//     return createConnection(
//         Object.assign(defaultOptions, {
//             database: process.env.NODE_ENV === 'test' ? "" : defaultOptions.database
//         })
//     )
// }