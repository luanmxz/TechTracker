import { FastifyInstance } from 'fastify';
import supabase_admin from '../database/db-supabase-admin';


export default async function routes(fastify: FastifyInstance, options: any) {

    fastify.get('/api/admin/users/get', async (req: any, res: any) => {
        //Defaults to return 50 users per page.
        const { data: { users }, error } = await supabase_admin.listUsers();

        if (error) res.status(500).send({ error: error.message });

        return users;
    });

    fastify.get('/api/admin/users/get/:id', async (req: any, res: any) => {

        const { data, error } = await supabase_admin.getUserById(req.params.id);

        if (error) res.status(500).send({ error: error.message });

        return data;
    });

    fastify.delete('/api/admin/users/delete/:id', async (req: any, res: any) => {

        const { error } = await supabase_admin.deleteUser(req.params.id);

        if (error) res.status(500).send({ error: error.message });
    })

}