## First assignment in part 3 day 3

### EX 1:
    Use 10 of Objects predefined methods and explain them


    - `Object.is()` : 

        - determines whether two values are the same value.
        
        - Object.is(value1, value2); 
        - Return value {A boolean indicating whether or not the two arguments are the same value}

        - Example :
            Object.is(25, 25); // true
            Object.is("foo", "foo"); // true
            Object.is("foo", "bar"); // false
            Object.is(null, null); // true

            // Case 3: NaN
            Object.is(NaN, 0 / 0); // true
            Object.is(NaN, Number.NaN); // true
        
        - Object.is() is also not equivalent to the === operator. The only difference between Object.is() and === is in their treatment of signed zeros and NaN values. The === operator (and the == operator) treats the number values -0 and +0 as equal, but treats NaN as not equal to each other.    


    - `Object.hasOwn()` :

        - method returns true if the specified object has the indicated property as its own property. If the property does not exist, the method returns false.    

        const object1 = {
            prop: 'exists'
        };

        console.log(Object.hasOwn(object1, 'prop'));
        // Expected output: true

        console.log(Object.hasOwn(object1, 'toString'));
        // Expected output: false

        console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
        // Expected output: false


    - `Object.create()` : // { it's similar to creating an object from a class in java and c++}
        
        - method creates a new object, using an existing object as the prototype of the newly created object.
        const person = {
            isHuman: false,
            printIntroduction: function() {
                console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
            }
        };

        const me = Object.create(person);

        me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
        me.isHuman = true; // Inherited properties can be overwritten

        me.printIntroduction();
        // Expected output: "My name is Matthew. Am I human? true"


    - `Object.entries()` : 
        
        - method returns an array of a given object's own enumerable string-keyed property key-value pairs.

        - Example :
            const obj = { foo: "bar", baz: 42 };
            console.log(Object.entries(obj));

            // Expected output: [ ['foo', 'bar'], ['baz', 42] ] 

    - `Object.freeze()` : 

        - method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.        

        const obj = {
            prop: 42
        };

        Object.freeze(obj);

        obj.prop = 33;
        // Throws an error in strict mode

        console.log(obj.prop);
        // Expected output: 42


    - `Object.seal()` :    

        const object1 = {
            property1: 42
        };

        Object.seal(object1);
        object1.property1 = 33; // updating 
        console.log(object1.property1);
        // Expected output: 33

        delete object1.property1; // Cannot delete when sealed


    - `Object.isFrozen()` :

        - method determines if an object is frozen.

        const object1 = {
            property1: 42
        };

        console.log(Object.isFrozen(object1));
        // Expected output: false

        Object.freeze(object1);

        console.log(Object.isFrozen(object1));
        // Expected output: true
    
    - `Object.isSealed()` :

        - method determines if an object is sealed.

        const object1 = {
            property1: 42
        };

        console.log(Object.isSealed(object1));
        // Expected output: false

        Object.seal(object1);

        console.log(Object.isSealed(object1));
        // Expected output: true

    - `Object.assign()` :

        - method copies all enumerable own properties from one or more source objects to a target object.

        const target = { a: 1, b: 2 };
        const source = { b: 4, c: 5 };

        const returnedTarget = Object.assign(target, source);

        console.log(target);
        // Expected output: Object { a: 1, b: 4, c: 5 }

        console.log(returnedTarget === target);
        // Expected output: true

    - `Object.valueOf()` :


        - The base valueOf() method returns the this value itself, converted to an object if it isn't already. Therefore its return value will never be used by any primitive conversion algorithm.

        const obj = { foo: 1 };
        console.log(obj.valueOf() === obj); // true

        console.log(Object.prototype.valueOf.call("primitive"));
        // [String: 'primitive'] (a wrapper object)

        