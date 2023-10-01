import { FastifyInstance } from 'fastify';
import supabase from '../database/db-supabase';

export default async function routes(fastify: FastifyInstance, options: any) {

    fastify.get('/api/workspaces/get', async () => {

        const { data, error } = await supabase.from('tb01_workspaces')
            .select('name');

        if (error) throw error;

        return data;
    });

    fastify.get('/api/workspaces/get/:id', async (req: any, res: any) => {

        const { data, error } = await supabase.from('tb01_workspaces')
            .select('name')
            .eq('id', req.params.workspaceId)

        if (error) res.status(500).send({ error: error.message });

        return data;
    });

    fastify.get('/api/workspaces/getByOwner/:ownerId', async (req: any, res: any) => {

        //TODO: Validate if is the owner(or admin) that is requesting the workspace
        const { data, error } = await supabase.from('tb01_workspaces')
            .select('name')
            .eq('owner', req.params.ownerId);

        if (error) res.status(500).send({ error: error.message });

        return data;
    });

    fastify.post('/api/workspaces/create', async (req: any, res: any) => {

        const { error } = await supabase.from('tb01_workspaces').insert({ name: req.body.name });

        if (error) res.status(500).send({ error: error.message });
    });

    fastify.delete('/api/workspaces/delete/:id', async (req: any, res: any) => {

        const { error } = await supabase.from('tb01_workspaces')
            .delete()
            .eq('id', req.params.id);

        if (error) res.status(500).send({ error: error.message });
    })

    //TODO: Update method
    fastify.put('/api/workspaces/update/:id', async (req: any, res: any) => {

        const { error } = await supabase.from('tb01_workspaces')
            .update({ name: req.body.name, updated_at: new Date().toLocaleString() })
            .eq('id', req.params.id);

        if (error) res.status(500).send({ error: error.message });
    })
}