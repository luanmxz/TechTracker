import { FastifyInstance } from 'fastify';
import supabase from '../supabase/supabase';

export default async function routes(fastify: FastifyInstance, options: any) {

    fastify.get('/api/users/get', async (req: any, res: any) => {
        //TODO: encrpyt the password
        const { data, error } = await supabase.auth.getUser();

        if (error) res.status(500).send({ error: error.message });

        return data;
    });

    fastify.get('/api/users/get/:jwt', async (req: any, res: any) => {

        const { data, error } = await supabase.auth.getUser(req.params.jwt);

        if (error) res.status(500).send({ error: error.message });

        return data;
    });

    fastify.post('/api/users/signUp', async (req: any, res: any) => {

        //TODO: create a route and page to forward when the user confirms their email
        const { data, error } = await supabase.auth.signUp({
            email: req.body.email,
            password: req.body.password,
            options: {
                data: {
                    name: req.body.name
                }
            }
        });

        if (error) res.status(500).send({ error: error.message });

        return data.user?.email
    });

    fastify.post('/api/users/signIn', async (req: any, res: any) => {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: req.body.email,
            password: req.body.password
        });

        if (error) res.status(500).send({ error: error.message });

        return data;
    });

    fastify.get('/api/users/signOut', async (req: any, res: any) => {

        const { error } = await supabase.auth.signOut();

        if (error) res.status(500).send({ error: error.message });
    })

}