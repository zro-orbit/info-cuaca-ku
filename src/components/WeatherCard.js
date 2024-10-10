export default function WeatherCard({ weather }) {
  const getWeatherIcon = (condition) => {
    const icons = {
      'CERAH': '/icons/Group 25.png',
      'BERAWAN': '/icons/Group 8.png',
      'HUJAN': '/icons/Group 17.png',
      'GERIMIS': '/icons/Group 18.png',
      'BADAI': '/icons/Group 12.png',
      'BERSALJU': '/icons/Group 14.png',
      'BERKABUT': '/icons/Group 31.png'
    };
    return icons[condition] || '/icons/Group 8.png';
  };

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 text-white">
      <div className="text-center">
        <h2 className="text-2xl mb-2 font-pulang">{weather.cityName}</h2>
        <p className="text-sm font-cornercafe">{weather.date}</p>
        
        <div className="my-6">
          <img 
            src={getWeatherIcon(weather.condition)}
            alt="Weather condition" 
            className="w-24 h-24 mx-auto"
          />
          <p className="text-xl mt-2">{weather.condition}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div>
            <img src="/icons/Temperature.png" alt="Temperature" className="w-8 h-8 mx-auto" />
            <p>{weather.temperature}°</p>
          </div>
          <div>
            <img src="/icons/Kelembapan.png" alt="Humidity" className="w-8 h-8 mx-auto" />
            <p>{weather.humidity}%</p>
          </div>
          <div>
            <img src="/icons/Kecepatan dan arah angin.png" alt="Wind speed" className="w-8 h-8 mx-auto" />
            <p>{weather.windSpeed} KM/JAM</p>
          </div>
        </div>
      </div>
    </div>
  );
}