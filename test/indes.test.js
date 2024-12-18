const { Room, Booking } = require('./index')

describe('Room tests', () => {
    const room = new Room('Room 100', 10000, 10)
    const booking1 = new Booking(
        'Dani Poveda',
        'dapoav@gmail.com',
        new Date('2024-06-10'),
        new Date('2024-06-20'),
        20,
        room
    );
    const booking2 = new Booking(
        'Ari Revilla',
        'ariana@gmail.com',
        new Date('2024-06-21'),
        new Date('2024-06-25'),
        20,
        room
    )
    room.bookings.push(booking1, booking2);

    test('fuction isOccupied returns a boolean if the room is busy or not', () => {
        expect(room.isOccupied(new Date('2024-06-04'))).toBe(false)
    })
    test('fuction isOccupied returns a boolean if the room is busy or not', () => {
        expect(room.isOccupied(new Date('2024-06-22'))).toBe(true)
    })

    test('Prueba occupancy', () => {
        expect(room.occupancyPercentage('2024-06-05', '2024-06-16')).toBe('58.33')
    })
})