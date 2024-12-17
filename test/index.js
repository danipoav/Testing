class Room {
  constructor(name, rate, discount = 0) {
    this.name = name;
    this.bookings = [];
    this.rate = rate;
    this.discount = discount;
  }

  isOccupied(date) {
    return this.bookings.some(
      (booking) =>
        date >= booking.checkIn && date <= booking.checkOut
    )

  }

  occupancyPercentage(startDate, endDate) {
  }

  static totalOccupancyPercentage(rooms, startDate, endDate) {
  }

  static availableRooms(rooms, startDate, endDate) {
  }
}

class Booking {
  constructor(name, email, checkIn, checkOut, discount, room) {
    this.name = name;
    this.email = email;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.discount = discount;
    this.room = room;
  }

  get fee() {
  }
}

module.exports = { Room, Booking };