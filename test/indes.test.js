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

    test('function isOccupied returns a boolean if the room is busy or not', () => {
        expect(room.isOccupied(new Date('2024-06-04'))).toBe(false)
    })
    test('function isOccupied returns a boolean if the room is busy or not', () => {
        expect(room.isOccupied(new Date('2024-06-22'))).toBe(true)
    })

    test('funtion occupancyPercentage returns precentage number', () => {
        expect(room.occupancyPercentage('2024-06-05', '2024-06-16')).toBe('58.33')
    })

    test('funtion occupancyPercentage returns precentage number', () => {
        expect(room.occupancyPercentage('2024-06-24', '2024-06-28')).toBe('40.00')
    })

    test('function totalOccupancyPercentage  returns a percentage', () => {
        const room2 = new Room('Room 102', 12000, 10);
        const rooms = [room, room2];
        const result = Room.totalOccupancyPercentage(rooms, new Date('2024-06-01'), new Date('2024-06-15'));
        expect(result).toBe('20.00');
    })

    test('function totalOccupancyPercentage  returns a percentage', () => {
        const room2 = new Room('Room 102', 12000, 10);
        const rooms = [room, room2];
        const result = Room.totalOccupancyPercentage(rooms, new Date('2024-06-10'), new Date('2024-06-20'));
        expect(result).toBe('50.00');
    })
})