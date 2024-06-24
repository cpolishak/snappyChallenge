// *** 1st part *** --------------------------------------------------------
// Works as expected

// function test(testName, testFn) {
//     try {
//         testFn();
//         console.log(`Y ${testName}: passed successfully.`);
//     } catch (error) {
//         console.error(`X ${testName}: failed with message: ${error.message}`);
//     }
// }

// break out expect into separate function for cleanliness
// function expect(expectedValue) {
//     return {
//         toBe(actualValue) {
//             if (actualValue !== expectedValue) {
//                 throw new Error(`expected '${expectedValue}', received '${actualValue}'`);
//             }
//         },
//     };
// }

// test('my calm test', () => {
//     expect('123').toBe('abc');
// })

// test('my good test', () => {
//     expect(2).toBe(2)
//     expect(2).toBe(2)
// })

// test('my wrong test', () => {
//     expect(3).toBe(3)
//     expect(3).toBe(2)
// })






// *** 2nd part *** ---------------------------------------------------------------
// Works as expected

// let beforeEachFn;

// // when run, set beforeEachFn to the blank Fn to execute
// function beforeEach(beforeTestFn) {
//     beforeEachFn = beforeTestFn;
// }

// function test(testName, testFn) {
//     try {
//         // if beforeEachFn var exists, then run beforeEach()
//         if (beforeEachFn) {
//             // call the blank function when runTest is executed
//             beforeEachFn();
//         }
//         testFn();
//         console.log(`Y ${testName}: passed successfully.`);
//     } catch (error) {
//         console.error(`X ${testName}: failed with message: ${error.message}`);
//     }
// }

// function expect(expectedValue) {
//     return {
//         toBe(actualValue) {
//             if (actualValue !== expectedValue) {
//                 throw new Error(`expected '${expectedValue}', received '${actualValue}'`);
//             }
//         },
//     };
// }

// beforeEach(() => {
//     expect('🤡').toBe('🤡');
// })

// test('1st test', () => {
//     expect('be calm').toBe('😇');
// })

// test('2nd test', () => {
//     expect(2).toBe(2)
//     expect(2).toBe(2)
// })

// test('3rd test', () => {
//     expect(3).toBe(3)
//     expect(3).toBe(2)
//     expect(3).toBe(3)
// })





// *** 3rd part ***   ----------------------------------------------------------
// ... still in progress ... 

let beforeEachFn;
let onlyTest = {}

// when run, set beforeEachFn to the blank Fn to execute
function beforeEach(beforeTestFn) {
    beforeEachFn = beforeTestFn;
}

function expect(expectedValue) {
    return {
        toBe(actualValue) {
            if (actualValue !== expectedValue) {
                throw new Error(`expected '${expectedValue}', received '${actualValue}'`);
            }
        },
    };
}

const test = (testName, testFn) => {
    function only(testName, testFn) {
        onlyTest = {
            ...onlyTest,
            test: testName,
            fn: testFn
        }
        // console.log(onlyTest)
    }
    test.only = only;

    try {
        // To Do: Figure out separating .only tests and running those VS all tests
        // currently not adding both instances of .only tests
        console.log(onlyTest)
        // if (onlyTest.includes.test) {
        //     // Execute only the test marked with .only
        //     onlyTest.fn();
        //     console.log(`Y ${onlyTest.test}: passed successfully.`);
        // } else {
        //     // Execute all tests
        //     testFn();
        //     console.log(`Y ${testName}: passed successfully.`);
        // }
    } catch (error) {
        // console.error(`X ${testName}: failed with message: ${error.message}`);
    }
    // Below obviously works as expected on all tests, but need to solve the
    // issue of filtering out the test.only executions or jumping to this
    // try {
    //     testFn();
    //     console.log(`Y ${testName}: passed successfully.`);
    // } catch (error) {
    //     console.error(`X ${testName}: failed with message: ${error.message}`);
    // }
};




beforeEach(() => {
    expect('🤡').toBe('🤡');
})

test('1st test', () => {
    expect('be calm').toBe('😇');
})

test.only('2nd test', () => {
    expect(2).toBe(2)
    expect(2).toBe(2)
})

test('3rd test', () => {
    expect(3).toBe(3)
    expect(3).toBe(2)
})

test.only('4th test', () => {
    expect(4).toBe(4)
})