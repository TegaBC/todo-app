class Project{
    constructor(title, description, dueDate, priority, completed){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }

    getTitle(){
        return this.title;
    }

}