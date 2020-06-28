const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 4,
        weight: 5
    },
    {
        name: 'marrom',
        type: 'cat',
        age: 2,
        weight: 1
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 0.01
    },
    {
        name: 'bolinha',
        type: 'dog',
        age: 15,
        weight: 30
    },
    {
        name: 'mingal',
        type: 'cat',
        age: 6,
        weight: 2
    },
    {
        name: 'pe de pano',
        type: 'horse',
        age: 1,
        weight: 70
    }
    
]




// >> FILTER <<
//Os metodos comentados a seguir sao todos iguais, porem estao escritos de maneira diferentes
/*
const newPets = pets.filter((pet) => {
    return pet.age < 5
})*/


const eMenorQueCinco =  (numero) => {
    return numero < 5
}

/*
const newPets = pets.filter((pet) => {
    return eMenorQueCinco(pet.age)
})*/

const newPets = pets.filter( ({ age }) => eMenorQueCinco(age)) 

console.log(pets)
console.log(newPets)

// >> MAP <<
//retorna novo array com a msm qtd de elemntos que o array iniical
const petNames = pets.map( (pet) => {
    return pet.name
})

console.log(petNames)

// >> FOREACH <<


const forEachPetNames = []

pets.forEach ( (pet) => {
    forEachPetNames.push(pet.name)
})
    
console.log(forEachPetNames)

// >> REDUCE <<
//peso de todos os animais somados


const totalWeight = pets.reduce( (total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeight)


//agora retornando 2 valores
/*
const totalWeight = pets.reduce( (total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, {totalAge: 0, totalWeight: 0})

console.log(totalWeight)
*/

//agora somando peso so dos cachorros

/*
const totalWeight = pets.reduce( (total, pet) => {
    if(pet.type !== 'dog') return total

    return total + pet.weight
}, 0)

console.log(totalWeight)
*/

// >> Tudo Junto <<
//... encadeando tudo (nas palavras do prof)

const totalWeightDogs = pets.filter((pet) => {
    return pet.type === 'dog'
}).reduce( (total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeightDogs)

// >> MAP com PROMISSE <<

const items = ['a', 'b', 'c', 'd']

;(async function () {
    const promisseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`)
        })
    }

    //const itemMapped = promisseFunction('x')
    //console.log(await itemMapped)

    const itemsMappedPromisses = items.map(promisseFunction)

    const itemsMapped = await Promise.all(itemsMappedPromisses)

    console.log(itemsMapped)
})()




