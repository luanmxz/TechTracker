import 'dotenv/config'
import Fastify from 'fastify';
import userRoutes from './routes/user-routes';

const port = parseInt(process.env.SERVER_PORT as string, 10);

const fastify = Fastify({
	logger: true,
});

fastify.register(userRoutes);

fastify.listen({ port: port }, function (err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
