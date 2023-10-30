import 'dotenv/config'
import Fastify from 'fastify';
import userRoutes from './routes/user-routes';
import authRoutes from './routes/auth-routes';
import workspaceRoutes from './routes/workspace-routes';
import columnRoutes from './routes/column-routes';
import cardRoutes from './routes/card-routes';
import cors from '@fastify/cors';

const port = parseInt(process.env.PORT as string, 10);

const fastify = Fastify({
	logger: true,
});

fastify.register(cors, { origin: 'http://localhost:3000' });
fastify.register(userRoutes);
fastify.register(authRoutes);
fastify.register(workspaceRoutes);
fastify.register(columnRoutes);
fastify.register(cardRoutes);

fastify.listen({ port: port || 3333 }, function (err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
