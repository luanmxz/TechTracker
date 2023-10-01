import Fastify from 'fastify';
import workspacesRoutes from './workspaces/routes';
import usersRoutes from './users/routes';
import adminRoutes from './admin/routes';

const fastify = Fastify({
	logger: true,
});

fastify.register(workspacesRoutes);
fastify.register(usersRoutes);
fastify.register(adminRoutes);

fastify.listen({ port: 3000 }, function (err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
