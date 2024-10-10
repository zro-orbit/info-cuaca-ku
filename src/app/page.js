'use client';
import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';
import { getWeatherData } from '@/utils/weatherUtils';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError('');
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#2B95CE] p-4">
      <div className="max-w-2xl mx-auto pt-20">
        <h1 className="text-4xl text-white text-center mb-8 font-bongkar">
          Info Cuaca Ku
        </h1>
        <SearchBar onSearch={handleSearch} />
        
        {loading && (
          <div className="text-center text-white">
            <p>Mencari data cuaca...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center text-red-200 mb-4">
            <p>{error}</p>
          </div>
        )}
        
        {weatherData && <WeatherCard weather={weatherData} />}
      </div>
    </main>
  );
}