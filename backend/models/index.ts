import Station from './stations';
import Route from './routes';

Route.hasMany(Station);
Station.belongsTo(Route);

export { Route, Station }