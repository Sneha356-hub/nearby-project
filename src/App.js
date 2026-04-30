import React, { useState } from "react";

// 🔥 DATA (5 options each)
const data = {
  vadodara: {
    work: [
      { name: "Curators Coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600" },
      { name: "Cafe Coffee Day", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600" },
      { name: "Work Cafe Hub", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600" },
      { name: "Study Cafe", image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600" },
      { name: "Laptop Cafe", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600" },
    ],

    date: [
      { name: "22nd Parallel", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" },
      { name: "Mandap Restaurant", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600" },
      { name: "Barbeque Nation", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600" },
      { name: "Sky Dine Rooftop", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600" },
      { name: "Couple Cafe", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600" },
    ],

    chill: [
      { name: "Sayaji Garden", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600" },
      { name: "Ajwa Lake", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600" },
      { name: "Garden Cafe", image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600" },
      { name: "Riverfront Walk", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600" },
      { name: "Nature Park", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600" },
    ],

    party: [
      { name: "Local Club", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600" },
      { name: "Night Lounge", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600" },
      { name: "DJ Party Hub", image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=600" },
      { name: "Disco Club", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600" },
      { name: "Weekend Party Cafe", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600" },
    ],

    budget: [
      { name: "Khau Gali", image: "https://images.unsplash.com/photo-1604908176997-43166c0d3a2c?w=600" },
      { name: "Local Dhaba", image: "https://images.unsplash.com/photo-1598514982543-3d3c2b7a0f3b?w=600" },
      { name: "Street Food Stall", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600" },
      { name: "Chaat Corner", image: "https://images.unsplash.com/photo-1604908176997-43166c0d3a2c?w=600" },
      { name: "Budget Cafe", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600" },
    ],

    travel: [
      { name: "Ajwa Water Park", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600" },
      { name: "Heritage Site", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600" },
      { name: "Temple Visit", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600" },
      { name: "Hill View Point", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600" },
      { name: "Weekend Trip Spot", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600" },
    ],
  },

  mumbai: {
    date: [
      { name: "Sea Lounge", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" },
      { name: "Marine Drive Dinner", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600" },
      { name: "Rooftop Cafe", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600" },
      { name: "Luxury Restaurant", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600" },
      { name: "Couple Dining Spot", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600" },
    ],
  },
};

function App() {
  const [mood, setMood] = useState("");
  const [city, setCity] = useState("");
  const [places, setPlaces] = useState([]);

  const handleSearch = () => {
    if (!mood || !city) {
      alert("Please enter city and select mood!");
      return;
    }

    const cityData = data[city.toLowerCase()];

    if (cityData && cityData[mood]) {
      setPlaces(cityData[mood]);
    } else {
      setPlaces([]);
      alert("No results found!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial", background: "#f4f6f8", minHeight: "100vh" }}>
      <h1>Smart Nearby Places Recommender</h1>

      <input
        type="text"
        placeholder="Enter city (vadodara, mumbai)"
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", borderRadius: "6px" }}
      />

      <br /><br />

      <select onChange={(e) => setMood(e.target.value)} style={{ padding: "10px", borderRadius: "6px" }}>
        <option value="">Select Mood</option>
        <option value="work">Work 💻</option>
        <option value="date">Date ❤️</option>
        <option value="chill">Chill 😎</option>
        <option value="party">Party 🎉</option>
        <option value="budget">Budget 💰</option>
        <option value="travel">Travel ✈️</option>
      </select>

      <br /><br />

      <button onClick={handleSearch} style={{ padding: "10px 25px", background: "#007bff", color: "white", borderRadius: "6px", border: "none" }}>
        Search
      </button>

      <div style={{ marginTop: "30px" }}>
        {places.map((place, index) => (
          <div key={index} style={{ background: "#fff", margin: "20px auto", padding: "15px", width: "280px", borderRadius: "12px", boxShadow: "0 6px 12px rgba(0,0,0,0.1)" }}>
            <img
              src={place.image}
              alt={place.name}
              onError={(e) => (e.target.src = "https://via.placeholder.com/300x200")}
              style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "10px" }}
            />
            <h3>{place.name}</h3>
            <p>⭐ 4.{index + 2} Rating</p>
            <p>📍 {city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;