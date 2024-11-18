/**
 * @class Person
 * This class represents a person with a handle method.
 */
class Person {
    handle() {
        return 'handle1';
    }

    getDescription() {
        return 'This is a Person class with a handle method.';
    }
}

/**
 * @class OtherPerson
 * This class represents another person with a handle method.
 */
class OtherPerson {
    handle() {
        return 'handle2';
    }

    getDescription() {
        return 'This is an OtherPerson class with a handle method.';
    }
}

/**
 * @class Anonymous
 * This class does not have a handle method.
 */
class Anonymous {
    getDescription() {
        return 'This is an Anonymous class without a handle method.';
    }
}

/**
 * Array of classes that need to be handled.
 * @type {Array<Function>}
 */
const classList = [Person, OtherPerson, Anonymous];

/**
 * Function to handle the classes by invoking the handle method.
 * Logs the result if the method exists or a warning if not.
 */
async function handleClasses() {
    let countWithHandle = 0;
    let countWithoutHandle = 0;

    for (const Class of classList) {
        const classInstance = new Class();
        console.log(`Processing class: ${Class.name}`);
        console.log(`Description: ${classInstance.getDescription()}`);

        // Check if the class instance has a 'handle' method
        if (typeof classInstance.handle === 'function') {
            console.log(`Result from ${Class.name}:`, classInstance.handle());
            countWithHandle++;
        } else {
            console.warn(`Warning: ${Class.name} does not have a handle method.`);
            countWithoutHandle++;
        }
    }

    console.log('Processing finished!');
    console.log(`Classes with 'handle' method: ${countWithHandle}`);
    console.log(`Classes without 'handle' method: ${countWithoutHandle}`);
}

handleClasses();
