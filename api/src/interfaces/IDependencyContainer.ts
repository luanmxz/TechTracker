export interface IDependencyContainer {

    getRepositoryInstance(): any;

    getUseCaseInstance(): any;

    getControllerInstance(): any;

}