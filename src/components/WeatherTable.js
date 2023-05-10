import React from "react";
import { TbTilde } from "react-icons/tb"
import { HiOutlineLink } from "react-icons/hi";
import { IoIosThermometer, IoIosWater } from "react-icons/io";
import { VscArrowSmallDown, VscArrowSmallUp } from "react-icons/vsc";
import { WiCelsius, WiStrongWind, WiDaySunny, WiNightClear, WiDayCloudy, WiNightCloudy, WiCloudy, WiSprinkle, WiRain, WiDayRain, WiNightRain, WiDayLightning, WiNightLightning, WiDaySnow, WiNightSnow, WiDayFog, WiNightFog } from "react-icons/wi";

const WeatherTable = () => {
  
  const weatherIcons = {
    "01d": <WiDaySunny />,
    "01n": <WiNightClear />,
    "02d": <WiDayCloudy />,
    "02n": <WiNightCloudy />,
    "03d": <WiCloudy />,
    "03n": <WiCloudy />,
    "04d": <WiSprinkle />,
    "04n": <WiSprinkle />,
    "09d": <WiRain />,
    "09n": <WiRain />,
    "10d": <WiDayRain />,
    "10n": <WiNightRain />,
    "11d": <WiDayLightning />,
    "11n": <WiNightLightning />,
    "13d": <WiDaySnow />,
    "13n": <WiNightSnow />,
    "50d": <WiDayFog />,
    "50n": <WiNightFog />,
  }
  
  const weatherData = [
    {
      icon: weatherIcons['01d'],
      date: "2023-05-01",
      feelsLikeTemperature: 29,
      highTemperature: 28,
      lowTemperature: 18,
      windSpeed: 12,
      humidity: 65,
    },
    {
      icon: weatherIcons['04d'],
      date: "2023-05-02",
      feelsLikeTemperature: 29,
      highTemperature: 30,
      lowTemperature: 20,
      windSpeed: 10,
      humidity: 70,
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" }).replace('.', '');
    return `${day} ${month.replace(month[0], month[0].toUpperCase())}`;
  };

  return (
    <table className="table-fixed  text-gray-500 w-full">
      <thead>
        <tr>
          <th className="border-b-2 border-gray-300 dark:border-lt2black w-1/8 p-5 text-gray-700 dark:text-gray-300"></th>
          <th className="border-b-2 border-gray-300 dark:border-lt2black w-1/8 p-4 text-gray-700 dark:text-gray-300">Date</th>
          <th className="border-b-2 border-gray-300 dark:border-lt2black w-1/8 p-4">
            <div title="Feels Like" className="flex text-purple-500 dark:text-purple-300 self-center"><IoIosThermometer /><TbTilde/></div>
          </th>
          <th className="border-b-2 border-gray-300 dark:border-lt2black w-1/8 p-4">
            <div title="High Temperature" className="flex text-red-500 dark:text-red-300"><IoIosThermometer/><VscArrowSmallUp/></div>
          </th>
          <th className="border-b-2 border-gray-300 dark:border-lt2black w-1/8 p-4 text-lg">
            <div title="Low Temperature" className="flex text-blue-500 dark:text-blue-300"><IoIosThermometer /><VscArrowSmallDown/></div>
          </th>
          <th className="border-b-2 border-gray-300 dark:border-lt2black w-1/8 p-4">
            <WiStrongWind title="Wind Speed" className="text-green-500 dark:text-green-300 translate-x-4" />
          </th>
          <th className="border-b-2 border-gray-300 dark:border-lt2black w-1/8 p-4">
            <IoIosWater title="Relative Humidity" className="text-blue-500 dark:text-blue-300" />
          </th>
          <th className="border-b-2 border-gray-300 dark:border-lt2black w-1/8 p-4">
          </th>
        </tr>
      </thead>
      <tbody>
        {weatherData.map((data, index) => (
          <tr key={index} className="whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-midnight">
            <td className="border-b dark:border-ltblack p-4 text-[26px]">{data.icon}</td>
            <td className="border-b dark:border-ltblack p-4"><div className="flex">{formatDate(data.date)}</div></td>
            <td className="border-b dark:border-ltblack p-4">
              <div className="flex items-center">{data.feelsLikeTemperature}<WiCelsius className="text-[26px] -translate-x-[3px]"/></div>
            </td>
            <td className="border-b dark:border-ltblack p-4">
              <div className="flex items-center">{data.highTemperature}<WiCelsius className="text-[26px] -translate-x-[3px]"/> </div>
            </td>
            <td className="border-b dark:border-ltblack p-4">
              <div className="flex items-center">{data.lowTemperature}<WiCelsius className="text-[26px] -translate-x-[3px]"/></div>
            </td>
            <td className="border-b dark:border-ltblack p-4">
              <div className="flex items-end gap-[2px]">{data.windSpeed} <span className="text-[10px]">Km/h</span></div>
            </td>
            <td className="border-b dark:border-ltblack p-4"><div className="flex justify-start">{data.humidity}%</div></td>
            <td className="border-b dark:border-ltblack p-4">
              <a href="#" className="">
                <HiOutlineLink className="text-purple-500 dark:text-purple-300" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeatherTable;
