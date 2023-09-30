import Fastify from 'fastify';
import workspacesMethods from './workspaces/workspaces'
import { IWorkspace } from './workspaces/interfaces/IWorskpace'

const fastify = Fastify({
	logger: true,
});

fastify.get('/api/getWorkspaces', async (req, res) => {
	try {
		
		const workspaces = await workspacesMethods.getWorkspaces();

		console.log(workspaces[0].name);

		res.send(workspaces);
	} catch (error: any) {
		res.status(500).send({ error: error.message });
	}
});

fastify.post('/api/createWorkspace', async (req, res) => {
	try {
		const reqBody: IWorkspace = req.body as IWorkspace;
		const workspace = await workspacesMethods.createWorkspace(reqBody);

		res.status(201).send({ message: 'Workspace criado com sucesso!' })
	} catch (error: any) {
		res.status(500).send({ error: error.message });
	}
});

fastify.listen({ port: 3000 }, function (err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
