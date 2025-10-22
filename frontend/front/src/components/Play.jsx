import React, { useState } from "react";
import { X, ArrowLeft, Ticket, Users, Calendar, Clock } from "lucide-react";
// Import your actual images
import outlierImage from "../assets/outlier.png";
import ulleVeliyaImage from "../assets/ulleveliye.png";

const Play = () => {
  const [selectedPlay, setSelectedPlay] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketType, setTicketType] = useState("anna");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const plays = [
    {
      title: "Outlier",
      image: outlierImage,
      description: "A gripping play about human emotions and boundaries.",
      duration: "1 Hour",
      genre: "Drama",
      date: "October 23, 2025",
      time: "6:00 PM"
    },
    {
      title: "Ulle Veliya",
      image: ulleVeliyaImage,
      description: "A lighthearted Tamil play full of humor and warmth.",
      duration: "1 Hour",
      genre: "Comedy",
      date: "October 23, 2025",
      time: "8:00 PM"
    },
  ];

  // Generate 150 seats per side: 15 rows × 10 seats with proper numbering
  const generateSeats = (side) => {
    let seats = [];
    const rowLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
    
    for (let row = 0; row < 15; row++) {
      for (let col = 1; col <= 10; col++) {
        const seatNumber = `${rowLetters[row]}${col}`;
        seats.push({
          id: `${side}-${rowLetters[row]}-${col}`,
          display: seatNumber,
          row: rowLetters[row],
          number: col
        });
      }
    }
    return seats;
  };

  const leftSeats = generateSeats("L");
  const rightSeats = generateSeats("R");

  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat.id)
        ? prev.filter((s) => s !== seat.id)
        : [...prev, seat.id]
    );
  };

  const getPrice = () => {
    if (ticketType === "anna") return 100;
    if (ticketType === "other") return 150;
    return 200;
  };

  const totalAmount = getPrice() * selectedSeats.length;

  const confirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat!");
      return;
    }
    setBookingConfirmed(true);
  };

  // Group seats by row for better organization
  const groupSeatsByRow = (seats) => {
    const grouped = {};
    seats.forEach(seat => {
      if (!grouped[seat.row]) {
        grouped[seat.row] = [];
      }
      grouped[seat.row].push(seat);
    });
    return grouped;
  };

  const leftSeatsByRow = groupSeatsByRow(leftSeats);
  const rightSeatsByRow = groupSeatsByRow(rightSeats);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {!selectedPlay ? (
        <>
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              🎭 Upcoming Plays
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Book your tickets for an unforgettable theater experience
            </p>
          </div>

          {/* Plays Grid - Compact */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plays.map((play, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200"
                  onClick={() => setSelectedPlay(play)}
                >
                  <div className="flex">
                    {/* Poster */}
                    <div className="w-32 h-40">
                      <img
                        src={play.image}
                        alt={play.title}
                        className="w-full h-full object-cover rounded-l-xl"
                      />
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1 p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {play.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {play.description}
                      </p>
                      
                      <div className="space-y-1 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {play.duration} • {play.genre}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {play.date} • {play.time}
                        </div>
                      </div>
                      
                      <button className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
                        Book Tickets
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        // Booking Page - Compact Layout
        <div className="max-w-7xl mx-auto">
          {/* Header Bar */}
          <div className="bg-white rounded-t-xl shadow-sm p-4 border-b">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSelectedPlay(null)}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Plays
              </button>
              <h1 className="text-xl font-bold text-gray-800">Book Tickets</h1>
              <div className="w-20"></div> {/* Spacer for balance */}
            </div>
          </div>

          <div className="bg-white rounded-b-xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
              {/* Left Column - Play Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <img
                    src={selectedPlay.image}
                    alt={selectedPlay.title}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedPlay.title}
                  </h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Ticket className="w-4 h-4 mr-2" />
                      <span className="text-sm">{selectedPlay.genre}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{selectedPlay.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{selectedPlay.date} • {selectedPlay.time}</span>
                    </div>
                  </div>

                  {/* Ticket Type Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Select Ticket Type
                    </label>
                    <select
                      className="w-full bg-gray-50 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:border-red-500 transition text-sm"
                      value={ticketType}
                      onChange={(e) => setTicketType(e.target.value)}
                    >
                      <option value="anna">Anna University - ₹100</option>
                      <option value="other">Other College - ₹150</option>
                      <option value="adult">General - ₹200</option>
                    </select>
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Seats:</span>
                        <span className="font-medium">{selectedSeats.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price per ticket:</span>
                        <span className="font-medium">₹{getPrice()}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-gray-800 font-semibold">Total:</span>
                        <span className="text-red-600 font-bold">₹{totalAmount}</span>
                      </div>
                    </div>

                    <button
                      onClick={confirmBooking}
                      disabled={selectedSeats.length === 0}
                      className={`w-full mt-4 font-semibold py-3 rounded-lg transition-colors text-sm ${
                        selectedSeats.length === 0
                          ? "bg-gray-400 cursor-not-allowed text-gray-600"
                          : "bg-red-600 hover:bg-red-700 text-white"
                      }`}
                    >
                      {selectedSeats.length === 0 ? "Select Seats" : `Pay ₹${totalAmount}`}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Seat Selection */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">
                    Select Your Seats
                  </h3>

                  {/* Stage */}
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-3 mb-8 rounded-lg mx-auto max-w-md">
                    <div className="font-semibold text-lg">🎭 STAGE 🎭</div>
                    <div className="text-xs opacity-90 mt-1">All seats have a clear view of the stage</div>
                  </div>

                  {/* Seating Layout */}
                  <div className="flex flex-col lg:flex-row gap-8 mb-8">
                    {/* Left Section - A Rows */}
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-center mb-4 text-gray-700 bg-gray-100 py-2 rounded">
                        LEFT SECTION (A ROWS)
                      </h4>
                      <div className="space-y-3 max-h-96 overflow-y-auto p-2">
                        {Object.entries(leftSeatsByRow).map(([row, seats]) => (
                          <div key={row} className="flex items-center gap-2">
                            <div className="w-6 text-xs font-medium text-gray-500 text-center">
                              {row}
                            </div>
                            <div className="flex-1 grid grid-cols-10 gap-1">
                              {seats.map((seat) => (
                                <button
                                  key={seat.id}
                                  onClick={() => handleSeatClick(seat)}
                                  className={`w-7 h-7 flex items-center justify-center rounded text-[10px] font-medium transition-all ${
                                    selectedSeats.includes(seat.id)
                                      ? "bg-green-500 text-white shadow-md"
                                      : "bg-white border border-gray-300 hover:border-green-400 hover:bg-green-50"
                                  }`}
                                  title={`${seat.display} - ₹${getPrice()}`}
                                >
                                  {seat.number}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Section - B Rows */}
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-center mb-4 text-gray-700 bg-gray-100 py-2 rounded">
                        RIGHT SECTION (B ROWS)
                      </h4>
                      <div className="space-y-3 max-h-96 overflow-y-auto p-2">
                        {Object.entries(rightSeatsByRow).map(([row, seats]) => (
                          <div key={row} className="flex items-center gap-2">
                            <div className="flex-1 grid grid-cols-10 gap-1">
                              {seats.map((seat) => (
                                <button
                                  key={seat.id}
                                  onClick={() => handleSeatClick(seat)}
                                  className={`w-7 h-7 flex items-center justify-center rounded text-[10px] font-medium transition-all ${
                                    selectedSeats.includes(seat.id)
                                      ? "bg-green-500 text-white shadow-md"
                                      : "bg-white border border-gray-300 hover:border-green-400 hover:bg-green-50"
                                  }`}
                                  title={`${seat.display} - ₹${getPrice()}`}
                                >
                                  {seat.number}
                                </button>
                              ))}
                            </div>
                            <div className="w-6 text-xs font-medium text-gray-500 text-center">
                              {row}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Legend and Instructions */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
                        Selected
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-white border border-gray-300 rounded mr-1"></div>
                        Available
                      </div>
                    </div>
                    <div className="text-center text-gray-500">
                      Scroll to see all rows • Click on seats to select
                    </div>
                  </div>

                  {/* Selected Seats Display */}
                  {selectedSeats.length > 0 && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2 text-sm">
                        Selected Seats:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedSeats.map(seatId => {
                          const seat = [...leftSeats, ...rightSeats].find(s => s.id === seatId);
                          return (
                            <span key={seatId} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              {seat?.display}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Confirmation Modal */}
          {bookingConfirmed && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Booking Confirmed!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Your tickets for {selectedPlay.title} have been booked successfully.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 text-left">
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Play:</span>
                        <span className="font-medium">{selectedPlay.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Seats:</span>
                        <span className="font-medium">
                          {selectedSeats.map(seatId => {
                            const seat = [...leftSeats, ...rightSeats].find(s => s.id === seatId);
                            return seat?.display;
                          }).join(", ")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date & Time:</span>
                        <span className="font-medium">{selectedPlay.date} • {selectedPlay.time}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold">Amount Paid:</span>
                        <span className="text-red-600 font-bold">₹{totalAmount}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      setSelectedPlay(null);
                      setSelectedSeats([]);
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Book More Tickets
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Play;