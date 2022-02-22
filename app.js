const elfObj = document.querySelector('#elf');

const santaObj = document.querySelector('#santa');

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

// let touching  = function isTouching(a, b){
//     const aRect = a.getBoundingClientRect();
//     const bRect = b.getBoundingClientRect();

//     return !(
//         aRect.top + aRect.height < bRect.top ||
//         bRect.top + bRect.height < aRect.top ||
//         aRect.left + aRect.width < bRect.left ||
//         bRect.left + bRect.width < aRect.left);
//  };

function randomPosition(obj){
    obj.style.left = `${Math.floor(Math.random()* window.innerWidth)}px`;
    obj.style.top = `${Math.floor(Math.random()* window.innerHeight)}px`;
};

randomPosition(santaObj);




window.addEventListener('keydown', function(evt){
    if(evt.key === 'ArrowLeft'){
        elfObj.style.transform = `scale(-1, 1)`;
        moveLeft(elfObj, 30);
    }
    else if(evt.key === 'ArrowRight'){
        elfObj.style.transform = `scale(1, 1)`;
        moveRight(elfObj, 30);
    }
    else if(evt.key === 'ArrowUp'){
        moveUp(elfObj, 30);
    }
    else if(evt.key === 'ArrowDown'){
        moveDown(elfObj, 30);
    }
    if (isTouching(elfObj, santaObj)) {
        randomPosition(santaObj);
    }
} );

function moveLeft(obj, dist){
    currPos = extractedValue(obj.style.left);
    obj.style.left = `${currPos - dist}px`;   
}
function moveRight(obj, dist){
    currPos = extractedValue(obj.style.left);
    obj.style.left = `${currPos + dist}px`;   
}
function moveUp(obj, dist){
    currPos = extractedValue(obj.style.top);
    obj.style.top = `${currPos - dist}px`;   
}
function moveDown(obj, dist){
    currPos = extractedValue(obj.style.top);
    obj.style.top = `${currPos + dist}px`;   
}

const extractedValue = function pxRemover(val){
    if (!val) return 100;
    return parseInt(val.slice(0,-2));
}