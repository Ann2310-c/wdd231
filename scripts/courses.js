const courses = [
    {code:"WDD 130", type:"WDD", credits:2},
    {code:"WDD 131", type:"WDD", credits:2},
    {code:"WDD 231", type:"WDD", credits:2}
];

const container = document.querySelector(".course-list");
const buttons = document.querySelectorAll(".course-buttons button");
const creditsText = document.querySelector(".credits");

function displayCourses(list){
    container.innerHTML="";
    list.forEach(course=>{
        const div = document.createElement("div");
        div.className="course";
        div.textContent=course.code;
        container.appendChild(div);
    });
    calculateCredits(list);
}

function calculateCredits(list){
    const total = list.reduce((sum, course)=> sum + course.credits,0);
    creditsText.textContent = "The total credits for course listed above is " + total;
}
displayCourses(courses);


buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const filter = button.textContent;
        if(filter==="All"){
            displayCourses(courses);
        }
        else{
            const filtered = courses.filter(course=>course.type===filter);
            displayCourses(filtered);
        }
    });
});