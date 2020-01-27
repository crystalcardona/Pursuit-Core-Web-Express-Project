document.addEventListener("DOMContentLoaded", () => {

    let className = document.querySelector("#className");
    let teacherName = document.querySelector("#teacherName");
    let addClass = document.querySelector("#addClass");
    let enrollClass = document.querySelector("#studentClass");
    let enrollName = document.querySelector("#studentName");
    let enrollAge = document.querySelector("#studentAge");
    let enrollCity = document.querySelector("#studentCity");
    let enrollGrade = document.querySelector("#studentGrade");
    let classList = document.querySelector("#classList");
    let cityList = document.querySelector("#cityList");
    let checkFailing = document.querySelector("#checkFailing");
    let listSubmit = document.querySelector("#listSubmit")
    let form1 = document.querySelector("#one")
    let form2 = document.querySelector("#two")
    let form3 = document.querySelector("#three")
    let div1 = document.querySelector("#divOne")
    let div2 = document.querySelector("#divTwo")
    let div3 = document.querySelector("#three")

 

    form1.addEventListener("submit", async (e) => {
        e.preventDefault();
        try { 
        axios.post(`http://localhost:3000/class/${className.value}/${teacherName.value}`).then(res => {
            let result = document.createElement("p");
            let newClass = className.value.charAt(0).toUpperCase() + className.value.slice(1)
            let teacher = teacherName.value.charAt(0).toUpperCase() + teacherName.value.slice(1)
            result.innerText = `Teacher: ${teacher} : Class: ${newClass}` 
            div1.appendChild(result)
            debugger
            }) 
        }catch(err){
            console.log(err)
        }
        
    }) 

    form2.addEventListener("submit", async (e) => {
        e.preventDefault()
        try {
            axios.post(`http://localhost:3000/class/${enrollClass.value}/enroll`, {name: enrollName.value, age: enrollAge.value, city: enrollCity.value, grade: enrollGrade.value}).then(res => {
                let enrolledStudent = res.config.data
                    let result = document.createElement("p")
                    result.innerText = `New Enrolled Student: ${enrolledStudent}`
                    div2.appendChild(result)
                })
        } catch (err){
            console.log(err)
        }
    })


    form3.addEventListener("submit", async (e) => {
        e.preventDefault();
        try{
            axios.get(`http://localhost:3000/${classList.value}/students`).then(res => {
                let name = res.data.name
                let students = res.data.students
                debugger

                        let p = document.createElement("p");
                        p.innerText = `Class: ${name}, Student List: ${students}`
                        div3.appendChild(p)
                
            })
        }catch(err){
            console.log(err)
        }
    })


    

})