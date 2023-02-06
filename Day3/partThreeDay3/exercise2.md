## Second assignment in part 3 day 3


### EX 2:

    -   Use 10 of Arrays predefined methods and explain them.

        - `Array.prototype.concat()` :
           
           - concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

           const array1 = ['a', 'b', 'c'];
           const array2 = ['d', 'e', 'f'];
           const array3 = array1.concat(array2);

           console.log(array3);
           // Expected output: Array ["a", "b", "c", "d", "e", "f"]
  

        - `Array.prototype.fill()` :
            
            - fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

            fill(value)
            fill(value, start)
            fill(value, start, end)

            const array1 = [1, 2, 3, 4];

            // Fill with 0 from position 2 until position 4
            console.log(array1.fill(0, 2, 4));
            // Expected output: Array [1, 2, 0, 0]

            // Fill with 5 from position 1
            console.log(array1.fill(5, 1));
            // Expected output: Array [1, 5, 5, 5]

            console.log(array1.fill(6));
            // Expected output: Array [6, 6, 6, 6]

        - `Array.prototype.filter()` : {it's similar to the stream.filter in java }
 
            - filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

            const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
            const result = words.filter(word => word.length > 6); // word = words[i]

            console.log(result);
            // Expected output: Array ["exuberant", "destruction", "present"]    

        - `Array.prototype.find()` :

            - The find() method { returns the first element } in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

            const array1 = [5, 12, 8, 130, 44];
            const found = array1.find(element => element > 10); // element = array1[i] 

            console.log(found);
            // Expected output: 12

        - `Array.prototype.entries()` :
            
            - The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
            
            const array1 = ['a', 'b', 'c'];
            const iterator1 = array1.entries();

            console.log(iterator1.next().value);
            // Expected output: Array [0, "a"]

            console.log(iterator1.next().value);
            // Expected output: Array [1, "b"]


        - `Array.isArray()` :
            
            - The Array.isArray() static method determines whether the passed value is an Array.

            // all following calls return true
                Array.isArray([]);
                Array.isArray([1]);
                Array.isArray(new Array());
                Array.isArray(new Array("a", "b", "c", "d"));
                Array.isArray(new Array(3));
                