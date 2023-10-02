import 'dotenv/config'
import Fastify from 'fastify';
import workspacesRoutes from './workspaces/routes';
import usersRoutes from './users/routes';
import adminRoutes from './admin/routes';

const port = parseInt(process.env.SERVER_PORT as string, 10);

const fastify = Fastify({
	logger: true,
});

fastify.register(workspacesRoutes);
fastify.register(usersRoutes);
fastify.register(adminRoutes);

fastify.listen({ port: port }, function (err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
