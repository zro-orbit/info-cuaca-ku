const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeatherData(city) {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Kota tidak ditemukan');
    }
    
    const data = await response.json();
    
    return {
      cityName: data.name,
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
      condition: translateWeatherCondition(data.weather[0].main),
      date: new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    };
  } catch (error) {
    throw new Error('Gagal mendapatkan data cuaca');
  }
}

function translateWeatherCondition(condition) {
  const translations = {
    'Clear': 'CERAH',
    'Clouds': 'BERAWAN',
    'Rain': 'HUJAN',
    'Drizzle': 'GERIMIS',
    'Thunderstorm': 'BADAI',
    'Snow': 'BERSALJU',
    'Mist': 'BERKABUT',
    'Fog': 'BERKABUT',
    'Haze': 'BERKABUT'
  };
  
  return translations[condition] || 'MENDUNG';
}