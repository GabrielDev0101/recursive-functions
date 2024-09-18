class Person {
    handle() {
        return 'handle1';
    }
}

class OtherPerson {
    handle() {
        return 'handle2';
    }
}

var classList = [Person, OtherPerson];

function handleClasses() {
    let index = 0;

    // Looping through the class list without modifying the array
    while (index < classList.length) {
        console.log(classList);

        // Create an instance of the current class
        var classInstance = new classList[index]();

        // Check if the method 'handle' exists before calling it
        if (typeof classInstance.handle === 'function') {
            console.log(classInstance.handle());
        } else {
            console.log('No handle method found');
        }

        // Move to the next class in the array
        index++;

        console.log(classList);
    }

    console.log('END');
}

handleClasses();
