import { Sequelize } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
import { DATABASE_URL } from './config';



export const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres'
});

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Auth OK!")
        await runMigrations();
        console.log('Connected to database');
    } catch (error: any) {
        console.log('Failed to connect to the database');
        console.log(error.message);
        return process.exit(1);
    }
    return null;
};

const migrationConf = {
    migrations: {
        glob: 'migrations/*.ts'
    },
    storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
    context: sequelize.getQueryInterface(),
    logger: console
};

const runMigrations = async () => {
    const migrator = new Umzug(migrationConf);
    const migrations = await migrator.up();
    console.log('Migrations are up to date', {
        files: migrations.map((mig: any) => mig.name)
    });
};

const rollBackMigration = async () => {
    await sequelize.authenticate();
    const migrator = new Umzug(migrationConf);
    await migrator.down();
}

export { connectToDatabase, runMigrations, rollBackMigration };