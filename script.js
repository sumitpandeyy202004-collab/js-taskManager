const addTask = document.querySelector("#taskTitle");
const category = document.querySelector("#taskCategory");
const addbtn = document.querySelector(".add-button");
const taskContainer = document.querySelector(".task-grid");

addbtn.addEventListener("click",function(value){

    value.preventDefault();    

    if(addTask.value.trim() === "" || category.value === "") return;

    const now = new Date();

    // 2. Extract specific components
    const year  = now.getFullYear();   // e.g., 2026
    const month = now.getMonth() + 1;  // Returns 0-11 (January is 0), so add 1!
    const day   = now.getDate();       // Returns the day of the month (1-31)
    
    const top_article = document.createElement("article");
    top_article.classList.add("task-card","task-blue");

    const task_header = document.createElement("div");
    task_header.classList.add("task-header");

    const label = document.createElement("label");
    label.classList.add("custom-checkbox");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");

    const span = document.createElement("span");
    span.classList.add("checkmark");

    const headingThird = document.createElement("h3");
    headingThird.classList.add("task-title");
    headingThird.textContent = addTask.value;

    label.append(checkbox,span);
    task_header.append(label,headingThird);

    
    const date = document.createElement("p");
    date.classList.add("task-date");
    date.textContent = `▦ ${year}-${month}-${day}`;
    
    const task_footer = document.createElement("div");
    task_footer.classList.add("task-footer");

    const task_badges = document.createElement("div");
    task_badges.classList.add("task-badges");
    task_footer.append(task_badges);

    const badge = document.createElement("span");
    badge.classList.add("badge","study");
    badge.textContent = category.value;

    const badge_status = document.createElement("span");
    badge_status.classList.add("badge","Incompleted");
    badge_status.textContent = "InCompleted";

    task_badges.append(badge,badge_status);

    const task_actions = document.createElement("div");
    task_actions.classList.add("task-actions");
    
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-button");
    editBtn.setAttribute("type","button");
    editBtn.textContent = "✎ Edit";


    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.setAttribute("type","button");
    deleteBtn.textContent = "▤ Delete";

    task_actions.append(editBtn,deleteBtn);

    
    task_footer.append(task_badges,task_actions);
    
    top_article.append(task_header,date,task_footer);
    
    taskContainer.append(top_article);

    deleteBtn.addEventListener("click",function(){
        top_article.remove();
    })

    document.querySelector("form").reset();          
})