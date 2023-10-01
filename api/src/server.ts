import Fastify from 'fastify';
import workspacesRoutes from './workspaces/routes';

const fastify = Fastify({
	logger: true,
});

fastify.register(workspacesRoutes);

fastify.listen({ port: 3000 }, function (err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
