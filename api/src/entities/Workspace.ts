import { CreateWorkspaceDTO } from "../useCases/workspace/createWorkspaceUseCase/CreateWorkspaceDTO";

export default class Workspace {

    private id: string;
    private title: string;
    private description: string;
    private createdAt: Date;
    private updatedAt: Date;
    private isLocked: boolean;
    private password?: string;
    private userId: string;
    private columns: any[];
    private active: boolean;

    constructor(id: string = "", title: string = "", description: string = "", userId: string, createdAt: Date = new Date(), updatedAt: Date = new Date(),
        isLocked: boolean = false, columns: any[] = [], active: boolean = false, password?: string) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isLocked = isLocked;
        this.userId = userId;
        this.columns = columns;
        this.active = active;

        if (password) this.password = password;
    }

    static createWorkspace(createWorkspaceDTO: CreateWorkspaceDTO): Workspace {
        return new Workspace("", createWorkspaceDTO.name, createWorkspaceDTO.description, createWorkspaceDTO.userId);
    }

    public get getId(): string {
        return this.id;
    }

    public get getTitle(): string {
        return this.title;
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

    public get getColumns(): any[] {
        return this.columns;
    }

    public get getActive(): boolean {
        return this.active;
    }
}