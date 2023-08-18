// function calculatedTriangleArea(){
// // get triangle base valude.
// const baseField = document.getElementById('triangle-base');
// const baseFieldText = baseField.value;
// const base = parseFloat(baseFieldText);

// // get triangle height valud
// const heightField = document.getElementById('triangle-height');
// const heightFieldText = heightField.value;
// const height = parseFloat(heightFieldText);

// const area = 0.5 * base * height;
// console.log(area);

// // show triangle area
// const areaSpan = document.getElementById('triangle-result');
// areaSpan.innerText = area;

// baseField.value = '';
// heightField.value = '';
// }

// // Calculated Rectangle Area

// function calculatedRectangleArea(){
//     // get triangle base valude.
//    const widthField = document.getElementById('rectangle-width');
//    const widthValue = widthField.value;
//    const width = parseFloat(widthValue);

//    const lengthField = document.getElementById('rectangle-lenght');
//    const lengthFieldValue = lengthField.value;
//    const lenght = parseFloat(lengthFieldValue);

//    const rectangleResult = width * lenght;
//     console.log(rectangleResult);

//     const areaSpan  = document.getElementById('rectangle-result');
//     areaSpan.innerText = rectangleResult;
    
//     widthField.value = '';
//     lengthField.value = '';
//     }



function calculatedTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    
    if(isNaN(base) || isNaN(height)){
        alert('Please insert Number');
        return;
    }


    const area = 0.5 * base * height;
    setElementInnerText('triangle-result',area);




    }
    
    // Calculated Rectangle Area
    
    function calculatedRectangleArea(){
        // get triangle base valude.
       const width = getInputValue('rectangle-width');
       const lenght = getInputValue('rectangle-lenght');
    
       const area = width * lenght;
    
        setElementInnerText('rectangle-result',area);
    }

    function calculatedParallelogramArea(){
        const base = getInputValue('parallelogram-base');
        const height = getInputValue('parallelogram-height');

        const area = base * height;
        setElementInnerText('parallelogram-result',area);
    }

// reusable get input value feild in number
    function getInputValue (inputValue){
        const inputFeild = document.getElementById(inputValue);
        const inputFeildValue = inputFeild.value;
        const value = parseFloat(inputFeildValue);
        return value;

    }

    // reusable set sapn or p, div, etc text
    function setElementInnerText(elementId,area){
        const element = document.getElementById(elementId);
        element.innerText = area;
    }