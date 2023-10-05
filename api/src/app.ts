import "reflect-metadata";
import "./external/tsyringe/container";
import 'dotenv/config'
import Fastify from 'fastify';
import userRoutes from './routes/user-routes';
import authRoutes from './routes/auth-routes';

const port = parseInt(process.env.PORT as string, 10);

const fastify = Fastify({
	logger: true,
});

fastify.register(userRoutes);
fastify.register(authRoutes);

fastify.listen({ port: port || 3000 }, function (err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
