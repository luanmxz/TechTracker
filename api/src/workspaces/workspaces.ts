import sql from '../database/db.js';
import { IWorkspace } from './interfaces/IWorskpace.js';

async function getWorkspaces() {
    try {
        const workspaces = await sql`
			select name from tb01_workspaces
		`;

        return workspaces;
    } catch (error) {
        throw error;
    }
}

async function createWorkspace(workspace: IWorkspace) {
    try {
        await sql`
            insert into tb01_workspaces (name) values (${workspace.name});
        `;
    } catch (error) {
        throw error;
    }

}


const workspacesMethods = {
    getWorkspaces,
    createWorkspace
};

export default workspacesMethods;