// alert ('salut')
// // int
// let age = 22;
// // big int
// let etoiles = 100000000000n
// // floar
// let price = 190.99
// // string
// let name ="Chad"
// // boolean
// let faceID = true
// // array
// const nains =["simplet", "dormeur", "grincheux"]
// // object 
// let article = {
//     name: "Rasoir",
//     price: 2
// }
// //null
// let anne = null

// let number1 = 2
// let number2 = 3

// if (number1 == number2) {
//     console.log (" le nombre 1 est" + number1 + "et le nombre 2 est " + number2 )
// } else {
//     console.log (" C'est pas bon, le nombre 1 est " + number1 + " et le nombre 2 est " + number2 )
// }

// let a = 4
// let b = 4
// let c = 3

// if (a == b) {
//     console.log ("c'est bon")
// } else {
//     console.log ("c pas bon")
// }

// if (c < b && a+c != 3) {
//     console.log ("ok")
// } else {
//     console.log ("raté")
// }

// switch(a) {
//     case b:
//     console.log ('égal à b')
//     break
//     case c : 
//     console.log ('égal à c')
//     break 
//     default: 
//     console.log ('égal à rien')
// }
// let a1 = 24
// for (let i = 0; i < a1; i++) {
//     console.log('oklm')
// }

// let a = 3
// let b = 13
// function addition (numero1, numero2) {
//     console.log(numero1 + numero2)
//     }
    
// addition (a, b)


// while(a < 10) {
//     a++
//     console.log(a)
//     if(a == 8) {
//         break
//     }
//     if (a == 7)
//     {
//         continue
//     }  
// 

let a = "Jean"
let b = "Paul"
let result = check(a,b)
function check(nom1, nom2) { 
    if (nom1 == nom2) {
        return true
    } else {
        return false
    }
    
}
console.log(result)

let animals = ['cat', 'dog', 'bird']

animals.forEach ((animal) =>{
 console.log(animal)
})

console.log(animals[1])

let names =[]

names.push("Vincent")
names.push("Paul")
names.push("Arthur")

names.forEach((name)=>{
    name=name+" Va a la peche"
    console.log(name)
})
 class Eleve {
    constructor(name, attack, defense) {
        this.attack = attack;
        this.defense = defense;
        this.name = name;
    }

    getAttack() {
        console.log(this.attack)
    }
 }

 let chad = new Eleve ("Chad", 6, 5)
 let alexis = new Eleve("Alexis", 9, 5)
 console.log(chad)
