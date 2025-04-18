// asking user for info
let ask = prompt("login , sing up , change password").trim()
class Person {
    constructor(email, name, password) {
        this.email = email
        this.name = name
        this.password = password
    }
}
let people = new Person([], [], [])

console.log(people);

if (ask == "login") {
    let email = prompt("enter your email").split(" ").join("")
    people.email = email
    if (email.length > 10) {
        let name = prompt("enter your name ").split(" ")
        let name1 = name[0].charAt(0).toUpperCase()+ name[0].slice(1)
        let name2 = name[1].charAt(0).toUpperCase()+ name[1].slice(1)
 let ansr =name1+ name2
        people.name =ansr
        if (ansr.length > 5) {
            let password = prompt("enter your pasworde")
            people.password = password
            let cnfrm = prompt("confirm ur password")
            if (password === cnfrm) {
                alert("welcome")

            } else {
                alert("wrong password")
                password.slice(0, -1)
            }
        } else {
          alert("smaitake s4are mane 5 l 7orofe ")
          people.name= ansr.slice(0,-1)
        }
    } else {
        alert("3afake email dyalake ya s4are mane 10 dyale caractire ya mafihche @")
      people.email=email.slice(0,-1)
    }

} else {
    alert("3afake lmara jaya 3amare hadchi")
}
