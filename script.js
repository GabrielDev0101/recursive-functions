class Person {
    handle(){
        return 'handle1'
    }
}

class OtherPerson {
    handle(){
        return 'handle2'
    }
}

var classesNames = [Person, OtherPerson]

function handleClasses() {

    if (classesNames.length <= 0) {
        console.log('END')
        return false
    }

    console.log(classesNames)

    var classesName = new classesNames[0]
    console.log(classesName.handle())

    classesNames.shift()

    console.log(classesNames)

    handleClasses()
}

handleClasses()
