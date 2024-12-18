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
    const start = new Date(startDate)
    const end = new Date(endDate)
    let totalDays = 0;
    let occupancyDays = 0;

    let currentDate = new Date(start)
    while (currentDate <= end) {
      totalDays++;
      currentDate.setDate(currentDate.getDate() + 1)
    }

    this.bookings.forEach(booking => {
      const bookingStart = new Date(booking.checkIn);
      const bookingEnd = new Date(booking.checkOut);

      const overStart = bookingStart > start ? bookingStart : start
      const overEnd = bookingEnd < end ? bookingEnd : end

      if (overStart <= overEnd) {
        let date = new Date(overStart)
        while (date <= overEnd) {
          occupancyDays++;
          date.setDate(date.getDate() + 1)
        }
      }
    })
    const occupancyPercentage = ((occupancyDays / totalDays) * 100).toFixed(2)

    return occupancyPercentage;
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