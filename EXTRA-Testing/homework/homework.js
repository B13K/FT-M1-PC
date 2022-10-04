const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];

function getSeat(letter, number){
    const numberRow = getRowNumber(letter);
    const layoutRows = layout[numberRow];
    const seat = layoutRows[number];
    return seat;
}


function checkSeatStatus(row, number){
    if(typeof row !== 'string') {
        throw new TypeError('First parameter is not a string')
    } if(typeof number !== 'number'){
        throw new TypeError('Second parameter is not a number')
    }
    if(row.length <=0 || row.length > 1){
        throw new TypeError('First parameter is not a letter')
    } 
    if(getRowNumber(row)>4){
        throw new TypeError('First parameter out range, rango permitido es [A-E]')
    }

    const numberRow = getRowNumber(row);
    const layoutRows = layout[numberRow];

    if(number>layoutRows.length){
        throw new TypeError(`EL segundo parametro es muy alto para esta fila, el rango es ${layoutRows.length}`)
    }

    const seat = getSeat(row, number)
    return seat.booked;
}

function book(row, number){
    if(checkSeatStatus(row,number)) return `Seat in ${row}${number} is already booked`;
    
    const seat = getSeat(row, number);
    seat.booked = true;
    return `Seat in ${row}${number} successfully booked`
}

function getRowNumber(letter) {
    return letter.charCodeAt(0) - 65;
}

module.exports = {
    checkSeatStatus,
    book,
    getRowNumber,
    
}