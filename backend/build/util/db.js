"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollBackMigration = exports.runMigrations = exports.connectToDatabase = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const umzug_1 = require("umzug");
const config_1 = require("./config");
console.log(config_1.DATABASE_URL);
exports.sequelize = new sequelize_1.Sequelize(config_1.DATABASE_URL, {
    dialect: 'postgres'
});
const connectToDatabase = async () => {
    try {
        await exports.sequelize.authenticate();
        console.log("Auth OK!");
        await runMigrations();
        console.log('Connected to database');
    }
    catch (error) {
        console.log('Failed to connect to the database');
        console.log(error.message);
        return process.exit(1);
    }
    return null;
};
exports.connectToDatabase = connectToDatabase;
const migrationConf = {
    migrations: {
        glob: 'migrations/*.ts'
    },
    storage: new umzug_1.SequelizeStorage({ sequelize: exports.sequelize, tableName: 'migrations' }),
    context: exports.sequelize.getQueryInterface(),
    logger: console
};
const runMigrations = async () => {
    const migrator = new umzug_1.Umzug(migrationConf);
    const migrations = await migrator.up();
    console.log('Migrations are up to date', {
        files: migrations.map((mig) => mig.name)
    });
};
exports.runMigrations = runMigrations;
const rollBackMigration = async () => {
    await exports.sequelize.authenticate();
    const migrator = new umzug_1.Umzug(migrationConf);
    await migrator.down({ to: 0 });
};
exports.rollBackMigration = rollBackMigration;
