let taskArray=[{name:"Wake Up"},];

let form=document.getElementById("todoForm");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("form was hit");
    
    let formData = new FormData(form); 
    console.log(formData);
    let input=document.querySelector("#task");

    if(input.value.trim()==="")
    {
        alert("input field cannot be empty");
        return;
    }

    taskArray.push({name:input.value});
    input.value="";
    taskRender();
});

let taskRender= ()=>{
    const unList= document.querySelector('ul');
    unList.innerHTML="";
    
    taskArray.forEach((element,index)=>{

        let card_container=document.createElement("div");
        let deleteButton=document.createElement("button");
        deleteButton.textContent="❌";

        let li= document.createElement("li");
        li.textContent=element.name;
        li.classList.add("card","py-7","px-25","mb-5", );

        card_container.classList.add("flex");
        deleteButton.classList.add("delete-button","py-7","px-7","mb-5");
        card_container.appendChild(li);
        card_container.appendChild(deleteButton);
        unList.appendChild(card_container);

        

        li.addEventListener("click", () => {

            if(li.classList.contains("strike"))
            {
                li.classList.remove("strike");
            }
            else
            {
                li.classList.add("strike");
            }
           
        });

        deleteButton.addEventListener("click",()=>{
            deleteTask(index);
        });
    });
}

const deleteTask=(index)=>{
    taskArray.splice(index,1);
    alert("Task Deleted");
    taskRender();
}


taskRender();