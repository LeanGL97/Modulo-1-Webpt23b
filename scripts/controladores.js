function activityCard(activity) {
    const {title, description, imgUrl} = activity;

    const newTitle = document.createElement("h3");
    const newDescription = document.createElement("p");
    const newImg = document.createElement("img");
    const deleteButton = document.createElement("button");

    newTitle.innerHTML = title;
    newDescription.innerHTML = description;
    newImg.src = imgUrl;
    deleteButton.innerHTML = "Eliminar";
    
    newTitle.classList.add('activity__result__tittle');
    newDescription.classList.add('activity__result__description');
    newImg.classList.add('activity__result__imgUrl');
    deleteButton.classList.add('activity__result__delete');

    const cardContainer = document.createElement ("div");
    cardContainer.classList.add('activity__card__container');
    cardContainer.appendChild(newTitle);
    cardContainer.appendChild(newDescription);
    cardContainer.appendChild(newImg);
    cardContainer.appendChild(deleteButton);

deleteButton.addEventListener("click", () => deleteActivity(activity.id));

    return cardContainer;
}

function deleteActivity(id) {
    newRepository.deleteActivity(id);
    renderActivities();
}

function renderActivities() { 
    const resultContainer = document.querySelector(".form__result");

    resultContainer.innerHTML = '';
    
    const activities = newRepository.getAllActivities();

    const activitiesElements = activities.map(activityCard);

    activitiesElements.forEach(element => resultContainer.appendChild(element));
}

function handler() {

    const inputTitle = document.getElementById("nombreDeLaActividad");
    const inputDescription = document.getElementById("descripcionDeLaActividad");
    const inputImg = document.getElementById("imagenDeLaActividad");

    const title = inputTitle.value.trim();
    const description = inputDescription.value.trim();
    const imgUrl = inputImg.value.trim();

    if(!title || !description || !imgUrl) {
        alert("Complete todos los datos para continuar.");
        return;
    }

    newRepository.createActivity(title, description, imgUrl);

    renderActivities();

    inputTitle.value = "";
    inputDescription.value = "";
    inputImg.value = "";
}