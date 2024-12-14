class ProjectModel {
    private name : string;
    private description : string;
    private url : string;

    public constructor(name: string, description: string, url: string) {
        this.name = name;
        this.description = description;
        this.url = url;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getUrl(): string {
        return this.url;
    }
};

export default ProjectModel;