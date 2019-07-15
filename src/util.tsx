import React from 'react'

const TestContext = React.createContext('the start')

const intenseFn = function mySlowFunction(baseNumber: number) {
	// console.time('mySlowFunction');
	let result = 0;	
	for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
		result += Math.atan(i) * Math.tan(i);
	};
    // console.timeEnd('mySlowFunction');
    return result
}

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const apiPostFn = async (data: any, raise: boolean) => {
    await timeout(1500)

    if (raise) {
        throw new Error("ERROR")
    }

    return 
}

const apiGetFn = async (id: string, raise: boolean) => {
    await timeout(1500)

    if (raise) {
        throw new Error("ERROR")
    }

    return "API DATA"
}


export { TestContext, intenseFn, apiGetFn, apiPostFn }
