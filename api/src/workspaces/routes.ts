import sql from '../database/db'
import { IWorkspace } from './interfaces/IWorskpace';


async function routes(fastify: any, options: any) {

    fastify.get('/api/getWorkspaces', async () => {
        try {
            const workspaces = await sql`
                select name from tb01_workspaces
            `;

            return workspaces;
        } catch (error) {
            throw error;
        }
    });

    fastify.get('/api/getWorkspaceById/:workspaceId', async (req: any, res: any) => {

        try {
            const workspace = await sql`
                select name from tb01_workspaces where id = ${req.params.workspaceId}
            `
            return workspace;
        } catch (error: any) {
            res.status(500).send({ error: error.message });
        }

    });

    fastify.get('/api/getWorkspacesByOwner/:ownerId', async (req: any, res: any) => {
        try {
            //TODO: Validate if is the owner(or admin) that is requesting the workspace
            const workspaces = await sql`
                select name from tb01_workspaces where owner = ${req.params.ownerId}
            `

            return workspaces;

        } catch (error: any) {
            res.status(500).send({ error: error.message });
        }
    });

    fastify.post('/api/createWorkspace', async (req: any, res: any) => {
        try {
            const workspace: IWorkspace = req.body as IWorkspace;

            await sql`
                insert into tb01_workspaces (name) values (${workspace.name});
            `;

            res.status(201).send({ message: 'Workspace criado com sucesso!' });
        } catch (error: any) {
            res.status(500).send({ error: error.message });
        }
    });

    fastify.delete('/api/deleteWorkspace/:id', async (req: any, res: any) => {
        try {
            await sql`
                delete from tb01_workspaces where id = ${req.params.id}
            `

            res.status(204).send();
        } catch (error: any) {
            res.status(500).send({ error: error.message });
        }
    })

    //TODO: Update method

}


export default routes;