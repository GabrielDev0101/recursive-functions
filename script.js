/**
 * @class Person
 * This class represents a person with a handle method.
 */
class Person {
    handle() {
        return 'handle1';
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
}

/**
 * @class Anonymous
 * This class does not have a handle method.
 */
class Anonymous {}

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
    for (const Class of classList) {
        const classInstance = new Class();
        console.log(`Processing class: ${Class.name}`);

        // Check if the class instance has a 'handle' method
        if (typeof classInstance.handle === 'function') {
            console.log(`Result from ${Class.name}:`, classInstance.handle());
        } else {
            console.warn(`Warning: ${Class.name} does not have a handle method.`);
        }
    }

    console.log('Processing finished!');
}

handleClasses();
