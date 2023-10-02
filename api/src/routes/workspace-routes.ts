import { FastifyInstance } from 'fastify';
import supabase from '../supabase/supabase';

import { PrismaClient } from '@prisma/client';
import { Workspace } from '../interfaces/Workspace';

const prisma = new PrismaClient();

export default async function routes(fastify: FastifyInstance, options: any) {

    fastify.get('/api/workspaces/get', async () => {

        const workspaces: Workspace[] = await prisma.workspace.findMany();

        return workspaces;
    });

    fastify.get('/api/workspaces/get/:id', async (req: any, res: any) => {

        const workspace: Workspace = await prisma.workspace.findUniqueOrThrow({ where: { id: req.params.id } });

        return workspace;
    });

    fastify.get('/api/workspaces/getByOwner/:ownerId', async (req: any, res: any) => {

        //TODO: Validate if is the owner(or admin) that is requesting the workspace

        const workspaces: Workspace[] = await prisma.workspace.findMany({ where: { userId: req.params.ownerId } });

        return workspaces;
    });

    fastify.post('/api/workspaces/create', async (req: any, res: any) => {

        await prisma.workspace.create({
            data: {
                title: req.body.title,
                description: req.body.description,
                User: req.body.user,
                //userId
            }
        });
    });

    fastify.delete('/api/workspaces/delete/:id', async (req: any, res: any) => {

        await prisma.workspace.delete({ where: { id: req.params.id } });
    })

    //TODO: Update method
    fastify.put('/api/workspaces/update/:id', async (req: any, res: any) => {
    })
}