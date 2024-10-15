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

const classList = [Person, OtherPerson];

function handleClasses() {
    for (const Class of classList) {
        const classInstance = new Class();

        if (typeof classInstance.handle === 'function') {
            console.log(classInstance.handle());
        } else {
            console.log('No handle method found');
        }
    }

    console.log('END');
}

handleClasses();
