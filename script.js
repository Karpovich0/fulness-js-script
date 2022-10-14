console.log(loadGrain([4, 1, 3])); // 2
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])); // 7
console.log(loadGrain([2, 0, 1, 5, 2, 7])); // 6
console.log(loadGrain([2, 4, 2])); // 0
console.log(loadGrain([7, 4])); // 0
console.log(loadGrain([ 2, 1, 4, 3, 29, 25, 31, 25, 32, 2, 15, 2, 1, 2, 24, 15, 7, 3, 2 ])); //  110 
console.log(loadGrain([ 36, 48, 13, 3, 15, 24, 12, 7, 12, 18, 45, 48, 1, 2, 24, 15, 28, 7, 12, 44, 4, 44, 27, 4 ])); // 542 


function loadGrain(levels){
    let iterations = 0;

    let bufferResultOne = 0;   
    let bufferResultTwo = 0;

    let grainLevelOne = -1;
    let grainLevelTwo = -1;

    let grainIndexOne = 0;
    let grainIndexTwo = 0;

    let bufferOne = 0;
    let bufferTwo = 0;    

    for(let i = 0, j = levels.length-1; i < levels.length-1; i++, j--){

        iterations++;

        if (levels[i] > grainLevelOne){
            grainLevelOne = levels[i];           
        }

        if (i < levels.length-1 && grainLevelOne > levels[i+1]){
            bufferOne += grainLevelOne - levels[i+1];
        }else{      
            grainLevelOne = -1;     
            bufferResultOne += bufferOne;
            bufferOne = 0;
            grainIndexOne = i+1;
        }

        if (levels[j] > grainLevelTwo){
            grainLevelTwo = levels[j];           
        }

        if (j > 0 && grainLevelTwo > levels[j-1]){
            bufferTwo += grainLevelTwo - levels[j-1];
        }else{      
            grainLevelTwo = -1;     
            bufferResultTwo += bufferTwo;
            bufferTwo = 0;
            grainIndexTwo = j-1;
        }

        if(grainIndexOne === grainIndexTwo && grainIndexOne !== 0 && grainIndexTwo!== 0){
            console.log(iterations);
            return bufferResultOne + bufferResultTwo;
        }        
    }
    console.log(iterations);
    return bufferResultOne + bufferResultTwo;

}
