import { CreateWorkspaceDTO } from "../useCases/workspace/createWorkspaceUseCase/CreateWorkspaceDTO";

export default class Workspace {

    private id: string;
    private name: string;
    private description: string;
    private createdAt: Date;
    private updatedAt: Date;
    private isLocked: boolean;
    private password?: string;
    private userId: string;

    constructor(id: string = "", name: string = "", description: string = "", userId: string, createdAt: Date = new Date(), updatedAt: Date = new Date(),
        isLocked: boolean = false, password?: string) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isLocked = isLocked;
        this.userId = userId;

        if (password) this.password = password;
    }

    static createWorkspace(newWorkspace: CreateWorkspaceDTO): Workspace {
        return new Workspace("", newWorkspace.name, newWorkspace.description, newWorkspace.userId);
    }

    public get getId(): string {
        return this.id;
    }

    public get getName(): string {
        return this.name;
    }

    public get getDescription(): string {
        return this.description;
    }

    public get getCreatedAt(): Date {
        return this.createdAt;
    }

    public get getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public get getIsLocked(): boolean {
        return this.isLocked;
    }

    public get getUserId(): string {
        return this.userId;
    }
}