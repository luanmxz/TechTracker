import 'dotenv/config'
import Fastify from 'fastify';
import workspaceRoutes from './routes/workspace-routes';
import userRoutes from './routes/user-routes';
import adminRoutes from './routes/admin-routes';

const port = parseInt(process.env.SERVER_PORT as string, 10);

const fastify = Fastify({
	logger: true,
});

fastify.register(workspaceRoutes);
fastify.register(userRoutes);
fastify.register(adminRoutes);

fastify.listen({ port: port }, function (err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
