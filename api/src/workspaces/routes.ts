import { FastifyInstance } from 'fastify';
import supabase from '../database/db-supabase';
import { timestamp } from 'rxjs';

async function routes(fastify: FastifyInstance, options: any) {

    fastify.get('/api/getWorkspaces', async () => {

        const { data, error } = await supabase.from('tb01_workspaces')
            .select('name');

        if (error) throw error;

        return data;
    });

    fastify.get('/api/getWorkspaceById/:workspaceId', async (req: any, res: any) => {

        const { data, error } = await supabase.from('tb01_workspaces')
            .select('name')
            .eq('id', req.params.workspaceId)

        if (error) res.status(500).send({ error: error.message });

        return data;
    });

    fastify.get('/api/getWorkspacesByOwner/:ownerId', async (req: any, res: any) => {

        //TODO: Validate if is the owner(or admin) that is requesting the workspace
        const { data, error } = await supabase.from('tb01_workspaces')
            .select('name')
            .eq('owner', req.params.ownerId);

        if (error) res.status(500).send({ error: error.message });

        return data;
    });

    fastify.post('/api/createWorkspace', async (req: any, res: any) => {

        const { error } = await supabase.from('tb01_workspaces').insert({ name: req.body.name });

        if (error) res.status(500).send({ error: error.message });
    });

    fastify.delete('/api/deleteWorkspace/:id', async (req: any, res: any) => {

        const { error } = await supabase.from('tb01_workspaces')
            .delete()
            .eq('id', req.params.id);

        if (error) res.status(500).send({ error: error.message });
    })

    //TODO: Update method
    fastify.put('/api/updateWorkspace/:id', async (req: any, res: any) => {

        const { error } = await supabase.from('tb01_workspaces')
            .update({ name: req.body.name, updated_at: new Date().toLocaleString() })
            .eq('id', req.params.id);

        if (error) res.status(500).send({ error: error.message });
    })
}


export default routes;