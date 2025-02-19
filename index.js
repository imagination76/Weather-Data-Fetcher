// Weather Data Fetcher and Logger

const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Log file path
const logFile = path.join(__dirname, 'weather_data_log.txt');

// Function to log weather data
function logWeatherData(city, temperature, condition) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${city}: ${temperature}°C, ${condition}\n`;
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Error writing to log file:', err);
    });
    
// Simulated cities
const cities = ['New York', 'London', 'Tokyo', 'Sydney', 'Berlin'];

// Function to get random weather data (simulating API response)
function getRandomWeather() {
    const temperature = (Math.random() * 25 + 5).toFixed(2); // Between 5°C and 30°C
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Stormy', 'Snowy'];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    return { city, temperature, condition };
}
    
// Function to log random weather data
function logRandomWeather() {
    const weather = getRandomWeather();
    logWeatherData(weather.city, weather.temperature, weather.condition);
    console.log(`Weather Update - ${weather.city}: ${weather.temperature}°C, ${weather.condition}`);
}

// Schedule weather data fetching
setInterval(logRandomWeather, 5000); // Every 5 seconds

// Initial log message
logWeatherData('SYSTEM', 'N/A', 'Weather Data Logger started.');
console.log('Weather Data Logger started.');

// Stop after 1 minute
setTimeout(() => {
    logWeatherData('SYSTEM', 'N/A', 'Weather Data Logger stopped.');
    console.log('Weather Data Logger stopped.');
    process.exit(0);
}, 60000);
