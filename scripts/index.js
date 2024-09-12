class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 1;
    }
    
    getAllActivities() {
        return this.activities;
    } 

    createActivity(title, description, imgUrl) {
        const activityId = this.id;
        const newActivity = new Activity(activityId, title, description, imgUrl);
        this.activities.push(newActivity);
        this.id++;
    }

    deleteActivity(id){
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}
