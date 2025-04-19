let database = [
    {
        name: "khadija baidi",
        email: "khadijabaidi@gmail.com",
        age: 21,
        password: '2000',
        balance: 1000,
        history: [],
        loan: 0
    }
];
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

if (ask == "sign up") {
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
          alert("ur name is too short")
          people.name= ansr.slice(0,-1)
        }
    } else {
        alert("ur mail is too short or doesnt contain a special character")
      people.email=email.slice(0,-1)
    }

} else {
    alert("u should fill all the blanks")
}

// Age
let age = prompt("how old are u?")
if (age1.length >= 3) {
    alert("you are old enough")
} else {
    alert("welcome")
}

// log in
function login() {
    let email = prompt("Enter your email").toLowerCase().trim()
    let password = prompt("Enter your password").trim()
    let user = user.find(e => e.email === email)

    if (user && user.password === password) {
        alert("welcome")
        
    } else {
        alert("cant login try again")
    }
}

