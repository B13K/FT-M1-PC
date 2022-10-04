const { checkSeatStatus, getRowNumber, book } = require('../homework');

it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
});

it('should throw a TypeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus(4)).toThrow(new 
        TypeError('First parameter is not a string'));

});

it('should throw a TypeError if second parameter is not a number', () => {
    expect(()=> checkSeatStatus('A', '2')).toThrow(new
        TypeError('Second parameter is not a number'))
})

it('should return 1 if the letter given is an A', () => {
    expect(getRowNumber('A')).toBe(0);
})
 
it('should return 3 if the letter given is an C', () => {
    expect(getRowNumber('C')).toBe(2);
})

it('should return true if the given seat defined by row and column is booked', () => {
    expect(checkSeatStatus('A', 1)).toBe(true);
})

it('should return false if the given seat defined by row and column is no booked', () => {
    expect(checkSeatStatus('E', 3)).toBe(false);
})

describe('checkSeatStatus', () => {

})

describe('getRowNumber', () => {
    
});

describe('book', () => {    
    it('should return "seat in XX is alreay booked" if the given seat is alreay booked', () => {
        expect(checkSeatStatus('E',3)).toBe(false);
        expect(book('E',3)).toBe('Seat in E3 successfully booked');
        expect(checkSeatStatus('E',3)).toBe(true)
    });

    it('should return "seat in XX is alreay booked" if the given seat is alreay booked', () => {
        expect(book('A',1)).toBe('Seat in A1 is already booked');
    });
})

describe('checkSeatStatus', () => {
    it('should throw TypeError if first parameter is not a letter or string vacio ', () => {
        expect(() => checkSeatStatus('',3)).toThrow(new
            TypeError('First parameter is not a letter'))
    });
    it('should throw TypeError if first parameter is not a letter or string vacio ', () => {
        expect(() => checkSeatStatus('Hola',3)).toThrow(new
            TypeError('First parameter is not a letter'))
    });
    it('should throw TypeError if second parameter es muy grande, el rango es de 5', () => {
        expect(() => checkSeatStatus('A',5)).toThrow(new
            TypeError('EL segundo parametro es muy alto para esta fila, el rango es 4'))
    });

})