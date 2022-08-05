import RequestSuccessCallbackResult = UniNamespace.RequestSuccessCallbackResult;

export interface HourlyData {
  datetime: string;
  value: number;
}

export interface DailyData {
  date: string;
  value: string;
}

export interface DailyNumberData {
  date: string;
  max: number;
  min: number;
  avg: number;
}

export interface DailyTextData {
  datetime: string;
  index: string;
  desc: string;
}

export interface WindData {
  direction: number;
  speed: number;
}

export interface Alert {
  content: Array<any>;
  status: string;
}

export interface Daily {
  aqi: Array<DailyNumberData>;
  astro: Array<{
    date: string
    sunrise: {
      time: string
    }
    sunset: {
      time: string
    }
  }>;
  carWashing: Array<DailyTextData>;
  cloudrate: Array<DailyNumberData>;
  coldRisk: Array<DailyTextData>;
  comfort: Array<DailyTextData>;
  dressing: Array<DailyTextData>;
  dswrf: Array<DailyNumberData>;
  humidity: Array<DailyNumberData>;
  pm25: Array<DailyNumberData>;
  precipitation: Array<DailyNumberData>;
  pres: Array<DailyNumberData>;
  skycon: Array<DailyData>;
  skycon_08h_20h: Array<DailyData>;
  skycon_20h_32h: Array<DailyData>;
  temperature: Array<DailyNumberData>;
  ultraviolet: Array<DailyTextData>;
  visibility: Array<DailyNumberData>;
  wind: Array<{
    date: string
    avg: WindData
    max: WindData
    min: WindData
  }>;
}

export interface Hourly {
  aqi: Array<HourlyData>;
  cloudrate: Array<HourlyData>;
  dswrf: Array<HourlyData>;
  humidity: Array<HourlyData>;
  pm25: Array<HourlyData>;
  precipitation: Array<HourlyData>;
  pres: Array<HourlyData>;
  skycon: Array<{
    datetime: string
    value: string
  }>;
  temperature: Array<HourlyData>;
  visibility: Array<HourlyData>;
  wind: Array<{
    datetime: string
    speed: number
    direction: number
  }>;
  description: string;
  status: string;
}

export interface Minutely {
  datasource: string;
  description: string;
  precipitation: Array<number>;
  precipitation_2h: Array<number>;
  probability: Array<number>;
  status: string;
}

export interface Realtime {
  apparent_temperature: number;
  aqi: number;
  cloudrate: number;
  co: number;
  comfort: { index: number, desc: string };
  dswrf: number;
  humidity: number;
  no2: number;
  o3: number;
  pm10: number;
  pm25: number;
  precipitation: {
    local: { status: string, datasource: string, intensity: number }
    nearest: { status: string, distance: number, intensity: number }
  };
  pres: number;
  skycon: string;
  so2: number;
  status: string;
  temperature: number;
  ultraviolet: { index: number, desc: string };
  visibility: number;
  wind: { speed: number, direction: number };
}

export interface WeatherInfo {
  data: {
    api_status: string
    api_version: string
    lang: string
    location: Array<number>
    result: {
      alert: Alert
      daily: Daily
      forecast_keypoint: string
      hourly: Hourly
      minutely: Minutely
      primary: number
      realtime: Realtime
    }
    server_time: number
    status: string
    tzshift: number
    unit: string
  };
}

export async function reqWeather(longitude: number, latitude: number) {
  // return {
  //   'data': {
  //     'status': 'ok',
  //     'api_version': 'v2.2',
  //     'api_status': 'active',
  //     'lang': 'zh_CN',
  //     'unit': 'metric',
  //     'tzshift': 28800,
  //     'server_time': 1659682287,
  //     'location': [23.69805, 113.062577],
  //     'result': {
  //       'alert': {
  //         'status': 'ok',
  //         'content': [
  //           {
  //             code: '0101',
  //           },
  //         ],
  //       },
  //       'realtime': {
  //         'status': 'ok',
  //         'temperature': 28,
  //         'humidity': 0.79,
  //         'cloudrate': 0.3,
  //         'skycon': 'PARTLY_CLOUDY_DAY',
  //         'visibility': 30,
  //         'dswrf': 274.9,
  //         'wind': {
  //           'speed': 10.01,
  //           'direction': 150,
  //         },
  //         'pres': 99311.85,
  //         'apparent_temperature': 30.6,
  //         'precipitation': {
  //           'local': {
  //             'status': 'ok',
  //             'datasource': 'radar',
  //             'intensity': 0,
  //           },
  //           'nearest': {
  //             'status': 'ok',
  //             'distance': 5.12,
  //             'intensity': 0.1875,
  //           },
  //         },
  //         'aqi': 35,
  //         'pm25': 9,
  //         'pm10': 10,
  //         'o3': 111,
  //         'so2': 4,
  //         'no2': 11,
  //         'co': 0.4,
  //         'ultraviolet': {
  //           'index': 6,
  //           'desc': '中等',
  //         },
  //         'comfort': {
  //           'index': 0,
  //           'desc': '闷热',
  //         },
  //       },
  //       'minutely': {
  //         'status': 'ok',
  //         'datasource': 'radar',
  //         'precipitation_2h': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0283, 0.0625, 0.0935, 0.1207, 0.1438, 0.1629, 0.1775, 0.1875, 0.193, 0.1947, 0.194, 0.1917, 0.1892, 0.1875, 0.1874, 0.1884, 0.1897, 0.1905, 0.1901, 0.1875, 0.1822, 0.1744, 0.1644, 0.1526, 0.1394, 0.125, 0.11, 0.0954, 0.0823, 0.0717, 0.0647, 0.0625, 0.0654, 0.0712, 0.0768, 0.0792, 0.0754, 0.0625, 0.0385, 0.0064, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0251, 0.0521, 0.0625, 0.0521, 0.025, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //         'precipitation': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0283, 0.0625, 0.0935, 0.1207, 0.1438, 0.1629, 0.1775, 0.1875, 0.193, 0.1947, 0.194, 0.1917, 0.1892, 0.1875, 0.1874, 0.1884, 0.1897, 0.1905, 0.1901, 0.1875, 0.1822, 0.1744, 0.1644, 0.1526, 0.1394, 0.125, 0.11, 0.0954, 0.0823, 0.0717, 0.0647, 0.0625, 0.0654, 0.0712, 0.0768, 0.0792, 0.0754, 0.0625, 0.0385, 0.0064, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //         'probability': [0.7449250627746589, 0.7847924679801077, 0, 0.08668544937434165],
  //         'description': '12分钟后开始下小雨，但49分钟后会停',
  //       },
  //       'hourly': {
  //         'status': 'ok',
  //         'description': '多云，今天下午15点钟后转小雨，其后多云',
  //         'precipitation': [{
  //           'datetime': '2022-08-05 14:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-05 15:00',
  //           'value': 0.1882,
  //         }, {
  //           'datetime': '2022-08-05 16:00',
  //           'value': 0.1262,
  //         }, {
  //           'datetime': '2022-08-05 17:00',
  //           'value': 0.7267,
  //         }, {
  //           'datetime': '2022-08-05 18:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-05 19:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-05 20:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-05 21:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-05 22:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-05 23:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 00:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 01:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 02:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 03:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 04:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 05:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 06:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 07:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 08:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 09:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 10:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 11:00',
  //           'value': 0.1372,
  //         }, {
  //           'datetime': '2022-08-06 12:00',
  //           'value': 0.6873,
  //         }, {
  //           'datetime': '2022-08-06 13:00',
  //           'value': 12.6697,
  //         }, {
  //           'datetime': '2022-08-06 14:00',
  //           'value': 1.7485,
  //         }, {
  //           'datetime': '2022-08-06 15:00',
  //           'value': 0.0964,
  //         }, {
  //           'datetime': '2022-08-06 16:00',
  //           'value': 0.0755,
  //         }, {
  //           'datetime': '2022-08-06 17:00',
  //           'value': 0.0429,
  //         }, {
  //           'datetime': '2022-08-06 18:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 19:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 20:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 21:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 22:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 23:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 00:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 01:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 02:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 03:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 04:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 05:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 06:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 07:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 08:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 09:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 10:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 11:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 12:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 13:00',
  //           'value': 0,
  //         }],
  //         'temperature': [{
  //           'datetime': '2022-08-05 14:00',
  //           'value': 28,
  //         }, {
  //           'datetime': '2022-08-05 15:00',
  //           'value': 28,
  //         }, {
  //           'datetime': '2022-08-05 16:00',
  //           'value': 28,
  //         }, {
  //           'datetime': '2022-08-05 17:00',
  //           'value': 28,
  //         }, {
  //           'datetime': '2022-08-05 18:00',
  //           'value': 27.4,
  //         }, {
  //           'datetime': '2022-08-05 19:00',
  //           'value': 27,
  //         }, {
  //           'datetime': '2022-08-05 20:00',
  //           'value': 26.4,
  //         }, {
  //           'datetime': '2022-08-05 21:00',
  //           'value': 26,
  //         }, {
  //           'datetime': '2022-08-05 22:00',
  //           'value': 26,
  //         }, {
  //           'datetime': '2022-08-05 23:00',
  //           'value': 26,
  //         }, {
  //           'datetime': '2022-08-06 00:00',
  //           'value': 26,
  //         }, {
  //           'datetime': '2022-08-06 01:00',
  //           'value': 26,
  //         }, {
  //           'datetime': '2022-08-06 02:00',
  //           'value': 26,
  //         }, {
  //           'datetime': '2022-08-06 03:00',
  //           'value': 26,
  //         }, {
  //           'datetime': '2022-08-06 04:00',
  //           'value': 26,
  //         }, {
  //           'datetime': '2022-08-06 05:00',
  //           'value': 26.2,
  //         }, {
  //           'datetime': '2022-08-06 06:00',
  //           'value': 27.2,
  //         }, {
  //           'datetime': '2022-08-06 07:00',
  //           'value': 28.2,
  //         }, {
  //           'datetime': '2022-08-06 08:00',
  //           'value': 28.8,
  //         }, {
  //           'datetime': '2022-08-06 09:00',
  //           'value': 29.4,
  //         }, {
  //           'datetime': '2022-08-06 10:00',
  //           'value': 30,
  //         }, {
  //           'datetime': '2022-08-06 11:00',
  //           'value': 30.8,
  //         }, {
  //           'datetime': '2022-08-06 12:00',
  //           'value': 31.6,
  //         }, {
  //           'datetime': '2022-08-06 13:00',
  //           'value': 31.8,
  //         }, {
  //           'datetime': '2022-08-06 14:00',
  //           'value': 32,
  //         }, {
  //           'datetime': '2022-08-06 15:00',
  //           'value': 31.81,
  //         }, {
  //           'datetime': '2022-08-06 16:00',
  //           'value': 31.59,
  //         }, {
  //           'datetime': '2022-08-06 17:00',
  //           'value': 31.33,
  //         }, {
  //           'datetime': '2022-08-06 18:00',
  //           'value': 30.93,
  //         }, {
  //           'datetime': '2022-08-06 19:00',
  //           'value': 29.84,
  //         }, {
  //           'datetime': '2022-08-06 20:00',
  //           'value': 29.04,
  //         }, {
  //           'datetime': '2022-08-06 21:00',
  //           'value': 27.89,
  //         }, {
  //           'datetime': '2022-08-06 22:00',
  //           'value': 26.96,
  //         }, {
  //           'datetime': '2022-08-06 23:00',
  //           'value': 26.06,
  //         }, {
  //           'datetime': '2022-08-07 00:00',
  //           'value': 25.39,
  //         }, {
  //           'datetime': '2022-08-07 01:00',
  //           'value': 25.2,
  //         }, {
  //           'datetime': '2022-08-07 02:00',
  //           'value': 25.06,
  //         }, {
  //           'datetime': '2022-08-07 03:00',
  //           'value': 25,
  //         }, {
  //           'datetime': '2022-08-07 04:00',
  //           'value': 25,
  //         }, {
  //           'datetime': '2022-08-07 05:00',
  //           'value': 25.9,
  //         }, {
  //           'datetime': '2022-08-07 06:00',
  //           'value': 25,
  //         }, {
  //           'datetime': '2022-08-07 07:00',
  //           'value': 27.65,
  //         }, {
  //           'datetime': '2022-08-07 08:00',
  //           'value': 28.23,
  //         }, {
  //           'datetime': '2022-08-07 09:00',
  //           'value': 28.82,
  //         }, {
  //           'datetime': '2022-08-07 10:00',
  //           'value': 29.39,
  //         }, {
  //           'datetime': '2022-08-07 11:00',
  //           'value': 30.08,
  //         }, {
  //           'datetime': '2022-08-07 12:00',
  //           'value': 30.82,
  //         }, {
  //           'datetime': '2022-08-07 13:00',
  //           'value': 31.6,
  //         }],
  //         'wind': [{
  //           'datetime': '2022-08-05 14:00',
  //           'speed': 10.01,
  //           'direction': 150,
  //         }, {
  //           'datetime': '2022-08-05 15:00',
  //           'speed': 12.11,
  //           'direction': 151.7,
  //         }, {
  //           'datetime': '2022-08-05 16:00',
  //           'speed': 11.76,
  //           'direction': 160.95,
  //         }, {
  //           'datetime': '2022-08-05 17:00',
  //           'speed': 8.08,
  //           'direction': 169.63,
  //         }, {
  //           'datetime': '2022-08-05 18:00',
  //           'speed': 5.21,
  //           'direction': 176.17,
  //         }, {
  //           'datetime': '2022-08-05 19:00',
  //           'speed': 3.78,
  //           'direction': 169.67,
  //         }, {
  //           'datetime': '2022-08-05 20:00',
  //           'speed': 2.61,
  //           'direction': 122.42,
  //         }, {
  //           'datetime': '2022-08-05 21:00',
  //           'speed': 4.69,
  //           'direction': 91.72,
  //         }, {
  //           'datetime': '2022-08-05 22:00',
  //           'speed': 5.13,
  //           'direction': 82.47,
  //         }, {
  //           'datetime': '2022-08-05 23:00',
  //           'speed': 4.87,
  //           'direction': 63.14,
  //         }, {
  //           'datetime': '2022-08-06 00:00',
  //           'speed': 5.23,
  //           'direction': 53.66,
  //         }, {
  //           'datetime': '2022-08-06 01:00',
  //           'speed': 5.71,
  //           'direction': 52.23,
  //         }, {
  //           'datetime': '2022-08-06 02:00',
  //           'speed': 5.78,
  //           'direction': 46.17,
  //         }, {
  //           'datetime': '2022-08-06 03:00',
  //           'speed': 5.04,
  //           'direction': 42.51,
  //         }, {
  //           'datetime': '2022-08-06 04:00',
  //           'speed': 4.52,
  //           'direction': 45.4,
  //         }, {
  //           'datetime': '2022-08-06 05:00',
  //           'speed': 4.16,
  //           'direction': 40.86,
  //         }, {
  //           'datetime': '2022-08-06 06:00',
  //           'speed': 4.17,
  //           'direction': 36.48,
  //         }, {
  //           'datetime': '2022-08-06 07:00',
  //           'speed': 3.43,
  //           'direction': 38.03,
  //         }, {
  //           'datetime': '2022-08-06 08:00',
  //           'speed': 3.57,
  //           'direction': 52.62,
  //         }, {
  //           'datetime': '2022-08-06 09:00',
  //           'speed': 4.56,
  //           'direction': 79.63,
  //         }, {
  //           'datetime': '2022-08-06 10:00',
  //           'speed': 5.47,
  //           'direction': 111.83,
  //         }, {
  //           'datetime': '2022-08-06 11:00',
  //           'speed': 7.64,
  //           'direction': 130.85,
  //         }, {
  //           'datetime': '2022-08-06 12:00',
  //           'speed': 8.96,
  //           'direction': 150.05,
  //         }, {
  //           'datetime': '2022-08-06 13:00',
  //           'speed': 8.26,
  //           'direction': 159.52,
  //         }, {
  //           'datetime': '2022-08-06 14:00',
  //           'speed': 7.26,
  //           'direction': 173.27,
  //         }, {
  //           'datetime': '2022-08-06 15:00',
  //           'speed': 6.81,
  //           'direction': 191.16,
  //         }, {
  //           'datetime': '2022-08-06 16:00',
  //           'speed': 5.75,
  //           'direction': 193.83,
  //         }, {
  //           'datetime': '2022-08-06 17:00',
  //           'speed': 5.52,
  //           'direction': 193.16,
  //         }, {
  //           'datetime': '2022-08-06 18:00',
  //           'speed': 3.64,
  //           'direction': 201.3,
  //         }, {
  //           'datetime': '2022-08-06 19:00',
  //           'speed': 1.86,
  //           'direction': 139.53,
  //         }, {
  //           'datetime': '2022-08-06 20:00',
  //           'speed': 1.13,
  //           'direction': 129.13,
  //         }, {
  //           'datetime': '2022-08-06 21:00',
  //           'speed': 0.92,
  //           'direction': 150.38,
  //         }, {
  //           'datetime': '2022-08-06 22:00',
  //           'speed': 1.74,
  //           'direction': 220.68,
  //         }, {
  //           'datetime': '2022-08-06 23:00',
  //           'speed': 3.24,
  //           'direction': 217.56,
  //         }, {
  //           'datetime': '2022-08-07 00:00',
  //           'speed': 3.25,
  //           'direction': 212.3,
  //         }, {
  //           'datetime': '2022-08-07 01:00',
  //           'speed': 1.26,
  //           'direction': 228.16,
  //         }, {
  //           'datetime': '2022-08-07 02:00',
  //           'speed': 0.84,
  //           'direction': 316.58,
  //         }, {
  //           'datetime': '2022-08-07 03:00',
  //           'speed': 2.34,
  //           'direction': 56.24,
  //         }, {
  //           'datetime': '2022-08-07 04:00',
  //           'speed': 2.7,
  //           'direction': 33.08,
  //         }, {
  //           'datetime': '2022-08-07 05:00',
  //           'speed': 2.24,
  //           'direction': 12.52,
  //         }, {
  //           'datetime': '2022-08-07 06:00',
  //           'speed': 2.74,
  //           'direction': 20.24,
  //         }, {
  //           'datetime': '2022-08-07 07:00',
  //           'speed': 3.76,
  //           'direction': 22.35,
  //         }, {
  //           'datetime': '2022-08-07 08:00',
  //           'speed': 4.13,
  //           'direction': 17.71,
  //         }, {
  //           'datetime': '2022-08-07 09:00',
  //           'speed': 3.18,
  //           'direction': 44.65,
  //         }, {
  //           'datetime': '2022-08-07 10:00',
  //           'speed': 2.56,
  //           'direction': 107.02,
  //         }, {
  //           'datetime': '2022-08-07 11:00',
  //           'speed': 4.5,
  //           'direction': 166.44,
  //         }, {
  //           'datetime': '2022-08-07 12:00',
  //           'speed': 6.37,
  //           'direction': 159.86,
  //         }, {
  //           'datetime': '2022-08-07 13:00',
  //           'speed': 6.85,
  //           'direction': 165.55,
  //         }],
  //         'humidity': [{
  //           'datetime': '2022-08-05 14:00',
  //           'value': 0.79,
  //         }, {
  //           'datetime': '2022-08-05 15:00',
  //           'value': 0.94,
  //         }, {
  //           'datetime': '2022-08-05 16:00',
  //           'value': 0.92,
  //         }, {
  //           'datetime': '2022-08-05 17:00',
  //           'value': 0.92,
  //         }, {
  //           'datetime': '2022-08-05 18:00',
  //           'value': 0.93,
  //         }, {
  //           'datetime': '2022-08-05 19:00',
  //           'value': 0.92,
  //         }, {
  //           'datetime': '2022-08-05 20:00',
  //           'value': 0.93,
  //         }, {
  //           'datetime': '2022-08-05 21:00',
  //           'value': 0.92,
  //         }, {
  //           'datetime': '2022-08-05 22:00',
  //           'value': 0.93,
  //         }, {
  //           'datetime': '2022-08-05 23:00',
  //           'value': 0.94,
  //         }, {
  //           'datetime': '2022-08-06 00:00',
  //           'value': 0.95,
  //         }, {
  //           'datetime': '2022-08-06 01:00',
  //           'value': 0.95,
  //         }, {
  //           'datetime': '2022-08-06 02:00',
  //           'value': 0.95,
  //         }, {
  //           'datetime': '2022-08-06 03:00',
  //           'value': 0.96,
  //         }, {
  //           'datetime': '2022-08-06 04:00',
  //           'value': 0.95,
  //         }, {
  //           'datetime': '2022-08-06 05:00',
  //           'value': 0.95,
  //         }, {
  //           'datetime': '2022-08-06 06:00',
  //           'value': 0.94,
  //         }, {
  //           'datetime': '2022-08-06 07:00',
  //           'value': 0.92,
  //         }, {
  //           'datetime': '2022-08-06 08:00',
  //           'value': 0.88,
  //         }, {
  //           'datetime': '2022-08-06 09:00',
  //           'value': 0.82,
  //         }, {
  //           'datetime': '2022-08-06 10:00',
  //           'value': 0.76,
  //         }, {
  //           'datetime': '2022-08-06 11:00',
  //           'value': 0.72,
  //         }, {
  //           'datetime': '2022-08-06 12:00',
  //           'value': 0.7,
  //         }, {
  //           'datetime': '2022-08-06 13:00',
  //           'value': 0.69,
  //         }, {
  //           'datetime': '2022-08-06 14:00',
  //           'value': 0.68,
  //         }, {
  //           'datetime': '2022-08-06 15:00',
  //           'value': 0.7,
  //         }, {
  //           'datetime': '2022-08-06 16:00',
  //           'value': 0.7,
  //         }, {
  //           'datetime': '2022-08-06 17:00',
  //           'value': 0.71,
  //         }, {
  //           'datetime': '2022-08-06 18:00',
  //           'value': 0.75,
  //         }, {
  //           'datetime': '2022-08-06 19:00',
  //           'value': 0.79,
  //         }, {
  //           'datetime': '2022-08-06 20:00',
  //           'value': 0.81,
  //         }, {
  //           'datetime': '2022-08-06 21:00',
  //           'value': 0.82,
  //         }, {
  //           'datetime': '2022-08-06 22:00',
  //           'value': 0.84,
  //         }, {
  //           'datetime': '2022-08-06 23:00',
  //           'value': 0.85,
  //         }, {
  //           'datetime': '2022-08-07 00:00',
  //           'value': 0.87,
  //         }, {
  //           'datetime': '2022-08-07 01:00',
  //           'value': 0.88,
  //         }, {
  //           'datetime': '2022-08-07 02:00',
  //           'value': 0.89,
  //         }, {
  //           'datetime': '2022-08-07 03:00',
  //           'value': 0.9,
  //         }, {
  //           'datetime': '2022-08-07 04:00',
  //           'value': 0.91,
  //         }, {
  //           'datetime': '2022-08-07 05:00',
  //           'value': 0.91,
  //         }, {
  //           'datetime': '2022-08-07 06:00',
  //           'value': 0.92,
  //         }, {
  //           'datetime': '2022-08-07 07:00',
  //           'value': 0.89,
  //         }, {
  //           'datetime': '2022-08-07 08:00',
  //           'value': 0.83,
  //         }, {
  //           'datetime': '2022-08-07 09:00',
  //           'value': 0.77,
  //         }, {
  //           'datetime': '2022-08-07 10:00',
  //           'value': 0.68,
  //         }, {
  //           'datetime': '2022-08-07 11:00',
  //           'value': 0.63,
  //         }, {
  //           'datetime': '2022-08-07 12:00',
  //           'value': 0.59,
  //         }, {
  //           'datetime': '2022-08-07 13:00',
  //           'value': 0.57,
  //         }],
  //         'cloudrate': [{
  //           'datetime': '2022-08-05 14:00',
  //           'value': 0.3,
  //         }, {
  //           'datetime': '2022-08-05 15:00',
  //           'value': 0.3,
  //         }, {
  //           'datetime': '2022-08-05 16:00',
  //           'value': 0.95,
  //         }, {
  //           'datetime': '2022-08-05 17:00',
  //           'value': 0.99,
  //         }, {
  //           'datetime': '2022-08-05 18:00',
  //           'value': 0.91,
  //         }, {
  //           'datetime': '2022-08-05 19:00',
  //           'value': 0.99,
  //         }, {
  //           'datetime': '2022-08-05 20:00',
  //           'value': 0.77,
  //         }, {
  //           'datetime': '2022-08-05 21:00',
  //           'value': 0.25,
  //         }, {
  //           'datetime': '2022-08-05 22:00',
  //           'value': 0.13,
  //         }, {
  //           'datetime': '2022-08-05 23:00',
  //           'value': 0.11,
  //         }, {
  //           'datetime': '2022-08-06 00:00',
  //           'value': 0.22,
  //         }, {
  //           'datetime': '2022-08-06 01:00',
  //           'value': 0.69,
  //         }, {
  //           'datetime': '2022-08-06 02:00',
  //           'value': 0.64,
  //         }, {
  //           'datetime': '2022-08-06 03:00',
  //           'value': 0.92,
  //         }, {
  //           'datetime': '2022-08-06 04:00',
  //           'value': 1,
  //         }, {
  //           'datetime': '2022-08-06 05:00',
  //           'value': 1,
  //         }, {
  //           'datetime': '2022-08-06 06:00',
  //           'value': 0.84,
  //         }, {
  //           'datetime': '2022-08-06 07:00',
  //           'value': 0.89,
  //         }, {
  //           'datetime': '2022-08-06 08:00',
  //           'value': 0.82,
  //         }, {
  //           'datetime': '2022-08-06 09:00',
  //           'value': 0.42,
  //         }, {
  //           'datetime': '2022-08-06 10:00',
  //           'value': 0.55,
  //         }, {
  //           'datetime': '2022-08-06 11:00',
  //           'value': 0.57,
  //         }, {
  //           'datetime': '2022-08-06 12:00',
  //           'value': 0.84,
  //         }, {
  //           'datetime': '2022-08-06 13:00',
  //           'value': 0.89,
  //         }, {
  //           'datetime': '2022-08-06 14:00',
  //           'value': 1,
  //         }, {
  //           'datetime': '2022-08-06 15:00',
  //           'value': 1,
  //         }, {
  //           'datetime': '2022-08-06 16:00',
  //           'value': 1,
  //         }, {
  //           'datetime': '2022-08-06 17:00',
  //           'value': 0.89,
  //         }, {
  //           'datetime': '2022-08-06 18:00',
  //           'value': 0.66,
  //         }, {
  //           'datetime': '2022-08-06 19:00',
  //           'value': 0.95,
  //         }, {
  //           'datetime': '2022-08-06 20:00',
  //           'value': 0.55,
  //         }, {
  //           'datetime': '2022-08-06 21:00',
  //           'value': 0.73,
  //         }, {
  //           'datetime': '2022-08-06 22:00',
  //           'value': 0.17,
  //         }, {
  //           'datetime': '2022-08-06 23:00',
  //           'value': 0.04,
  //         }, {
  //           'datetime': '2022-08-07 00:00',
  //           'value': 0.65,
  //         }, {
  //           'datetime': '2022-08-07 01:00',
  //           'value': 0.76,
  //         }, {
  //           'datetime': '2022-08-07 02:00',
  //           'value': 0.9,
  //         }, {
  //           'datetime': '2022-08-07 03:00',
  //           'value': 0.64,
  //         }, {
  //           'datetime': '2022-08-07 04:00',
  //           'value': 0.26,
  //         }, {
  //           'datetime': '2022-08-07 05:00',
  //           'value': 0.05,
  //         }, {
  //           'datetime': '2022-08-07 06:00',
  //           'value': 0.03,
  //         }, {
  //           'datetime': '2022-08-07 07:00',
  //           'value': 0.11,
  //         }, {
  //           'datetime': '2022-08-07 08:00',
  //           'value': 0.11,
  //         }, {
  //           'datetime': '2022-08-07 09:00',
  //           'value': 0.85,
  //         }, {
  //           'datetime': '2022-08-07 10:00',
  //           'value': 0.57,
  //         }, {
  //           'datetime': '2022-08-07 11:00',
  //           'value': 0.54,
  //         }, {
  //           'datetime': '2022-08-07 12:00',
  //           'value': 0.38,
  //         }, {
  //           'datetime': '2022-08-07 13:00',
  //           'value': 0.51,
  //         }],
  //         'skycon': [{
  //           'datetime': '2022-08-05 14:00',
  //           'value': 'PARTLY_CLOUDY_DAY',
  //         }, {
  //           'datetime': '2022-08-05 15:00',
  //           'value': 'RAIN',
  //         }, {
  //           'datetime': '2022-08-05 16:00',
  //           'value': 'RAIN',
  //         }, {
  //           'datetime': '2022-08-05 17:00',
  //           'value': 'RAIN',
  //         }, {
  //           'datetime': '2022-08-05 18:00',
  //           'value': 'CLOUDY',
  //         }, {
  //           'datetime': '2022-08-05 19:00',
  //           'value': 'CLOUDY',
  //         }, {
  //           'datetime': '2022-08-05 20:00',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'datetime': '2022-08-05 21:00',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'datetime': '2022-08-05 22:00',
  //           'value': 'CLEAR_NIGHT',
  //         }, {
  //           'datetime': '2022-08-05 23:00',
  //           'value': 'CLEAR_NIGHT',
  //         }, {
  //           'datetime': '2022-08-06 00:00',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'datetime': '2022-08-06 01:00',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'datetime': '2022-08-06 02:00',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'datetime': '2022-08-06 03:00',
  //           'value': 'CLOUDY',
  //         }, {
  //           'datetime': '2022-08-06 04:00',
  //           'value': 'CLOUDY',
  //         }, {
  //           'datetime': '2022-08-06 05:00',
  //           'value': 'CLOUDY',
  //         }, {
  //           'datetime': '2022-08-06 06:00',
  //           'value': 'CLOUDY',
  //         }, {
  //           'datetime': '2022-08-06 07:00',
  //           'value': 'CLOUDY',
  //         }, {
  //           'datetime': '2022-08-06 08:00',
  //           'value': 'CLOUDY',
  //         }, {
  //           'datetime': '2022-08-06 09:00',
  //           'value': 'PARTLY_CLOUDY_DAY',
  //         }, {
  //           'datetime': '2022-08-06 10:00',
  //           'value': 'PARTLY_CLOUDY_DAY',
  //         }, {
  //           'datetime': '2022-08-06 11:00',
  //           'value': 'RAIN',
  //         }, {
  //           'datetime': '2022-08-06 12:00',
  //           'value': 'RAIN',
  //         }, {
  //           'datetime': '2022-08-06 13:00',
  //           'value': 'RAIN',
  //         }, {
  //           'datetime': '2022-08-06 14:00',
  //           'value': 'RAIN',
  //         }, {
  //           'datetime': '2022-08-06 15:00',
  //           'value': 'RAIN',
  //         }, {
  //           'datetime': '2022-08-06 16:00',
  //           'value': 'RAIN',
  //         }, {
  //           'datetime': '2022-08-06 17:00',
  //           'value': 'CLOUDY',
  //         }, {
  //           'datetime': '2022-08-06 18:00',
  //           'value': 'PARTLY_CLOUDY_DAY',
  //         }, {
  //           'datetime': '2022-08-06 19:00',
  //           'value': 'CLOUDY',
  //         }, {
  //           'datetime': '2022-08-06 20:00',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'datetime': '2022-08-06 21:00',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'datetime': '2022-08-06 22:00',
  //           'value': 'CLEAR_NIGHT',
  //         }, {
  //           'datetime': '2022-08-06 23:00',
  //           'value': 'CLEAR_NIGHT',
  //         }, {
  //           'datetime': '2022-08-07 00:00',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'datetime': '2022-08-07 01:00',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'datetime': '2022-08-07 02:00',
  //           'value': 'CLOUDY',
  //         }, {
  //           'datetime': '2022-08-07 03:00',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'datetime': '2022-08-07 04:00',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'datetime': '2022-08-07 05:00',
  //           'value': 'CLEAR_NIGHT',
  //         }, {
  //           'datetime': '2022-08-07 06:00',
  //           'value': 'CLEAR_DAY',
  //         }, {
  //           'datetime': '2022-08-07 07:00',
  //           'value': 'CLEAR_DAY',
  //         }, {
  //           'datetime': '2022-08-07 08:00',
  //           'value': 'CLEAR_DAY',
  //         }, {
  //           'datetime': '2022-08-07 09:00',
  //           'value': 'CLOUDY',
  //         }, {
  //           'datetime': '2022-08-07 10:00',
  //           'value': 'PARTLY_CLOUDY_DAY',
  //         }, {
  //           'datetime': '2022-08-07 11:00',
  //           'value': 'PARTLY_CLOUDY_DAY',
  //         }, {
  //           'datetime': '2022-08-07 12:00',
  //           'value': 'PARTLY_CLOUDY_DAY',
  //         }, {
  //           'datetime': '2022-08-07 13:00',
  //           'value': 'PARTLY_CLOUDY_DAY',
  //         }],
  //         'pres': [{
  //           'datetime': '2022-08-05 14:00',
  //           'value': 99311.8493965824,
  //         }, {
  //           'datetime': '2022-08-05 15:00',
  //           'value': 99311.8493965823,
  //         }, {
  //           'datetime': '2022-08-05 16:00',
  //           'value': 99359.2965209242,
  //         }, {
  //           'datetime': '2022-08-05 17:00',
  //           'value': 99375.9688409241,
  //         }, {
  //           'datetime': '2022-08-05 18:00',
  //           'value': 99391.8493965824,
  //         }, {
  //           'datetime': '2022-08-05 19:00',
  //           'value': 99391.8493965824,
  //         }, {
  //           'datetime': '2022-08-05 20:00',
  //           'value': 99471.8493965824,
  //         }, {
  //           'datetime': '2022-08-05 21:00',
  //           'value': 99551.8493965823,
  //         }, {
  //           'datetime': '2022-08-05 22:00',
  //           'value': 99599.2965209241,
  //         }, {
  //           'datetime': '2022-08-05 23:00',
  //           'value': 99615.9688409241,
  //         }, {
  //           'datetime': '2022-08-06 00:00',
  //           'value': 99599.2965209241,
  //         }, {
  //           'datetime': '2022-08-06 01:00',
  //           'value': 99551.8493965824,
  //         }, {
  //           'datetime': '2022-08-06 02:00',
  //           'value': 99519.2965209241,
  //         }, {
  //           'datetime': '2022-08-06 03:00',
  //           'value': 99471.8493965824,
  //         }, {
  //           'datetime': '2022-08-06 04:00',
  //           'value': 99471.8493965824,
  //         }, {
  //           'datetime': '2022-08-06 05:00',
  //           'value': 99471.8493965824,
  //         }, {
  //           'datetime': '2022-08-06 06:00',
  //           'value': 99471.8493965823,
  //         }, {
  //           'datetime': '2022-08-06 07:00',
  //           'value': 99551.8493965824,
  //         }, {
  //           'datetime': '2022-08-06 08:00',
  //           'value': 99551.8493965824,
  //         }, {
  //           'datetime': '2022-08-06 09:00',
  //           'value': 99599.2965209241,
  //         }, {
  //           'datetime': '2022-08-06 10:00',
  //           'value': 99551.8493965824,
  //         }, {
  //           'datetime': '2022-08-06 11:00',
  //           'value': 99519.2965209241,
  //         }, {
  //           'datetime': '2022-08-06 12:00',
  //           'value': 99471.8493965823,
  //         }, {
  //           'datetime': '2022-08-06 13:00',
  //           'value': 99439.2965209241,
  //         }, {
  //           'datetime': '2022-08-06 14:00',
  //           'value': 99359.2965209241,
  //         }, {
  //           'datetime': '2022-08-06 15:00',
  //           'value': 99359.2965209241,
  //         }, {
  //           'datetime': '2022-08-06 16:00',
  //           'value': 99279.2965209241,
  //         }, {
  //           'datetime': '2022-08-06 17:00',
  //           'value': 99279.2965209241,
  //         }, {
  //           'datetime': '2022-08-06 18:00',
  //           'value': 99279.2965209241,
  //         }, {
  //           'datetime': '2022-08-06 19:00',
  //           'value': 99311.8493965824,
  //         }, {
  //           'datetime': '2022-08-06 20:00',
  //           'value': 99375.9688409241,
  //         }, {
  //           'datetime': '2022-08-06 21:00',
  //           'value': 99455.9688409241,
  //         }, {
  //           'datetime': '2022-08-06 22:00',
  //           'value': 99531.7879565824,
  //         }, {
  //           'datetime': '2022-08-06 23:00',
  //           'value': 99535.9688409241,
  //         }, {
  //           'datetime': '2022-08-07 00:00',
  //           'value': 99519.2965209241,
  //         }, {
  //           'datetime': '2022-08-07 01:00',
  //           'value': 99519.2965209241,
  //         }, {
  //           'datetime': '2022-08-07 02:00',
  //           'value': 99455.9688409241,
  //         }, {
  //           'datetime': '2022-08-07 03:00',
  //           'value': 99439.2965209241,
  //         }, {
  //           'datetime': '2022-08-07 04:00',
  //           'value': 99391.8493965824,
  //         }, {
  //           'datetime': '2022-08-07 05:00',
  //           'value': 99439.2965209241,
  //         }, {
  //           'datetime': '2022-08-07 06:00',
  //           'value': 99439.2965209241,
  //         }, {
  //           'datetime': '2022-08-07 07:00',
  //           'value': 99455.9688409241,
  //         }, {
  //           'datetime': '2022-08-07 08:00',
  //           'value': 99519.2965209241,
  //         }, {
  //           'datetime': '2022-08-07 09:00',
  //           'value': 99519.2965209241,
  //         }, {
  //           'datetime': '2022-08-07 10:00',
  //           'value': 99531.7879565824,
  //         }, {
  //           'datetime': '2022-08-07 11:00',
  //           'value': 99471.8493965824,
  //         }, {
  //           'datetime': '2022-08-07 12:00',
  //           'value': 99455.9688409241,
  //         }, {
  //           'datetime': '2022-08-07 13:00',
  //           'value': 99359.2965209241,
  //         }],
  //         'visibility': [{
  //           'datetime': '2022-08-05 14:00',
  //           'value': 30,
  //         }, {
  //           'datetime': '2022-08-05 15:00',
  //           'value': 28.42,
  //         }, {
  //           'datetime': '2022-08-05 16:00',
  //           'value': 30.25,
  //         }, {
  //           'datetime': '2022-08-05 17:00',
  //           'value': 29.77,
  //         }, {
  //           'datetime': '2022-08-05 18:00',
  //           'value': 29.33,
  //         }, {
  //           'datetime': '2022-08-05 19:00',
  //           'value': 29.42,
  //         }, {
  //           'datetime': '2022-08-05 20:00',
  //           'value': 29.29,
  //         }, {
  //           'datetime': '2022-08-05 21:00',
  //           'value': 29.83,
  //         }, {
  //           'datetime': '2022-08-05 22:00',
  //           'value': 28.88,
  //         }, {
  //           'datetime': '2022-08-05 23:00',
  //           'value': 28.03,
  //         }, {
  //           'datetime': '2022-08-06 00:00',
  //           'value': 27.15,
  //         }, {
  //           'datetime': '2022-08-06 01:00',
  //           'value': 27.03,
  //         }, {
  //           'datetime': '2022-08-06 02:00',
  //           'value': 27.23,
  //         }, {
  //           'datetime': '2022-08-06 03:00',
  //           'value': 26.81,
  //         }, {
  //           'datetime': '2022-08-06 04:00',
  //           'value': 27.27,
  //         }, {
  //           'datetime': '2022-08-06 05:00',
  //           'value': 27.39,
  //         }, {
  //           'datetime': '2022-08-06 06:00',
  //           'value': 27.86,
  //         }, {
  //           'datetime': '2022-08-06 07:00',
  //           'value': 29.82,
  //         }, {
  //           'datetime': '2022-08-06 08:00',
  //           'value': 34.23,
  //         }, {
  //           'datetime': '2022-08-06 09:00',
  //           'value': 43.15,
  //         }, {
  //           'datetime': '2022-08-06 10:00',
  //           'value': 60.83,
  //         }, {
  //           'datetime': '2022-08-06 11:00',
  //           'value': 81.65,
  //         }, {
  //           'datetime': '2022-08-06 12:00',
  //           'value': 95.41,
  //         }, {
  //           'datetime': '2022-08-06 13:00',
  //           'value': 95.41,
  //         }, {
  //           'datetime': '2022-08-06 14:00',
  //           'value': 95.41,
  //         }, {
  //           'datetime': '2022-08-06 15:00',
  //           'value': 95.41,
  //         }, {
  //           'datetime': '2022-08-06 16:00',
  //           'value': 91.49,
  //         }, {
  //           'datetime': '2022-08-06 17:00',
  //           'value': 88.5,
  //         }, {
  //           'datetime': '2022-08-06 18:00',
  //           'value': 63.64,
  //         }, {
  //           'datetime': '2022-08-06 19:00',
  //           'value': 51.5,
  //         }, {
  //           'datetime': '2022-08-06 20:00',
  //           'value': 45.9,
  //         }, {
  //           'datetime': '2022-08-06 21:00',
  //           'value': 43.57,
  //         }, {
  //           'datetime': '2022-08-06 22:00',
  //           'value': 40.08,
  //         }, {
  //           'datetime': '2022-08-06 23:00',
  //           'value': 38.14,
  //         }, {
  //           'datetime': '2022-08-07 00:00',
  //           'value': 35.46,
  //         }, {
  //           'datetime': '2022-08-07 01:00',
  //           'value': 33.6,
  //         }, {
  //           'datetime': '2022-08-07 02:00',
  //           'value': 32.45,
  //         }, {
  //           'datetime': '2022-08-07 03:00',
  //           'value': 31.55,
  //         }, {
  //           'datetime': '2022-08-07 04:00',
  //           'value': 31.13,
  //         }, {
  //           'datetime': '2022-08-07 05:00',
  //           'value': 30.35,
  //         }, {
  //           'datetime': '2022-08-07 06:00',
  //           'value': 29.59,
  //         }, {
  //           'datetime': '2022-08-07 07:00',
  //           'value': 32.91,
  //         }, {
  //           'datetime': '2022-08-07 08:00',
  //           'value': 41.93,
  //         }, {
  //           'datetime': '2022-08-07 09:00',
  //           'value': 57.1,
  //         }, {
  //           'datetime': '2022-08-07 10:00',
  //           'value': 95.41,
  //         }, {
  //           'datetime': '2022-08-07 11:00',
  //           'value': 95.41,
  //         }, {
  //           'datetime': '2022-08-07 12:00',
  //           'value': 95.41,
  //         }, {
  //           'datetime': '2022-08-07 13:00',
  //           'value': 95.41,
  //         }],
  //         'dswrf': [{
  //           'datetime': '2022-08-05 14:00',
  //           'value': 274.9034591929,
  //         }, {
  //           'datetime': '2022-08-05 15:00',
  //           'value': 88.2748199989,
  //         }, {
  //           'datetime': '2022-08-05 16:00',
  //           'value': 107.4091654551,
  //         }, {
  //           'datetime': '2022-08-05 17:00',
  //           'value': 95.963041828,
  //         }, {
  //           'datetime': '2022-08-05 18:00',
  //           'value': 77.4931951617,
  //         }, {
  //           'datetime': '2022-08-05 19:00',
  //           'value': 66.4861105728,
  //         }, {
  //           'datetime': '2022-08-05 20:00',
  //           'value': 55.3530444954,
  //         }, {
  //           'datetime': '2022-08-05 21:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-05 22:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-05 23:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 00:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 01:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 02:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 03:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 04:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 05:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 06:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 07:00',
  //           'value': 5.5360907286,
  //         }, {
  //           'datetime': '2022-08-06 08:00',
  //           'value': 27.7090412402,
  //         }, {
  //           'datetime': '2022-08-06 09:00',
  //           'value': 336.4428519054,
  //         }, {
  //           'datetime': '2022-08-06 10:00',
  //           'value': 490.8503880301,
  //         }, {
  //           'datetime': '2022-08-06 11:00',
  //           'value': 578.8806914723,
  //         }, {
  //           'datetime': '2022-08-06 12:00',
  //           'value': 640.6009231005,
  //         }, {
  //           'datetime': '2022-08-06 13:00',
  //           'value': 664.4574529919,
  //         }, {
  //           'datetime': '2022-08-06 14:00',
  //           'value': 678.1974002171,
  //         }, {
  //           'datetime': '2022-08-06 15:00',
  //           'value': 605.8901773971,
  //         }, {
  //           'datetime': '2022-08-06 16:00',
  //           'value': 528.4280184826,
  //         }, {
  //           'datetime': '2022-08-06 17:00',
  //           'value': 470.7781466373,
  //         }, {
  //           'datetime': '2022-08-06 18:00',
  //           'value': 412.331498172,
  //         }, {
  //           'datetime': '2022-08-06 19:00',
  //           'value': 342.9122385438,
  //         }, {
  //           'datetime': '2022-08-06 20:00',
  //           'value': 285.8212273498,
  //         }, {
  //           'datetime': '2022-08-06 21:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 22:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-06 23:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 00:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 01:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 02:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 03:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 04:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 05:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 06:00',
  //           'value': 0,
  //         }, {
  //           'datetime': '2022-08-07 07:00',
  //           'value': 10.0522610543,
  //         }, {
  //           'datetime': '2022-08-07 08:00',
  //           'value': 51.250768,
  //         }, {
  //           'datetime': '2022-08-07 09:00',
  //           'value': 478.3853252714,
  //         }, {
  //           'datetime': '2022-08-07 10:00',
  //           'value': 573.6474856744,
  //         }, {
  //           'datetime': '2022-08-07 11:00',
  //           'value': 661.0328109457,
  //         }, {
  //           'datetime': '2022-08-07 12:00',
  //           'value': 729.5851604342,
  //         }, {
  //           'datetime': '2022-08-07 13:00',
  //           'value': 772.6592318141,
  //         }],
  //         'aqi': [{
  //           'datetime': '2022-08-05 14:00',
  //           'value': 35,
  //         }, {
  //           'datetime': '2022-08-05 15:00',
  //           'value': 19,
  //         }, {
  //           'datetime': '2022-08-05 16:00',
  //           'value': 20,
  //         }, {
  //           'datetime': '2022-08-05 17:00',
  //           'value': 21,
  //         }, {
  //           'datetime': '2022-08-05 18:00',
  //           'value': 21,
  //         }, {
  //           'datetime': '2022-08-05 19:00',
  //           'value': 21,
  //         }, {
  //           'datetime': '2022-08-05 20:00',
  //           'value': 23,
  //         }, {
  //           'datetime': '2022-08-05 21:00',
  //           'value': 24,
  //         }, {
  //           'datetime': '2022-08-05 22:00',
  //           'value': 27,
  //         }, {
  //           'datetime': '2022-08-05 23:00',
  //           'value': 29,
  //         }, {
  //           'datetime': '2022-08-06 00:00',
  //           'value': 27,
  //         }, {
  //           'datetime': '2022-08-06 01:00',
  //           'value': 26,
  //         }, {
  //           'datetime': '2022-08-06 02:00',
  //           'value': 24,
  //         }, {
  //           'datetime': '2022-08-06 03:00',
  //           'value': 24,
  //         }, {
  //           'datetime': '2022-08-06 04:00',
  //           'value': 24,
  //         }, {
  //           'datetime': '2022-08-06 05:00',
  //           'value': 27,
  //         }, {
  //           'datetime': '2022-08-06 06:00',
  //           'value': 29,
  //         }, {
  //           'datetime': '2022-08-06 07:00',
  //           'value': 30,
  //         }, {
  //           'datetime': '2022-08-06 08:00',
  //           'value': 30,
  //         }, {
  //           'datetime': '2022-08-06 09:00',
  //           'value': 29,
  //         }, {
  //           'datetime': '2022-08-06 10:00',
  //           'value': 24,
  //         }, {
  //           'datetime': '2022-08-06 11:00',
  //           'value': 21,
  //         }, {
  //           'datetime': '2022-08-06 12:00',
  //           'value': 19,
  //         }, {
  //           'datetime': '2022-08-06 13:00',
  //           'value': 16,
  //         }, {
  //           'datetime': '2022-08-06 14:00',
  //           'value': 16,
  //         }, {
  //           'datetime': '2022-08-06 15:00',
  //           'value': 19,
  //         }, {
  //           'datetime': '2022-08-06 16:00',
  //           'value': 21,
  //         }, {
  //           'datetime': '2022-08-06 17:00',
  //           'value': 24,
  //         }, {
  //           'datetime': '2022-08-06 18:00',
  //           'value': 27,
  //         }, {
  //           'datetime': '2022-08-06 19:00',
  //           'value': 29,
  //         }, {
  //           'datetime': '2022-08-06 20:00',
  //           'value': 30,
  //         }, {
  //           'datetime': '2022-08-06 21:00',
  //           'value': 34,
  //         }, {
  //           'datetime': '2022-08-06 22:00',
  //           'value': 39,
  //         }, {
  //           'datetime': '2022-08-06 23:00',
  //           'value': 43,
  //         }, {
  //           'datetime': '2022-08-07 00:00',
  //           'value': 47,
  //         }, {
  //           'datetime': '2022-08-07 01:00',
  //           'value': 49,
  //         }, {
  //           'datetime': '2022-08-07 02:00',
  //           'value': 51,
  //         }, {
  //           'datetime': '2022-08-07 03:00',
  //           'value': 52,
  //         }, {
  //           'datetime': '2022-08-07 04:00',
  //           'value': 54,
  //         }, {
  //           'datetime': '2022-08-07 05:00',
  //           'value': 55,
  //         }, {
  //           'datetime': '2022-08-07 06:00',
  //           'value': 52,
  //         }, {
  //           'datetime': '2022-08-07 07:00',
  //           'value': 50,
  //         }, {
  //           'datetime': '2022-08-07 08:00',
  //           'value': 49,
  //         }, {
  //           'datetime': '2022-08-07 09:00',
  //           'value': 47,
  //         }, {
  //           'datetime': '2022-08-07 10:00',
  //           'value': 46,
  //         }, {
  //           'datetime': '2022-08-07 11:00',
  //           'value': 44,
  //         }, {
  //           'datetime': '2022-08-07 12:00',
  //           'value': 43,
  //         }, {
  //           'datetime': '2022-08-07 13:00',
  //           'value': 41,
  //         }],
  //         'pm25': [{
  //           'datetime': '2022-08-05 14:00',
  //           'value': 9,
  //         }, {
  //           'datetime': '2022-08-05 15:00',
  //           'value': 13,
  //         }, {
  //           'datetime': '2022-08-05 16:00',
  //           'value': 14,
  //         }, {
  //           'datetime': '2022-08-05 17:00',
  //           'value': 15,
  //         }, {
  //           'datetime': '2022-08-05 18:00',
  //           'value': 15,
  //         }, {
  //           'datetime': '2022-08-05 19:00',
  //           'value': 15,
  //         }, {
  //           'datetime': '2022-08-05 20:00',
  //           'value': 16,
  //         }, {
  //           'datetime': '2022-08-05 21:00',
  //           'value': 17,
  //         }, {
  //           'datetime': '2022-08-05 22:00',
  //           'value': 19,
  //         }, {
  //           'datetime': '2022-08-05 23:00',
  //           'value': 20,
  //         }, {
  //           'datetime': '2022-08-06 00:00',
  //           'value': 19,
  //         }, {
  //           'datetime': '2022-08-06 01:00',
  //           'value': 18,
  //         }, {
  //           'datetime': '2022-08-06 02:00',
  //           'value': 17,
  //         }, {
  //           'datetime': '2022-08-06 03:00',
  //           'value': 17,
  //         }, {
  //           'datetime': '2022-08-06 04:00',
  //           'value': 17,
  //         }, {
  //           'datetime': '2022-08-06 05:00',
  //           'value': 19,
  //         }, {
  //           'datetime': '2022-08-06 06:00',
  //           'value': 20,
  //         }, {
  //           'datetime': '2022-08-06 07:00',
  //           'value': 21,
  //         }, {
  //           'datetime': '2022-08-06 08:00',
  //           'value': 21,
  //         }, {
  //           'datetime': '2022-08-06 09:00',
  //           'value': 20,
  //         }, {
  //           'datetime': '2022-08-06 10:00',
  //           'value': 17,
  //         }, {
  //           'datetime': '2022-08-06 11:00',
  //           'value': 15,
  //         }, {
  //           'datetime': '2022-08-06 12:00',
  //           'value': 13,
  //         }, {
  //           'datetime': '2022-08-06 13:00',
  //           'value': 11,
  //         }, {
  //           'datetime': '2022-08-06 14:00',
  //           'value': 11,
  //         }, {
  //           'datetime': '2022-08-06 15:00',
  //           'value': 13,
  //         }, {
  //           'datetime': '2022-08-06 16:00',
  //           'value': 15,
  //         }, {
  //           'datetime': '2022-08-06 17:00',
  //           'value': 17,
  //         }, {
  //           'datetime': '2022-08-06 18:00',
  //           'value': 19,
  //         }, {
  //           'datetime': '2022-08-06 19:00',
  //           'value': 20,
  //         }, {
  //           'datetime': '2022-08-06 20:00',
  //           'value': 21,
  //         }, {
  //           'datetime': '2022-08-06 21:00',
  //           'value': 24,
  //         }, {
  //           'datetime': '2022-08-06 22:00',
  //           'value': 27,
  //         }, {
  //           'datetime': '2022-08-06 23:00',
  //           'value': 30,
  //         }, {
  //           'datetime': '2022-08-07 00:00',
  //           'value': 33,
  //         }, {
  //           'datetime': '2022-08-07 01:00',
  //           'value': 34,
  //         }, {
  //           'datetime': '2022-08-07 02:00',
  //           'value': 36,
  //         }, {
  //           'datetime': '2022-08-07 03:00',
  //           'value': 37,
  //         }, {
  //           'datetime': '2022-08-07 04:00',
  //           'value': 38,
  //         }, {
  //           'datetime': '2022-08-07 05:00',
  //           'value': 39,
  //         }, {
  //           'datetime': '2022-08-07 06:00',
  //           'value': 37,
  //         }, {
  //           'datetime': '2022-08-07 07:00',
  //           'value': 35,
  //         }, {
  //           'datetime': '2022-08-07 08:00',
  //           'value': 34,
  //         }, {
  //           'datetime': '2022-08-07 09:00',
  //           'value': 33,
  //         }, {
  //           'datetime': '2022-08-07 10:00',
  //           'value': 32,
  //         }, {
  //           'datetime': '2022-08-07 11:00',
  //           'value': 31,
  //         }, {
  //           'datetime': '2022-08-07 12:00',
  //           'value': 30,
  //         }, {
  //           'datetime': '2022-08-07 13:00',
  //           'value': 29,
  //         }],
  //       },
  //       'daily': {
  //         'status': 'ok',
  //         'astro': [{
  //           'date': '2022-08-05',
  //           'sunrise': { 'time': '05:59' },
  //           'sunset': { 'time': '19:08' },
  //         }, {
  //           'date': '2022-08-06',
  //           'sunrise': { 'time': '05:59' },
  //           'sunset': { 'time': '19:07' },
  //         }, {
  //           'date': '2022-08-07',
  //           'sunrise': { 'time': '05:59' },
  //           'sunset': { 'time': '19:07' },
  //         }, {
  //           'date': '2022-08-08',
  //           'sunrise': { 'time': '06:00' },
  //           'sunset': { 'time': '19:06' },
  //         }, {
  //           'date': '2022-08-09',
  //           'sunrise': { 'time': '06:00' },
  //           'sunset': { 'time': '19:05' },
  //         }, {
  //           'date': '2022-08-10',
  //           'sunrise': { 'time': '06:01' },
  //           'sunset': { 'time': '19:05' },
  //         }, {
  //           'date': '2022-08-11',
  //           'sunrise': { 'time': '06:01' },
  //           'sunset': { 'time': '19:04' },
  //         }],
  //         'precipitation': [{
  //           'date': '2022-08-05',
  //           'max': 9.914,
  //           'min': 0,
  //           'avg': 0.1041,
  //         }, {
  //           'date': '2022-08-06',
  //           'max': 12.6697,
  //           'min': 0,
  //           'avg': 0.6441,
  //         }, {
  //           'date': '2022-08-07',
  //           'max': 0,
  //           'min': 0,
  //           'avg': 0,
  //         }, {
  //           'date': '2022-08-08',
  //           'max': 1.0452,
  //           'min': 0,
  //           'avg': 0.0714,
  //         }, {
  //           'date': '2022-08-09',
  //           'max': 1.4238,
  //           'min': 0,
  //           'avg': 0.0986,
  //         }, {
  //           'date': '2022-08-10',
  //           'max': 0.7818,
  //           'min': 0,
  //           'avg': 0.1282,
  //         }, {
  //           'date': '2022-08-11',
  //           'max': 1.0558,
  //           'min': 0,
  //           'avg': 0.3339,
  //         }],
  //         'temperature': [{
  //           'date': '2022-08-05',
  //           'max': 30,
  //           'min': 25,
  //           'avg': 27.08,
  //         }, {
  //           'date': '2022-08-06',
  //           'max': 32,
  //           'min': 26,
  //           'avg': 28.81,
  //         }, {
  //           'date': '2022-08-07',
  //           'max': 34,
  //           'min': 25,
  //           'avg': 29.17,
  //         }, {
  //           'date': '2022-08-08',
  //           'max': 35,
  //           'min': 26,
  //           'avg': 29.84,
  //         }, {
  //           'date': '2022-08-09',
  //           'max': 36,
  //           'min': 26,
  //           'avg': 30.52,
  //         }, {
  //           'date': '2022-08-10',
  //           'max': 33,
  //           'min': 25,
  //           'avg': 29.3,
  //         }, {
  //           'date': '2022-08-11',
  //           'max': 33,
  //           'min': 25,
  //           'avg': 28.25,
  //         }],
  //         'wind': [{
  //           'date': '2022-08-05',
  //           'max': {
  //             'speed': 12.11,
  //             'direction': 151.7,
  //           },
  //           'min': {
  //             'speed': 2.61,
  //             'direction': 122.42,
  //           },
  //           'avg': {
  //             'speed': 7.88,
  //             'direction': 127.68,
  //           },
  //         }, {
  //           'date': '2022-08-06',
  //           'max': {
  //             'speed': 8.96,
  //             'direction': 150.05,
  //           },
  //           'min': {
  //             'speed': 0.92,
  //             'direction': 150.38,
  //           },
  //           'avg': {
  //             'speed': 4.77,
  //             'direction': 120.51,
  //           },
  //         }, {
  //           'date': '2022-08-07',
  //           'max': {
  //             'speed': 6.85,
  //             'direction': 165.55,
  //           },
  //           'min': {
  //             'speed': 0.84,
  //             'direction': 316.58,
  //           },
  //           'avg': {
  //             'speed': 3.56,
  //             'direction': 124.93,
  //           },
  //         }, {
  //           'date': '2022-08-08',
  //           'max': {
  //             'speed': 12.62,
  //             'direction': 123.85,
  //           },
  //           'min': {
  //             'speed': 0.91,
  //             'direction': 309.7,
  //           },
  //           'avg': {
  //             'speed': 5.53,
  //             'direction': 126.88,
  //           },
  //         }, {
  //           'date': '2022-08-09',
  //           'max': {
  //             'speed': 5.07,
  //             'direction': 72.26,
  //           },
  //           'min': {
  //             'speed': 0.98,
  //             'direction': 189.84,
  //           },
  //           'avg': {
  //             'speed': 3.52,
  //             'direction': 14.71,
  //           },
  //         }, {
  //           'date': '2022-08-10',
  //           'max': {
  //             'speed': 8.81,
  //             'direction': 51.43,
  //           },
  //           'min': {
  //             'speed': 1.35,
  //             'direction': 352.67,
  //           },
  //           'avg': {
  //             'speed': 5.7,
  //             'direction': 21.41,
  //           },
  //         }, {
  //           'date': '2022-08-11',
  //           'max': {
  //             'speed': 27.14,
  //             'direction': 97.58,
  //           },
  //           'min': {
  //             'speed': 9.34,
  //             'direction': 16.49,
  //           },
  //           'avg': {
  //             'speed': 18.88,
  //             'direction': 84.19,
  //           },
  //         }],
  //         'humidity': [{
  //           'date': '2022-08-05',
  //           'max': 0.97,
  //           'min': 0.79,
  //           'avg': 0.91,
  //         }, {
  //           'date': '2022-08-06',
  //           'max': 0.96,
  //           'min': 0.68,
  //           'avg': 0.82,
  //         }, {
  //           'date': '2022-08-07',
  //           'max': 0.92,
  //           'min': 0.54,
  //           'avg': 0.74,
  //         }, {
  //           'date': '2022-08-08',
  //           'max': 0.87,
  //           'min': 0.47,
  //           'avg': 0.7,
  //         }, {
  //           'date': '2022-08-09',
  //           'max': 0.9,
  //           'min': 0.48,
  //           'avg': 0.7,
  //         }, {
  //           'date': '2022-08-10',
  //           'max': 0.92,
  //           'min': 0.56,
  //           'avg': 0.76,
  //         }, {
  //           'date': '2022-08-11',
  //           'max': 0.93,
  //           'min': 0.72,
  //           'avg': 0.87,
  //         }],
  //         'cloudrate': [{
  //           'date': '2022-08-05',
  //           'max': 1,
  //           'min': 0.11,
  //           'avg': 0.57,
  //         }, {
  //           'date': '2022-08-06',
  //           'max': 1,
  //           'min': 0.04,
  //           'avg': 0.72,
  //         }, {
  //           'date': '2022-08-07',
  //           'max': 1,
  //           'min': 0.03,
  //           'avg': 0.56,
  //         }, {
  //           'date': '2022-08-08',
  //           'max': 0.92,
  //           'min': 0.05,
  //           'avg': 0.34,
  //         }, {
  //           'date': '2022-08-09',
  //           'max': 0.22,
  //           'min': 0,
  //           'avg': 0.06,
  //         }, {
  //           'date': '2022-08-10',
  //           'max': 1,
  //           'min': 0,
  //           'avg': 0.63,
  //         }, {
  //           'date': '2022-08-11',
  //           'max': 1,
  //           'min': 0.27,
  //           'avg': 0.85,
  //         }],
  //         'pres': [{
  //           'date': '2022-08-05',
  //           'max': 99615.97,
  //           'min': 99211.79,
  //           'avg': 99438.16,
  //         }, {
  //           'date': '2022-08-06',
  //           'max': 99599.3,
  //           'min': 99279.3,
  //           'avg': 99458.8,
  //         }, {
  //           'date': '2022-08-07',
  //           'max': 99531.79,
  //           'min': 99199.3,
  //           'avg': 99390.07,
  //         }, {
  //           'date': '2022-08-08',
  //           'max': 99455.97,
  //           'min': 99043.48,
  //           'avg': 99301.6,
  //         }, {
  //           'date': '2022-08-09',
  //           'max': 99375.97,
  //           'min': 98891.79,
  //           'avg': 99170.29,
  //         }, {
  //           'date': '2022-08-10',
  //           'max': 98959.3,
  //           'min': 98719.3,
  //           'avg': 98839.45,
  //         }, {
  //           'date': '2022-08-11',
  //           'max': 99059.36,
  //           'min': 98562.69,
  //           'avg': 98717.05,
  //         }],
  //         'visibility': [{
  //           'date': '2022-08-05',
  //           'max': 30.25,
  //           'min': 4.42,
  //           'avg': 29.32,
  //         }, {
  //           'date': '2022-08-06',
  //           'max': 95.41,
  //           'min': 26.81,
  //           'avg': 53.54,
  //         }, {
  //           'date': '2022-08-07',
  //           'max': 95.41,
  //           'min': 29.59,
  //           'avg': 67.63,
  //         }, {
  //           'date': '2022-08-08',
  //           'max': 95.41,
  //           'min': 23.66,
  //           'avg': 59.71,
  //         }, {
  //           'date': '2022-08-09',
  //           'max': 95.41,
  //           'min': 19.43,
  //           'avg': 67.37,
  //         }, {
  //           'date': '2022-08-10',
  //           'max': 95.41,
  //           'min': 29.97,
  //           'avg': 53.48,
  //         }, {
  //           'date': '2022-08-11',
  //           'max': 78.34,
  //           'min': 29.33,
  //           'avg': 38.34,
  //         }],
  //         'dswrf': [{
  //           'date': '2022-08-05',
  //           'max': 375.7,
  //           'min': 0,
  //           'avg': 76.6,
  //         }, {
  //           'date': '2022-08-06',
  //           'max': 678.2,
  //           'min': 0,
  //           'avg': 252.9,
  //         }, {
  //           'date': '2022-08-07',
  //           'max': 793.4,
  //           'min': 0,
  //           'avg': 271.9,
  //         }, {
  //           'date': '2022-08-08',
  //           'max': 828.6,
  //           'min': 0,
  //           'avg': 314,
  //         }, {
  //           'date': '2022-08-09',
  //           'max': 849.2,
  //           'min': 0,
  //           'avg': 327.4,
  //         }, {
  //           'date': '2022-08-10',
  //           'max': 634.1,
  //           'min': 0,
  //           'avg': 204.5,
  //         }, {
  //           'date': '2022-08-11',
  //           'max': 363,
  //           'min': -27.1,
  //           'avg': 96.4,
  //         }],
  //         'aqi': [{
  //           'date': '2022-08-05',
  //           'max': 42,
  //           'min': 18,
  //           'avg': 24,
  //         }, {
  //           'date': '2022-08-06',
  //           'max': 43,
  //           'min': 16,
  //           'avg': 26,
  //         }, {
  //           'date': '2022-08-07',
  //           'max': 61,
  //           'min': 39,
  //           'avg': 48,
  //         }, {
  //           'date': '2022-08-08',
  //           'max': 62,
  //           'min': 47,
  //           'avg': 57,
  //         }, {
  //           'date': '2022-08-09',
  //           'max': 65,
  //           'min': 39,
  //           'avg': 51,
  //         }, {
  //           'date': '2022-08-10',
  //           'max': 64,
  //           'min': 34,
  //           'avg': 50,
  //         }, {
  //           'date': '2022-08-11',
  //           'max': 41,
  //           'min': 4,
  //           'avg': 15,
  //         }],
  //         'pm25': [{
  //           'date': '2022-08-05',
  //           'max': 20,
  //           'min': 5,
  //           'avg': 15,
  //         }, {
  //           'date': '2022-08-06',
  //           'max': 30,
  //           'min': 11,
  //           'avg': 18,
  //         }, {
  //           'date': '2022-08-07',
  //           'max': 44,
  //           'min': 27,
  //           'avg': 33,
  //         }, {
  //           'date': '2022-08-08',
  //           'max': 45,
  //           'min': 33,
  //           'avg': 40,
  //         }, {
  //           'date': '2022-08-09',
  //           'max': 47,
  //           'min': 27,
  //           'avg': 36,
  //         }, {
  //           'date': '2022-08-10',
  //           'max': 46,
  //           'min': 24,
  //           'avg': 35,
  //         }, {
  //           'date': '2022-08-11',
  //           'max': 29,
  //           'min': 3,
  //           'avg': 10,
  //         }],
  //         'skycon': [{
  //           'date': '2022-08-05',
  //           'value': 'RAIN',
  //         }, {
  //           'date': '2022-08-06',
  //           'value': 'RAIN',
  //         }, {
  //           'date': '2022-08-07',
  //           'value': 'PARTLY_CLOUDY_DAY',
  //         }, {
  //           'date': '2022-08-08',
  //           'value': 'RAIN',
  //         }, {
  //           'date': '2022-08-09',
  //           'value': 'RAIN',
  //         }, {
  //           'date': '2022-08-10',
  //           'value': 'RAIN',
  //         }, {
  //           'date': '2022-08-11',
  //           'value': 'RAIN',
  //         }],
  //         'skycon_08h_20h': [{
  //           'date': '2022-08-05',
  //           'value': 'RAIN',
  //         }, {
  //           'date': '2022-08-06',
  //           'value': 'RAIN',
  //         }, {
  //           'date': '2022-08-07',
  //           'value': 'PARTLY_CLOUDY_DAY',
  //         }, {
  //           'date': '2022-08-08',
  //           'value': 'PARTLY_CLOUDY_DAY',
  //         }, {
  //           'date': '2022-08-09',
  //           'value': 'CLEAR_DAY',
  //         }, {
  //           'date': '2022-08-10',
  //           'value': 'RAIN',
  //         }, {
  //           'date': '2022-08-11',
  //           'value': 'RAIN',
  //         }],
  //         'skycon_20h_32h': [{
  //           'date': '2022-08-05',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'date': '2022-08-06',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'date': '2022-08-07',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'date': '2022-08-08',
  //           'value': 'RAIN',
  //         }, {
  //           'date': '2022-08-09',
  //           'value': 'CLEAR_NIGHT',
  //         }, {
  //           'date': '2022-08-10',
  //           'value': 'PARTLY_CLOUDY_NIGHT',
  //         }, {
  //           'date': '2022-08-11',
  //           'value': 'RAIN',
  //         }],
  //         'ultraviolet': [{
  //           'datetime': '2022-08-05',
  //           'index': '2',
  //           'desc': '弱',
  //         }, {
  //           'datetime': '2022-08-06',
  //           'index': '2',
  //           'desc': '弱',
  //         }, {
  //           'datetime': '2022-08-07',
  //           'index': '3',
  //           'desc': '中等',
  //         }, {
  //           'datetime': '2022-08-08',
  //           'index': '2',
  //           'desc': '弱',
  //         }, {
  //           'datetime': '2022-08-09',
  //           'index': '4',
  //           'desc': '强',
  //         }, {
  //           'datetime': '2022-08-10',
  //           'index': '1',
  //           'desc': '最弱',
  //         }, {
  //           'datetime': '2022-08-11',
  //           'index': '1',
  //           'desc': '最弱',
  //         }],
  //         'carWashing': [{
  //           'datetime': '2022-08-05',
  //           'index': '3',
  //           'desc': '较不适宜',
  //         }, {
  //           'datetime': '2022-08-06',
  //           'index': '3',
  //           'desc': '较不适宜',
  //         }, {
  //           'datetime': '2022-08-07',
  //           'index': '3',
  //           'desc': '较不适宜',
  //         }, {
  //           'datetime': '2022-08-08',
  //           'index': '3',
  //           'desc': '较不适宜',
  //         }, {
  //           'datetime': '2022-08-09',
  //           'index': '3',
  //           'desc': '较不适宜',
  //         }, {
  //           'datetime': '2022-08-10',
  //           'index': '3',
  //           'desc': '较不适宜',
  //         }, {
  //           'datetime': '2022-08-11',
  //           'index': '3',
  //           'desc': '较不适宜',
  //         }],
  //         'dressing': [{
  //           'datetime': '2022-08-05',
  //           'index': '2',
  //           'desc': '很热',
  //         }, {
  //           'datetime': '2022-08-06',
  //           'index': '2',
  //           'desc': '很热',
  //         }, {
  //           'datetime': '2022-08-07',
  //           'index': '2',
  //           'desc': '很热',
  //         }, {
  //           'datetime': '2022-08-08',
  //           'index': '2',
  //           'desc': '很热',
  //         }, {
  //           'datetime': '2022-08-09',
  //           'index': '2',
  //           'desc': '很热',
  //         }, {
  //           'datetime': '2022-08-10',
  //           'index': '2',
  //           'desc': '很热',
  //         }, {
  //           'datetime': '2022-08-11',
  //           'index': '3',
  //           'desc': '热',
  //         }],
  //         'comfort': [{
  //           'datetime': '2022-08-05',
  //           'index': '3',
  //           'desc': '热',
  //         }, {
  //           'datetime': '2022-08-06',
  //           'index': '0',
  //           'desc': '闷热',
  //         }, {
  //           'datetime': '2022-08-07',
  //           'index': '0',
  //           'desc': '闷热',
  //         }, {
  //           'datetime': '2022-08-08',
  //           'index': '0',
  //           'desc': '闷热',
  //         }, {
  //           'datetime': '2022-08-09',
  //           'index': '0',
  //           'desc': '闷热',
  //         }, {
  //           'datetime': '2022-08-10',
  //           'index': '0',
  //           'desc': '闷热',
  //         }, {
  //           'datetime': '2022-08-11',
  //           'index': '0',
  //           'desc': '闷热',
  //         }],
  //         'coldRisk': [{
  //           'datetime': '2022-08-05',
  //           'index': '3',
  //           'desc': '易发',
  //         }, {
  //           'datetime': '2022-08-06',
  //           'index': '3',
  //           'desc': '易发',
  //         }, {
  //           'datetime': '2022-08-07',
  //           'index': '4',
  //           'desc': '极易发',
  //         }, {
  //           'datetime': '2022-08-08',
  //           'index': '4',
  //           'desc': '极易发',
  //         }, {
  //           'datetime': '2022-08-09',
  //           'index': '4',
  //           'desc': '极易发',
  //         }, {
  //           'datetime': '2022-08-10',
  //           'index': '4',
  //           'desc': '极易发',
  //         }, {
  //           'datetime': '2022-08-11',
  //           'index': '4',
  //           'desc': '极易发',
  //         }],
  //       },
  //       'primary': 0,
  //       'forecast_keypoint': '12分钟后开始下小雨，但49分钟后会停',
  //     },
  //   },
  //   'header': {
  //     'Server': 'nginx/1.12.2',
  //     'Date': 'Fri, 05 Aug 2022 06:51:27 GMT',
  //     'Content-Type': 'application/json; charset=utf-8',
  //     'Content-Length': '5021',
  //     'Connection': 'keep-alive',
  //     'x-cy-trace-id': 'f1fd4c2b8c9e45f1a2c7727b93651d38',
  //     'Content-Encoding': 'gzip',
  //     'Vary': 'Accept-Encoding',
  //   },
  //   'statusCode': 200,
  //   'cookies': [],
  //   'errMsg': 'request:ok',
  // };
  return new Promise<WeatherInfo>((r, j) => {
    uni.request({
      url: 'https://api.caiyunapp.com/v2/RFxigMJuzXturYJK/' + longitude + ',' + latitude +
        '/weather.jsonp?alert=true&dailysteps=7&lang=zh_CN&unit=metric',
      header: {
        'content-type': 'application/json', // 默认值
      },
      success: (res) => {
        r(res as unknown as WeatherInfo);
      },
      fail: j,
    });
  });
}

export async function reqInfo(longitude: number, latitude: number) {
  return new Promise((r, j) => {
    uni.request({
      url: `https://api.caiyunapp.com/v2/RFxigMJuzXturYJK/${longitude},${latitude}/realtime.jsonp`,
      header: {
        'content-type': 'application/json', // 默认值
      },
      success: r,
      fail: j,
    });
  });

}

export function transformWarningInformation(info: string): string {
  let string = '';
  switch (info) {
    case '01':
      string = '台风';
      break;
    case '02':
      string = '暴雨';
      break;
    case '03':
      string = '暴雪';
      break;
    case '04':
      string = '寒潮';
      break;
    case '05':
      string = '大风';
      break;
    case '06':
      string = '沙尘暴';
      break;
    case '07':
      string = '高温';
      break;
    case '08':
      string = '干旱';
      break;
    case '09':
      string = '雷电';
      break;
    case '10':
      string = '冰雹';
      break;
    case '11':
      string = '霜冻';
      break;
    case '12':
      string = '大雾';
      break;
    case '13':
      string = '霾';
      break;
    case '14':
      string = '道路结冰';
      break;
    case '15':
      string = '森林火灾';
      break;
    case '16':
      string = '雷雨大风';
      break;
  }
  return string + '预警';
}

export function transformWarningLevel(info: string): string {
  let string = '';
  switch (info) {
    case '01':
      string = '../../static/16.jpg';
      break;
    case '02':
      string = '../../static/15.jpg';
      break;
    case '03':
      string = '../../static/17.jpg';
      break;
    case '04':
      string = '../../static/14.jpg';
      break;
  }
  return string;
}

export function transformCloth(index: number): string {
  let string = '';
  if (index >= 0 && index <= 2) {
    string = '../../static/10.jpg';
  } else if (index >= 3 && index <= 5) {
    string = '../../static/11.jpg';
  } else if (index >= 6 && index <= 8) {
    string = '../../static/12.jpg';
  } else if (index >= 9 && index <= 13) {
    string = '../../static/13.jpg';
  }
  return string;
}

export function transformSkyconImage(skycon: string): string {
  let string = '../../static/1.jpg';
  switch (skycon) {
    case 'CLEAR_DAY':
      string = '../../static/1.jpg';
      break;
    case 'CLEAR_NIGHT':
      string = '../../static/2.jpg';
      break;
    case 'PARTLY_CLOUDY_DAY':
      string = '../../static/3.jpg';
      break;
    case 'PARTLY_CLOUDY_NIGHT':
      string = '../../static/4.jpg';
      break;
    case 'CLOUDY':
      string = '../../static/5.jpg';
      break;
    case 'WIND':
      string = '../../static/7.jpg';
      break;
    case 'HAZE':
      string = '../../static/8.jpg';
      break;
    case 'RAIN':
      string = '../../static/6.jpg';
      break;
    case 'SNOW':
      string = '../../static/9.jpg';
      break;
  }
  return string;
}

export function transformSKycon(skycon: string): string {
  let string = '';
  switch (skycon) {
    case 'CLEAR_DAY':
      string = '晴';
      break;
    case 'CLEAR_NIGHT':
      string = '晴';
      break;
    case 'PARTLY_CLOUDY_DAY':
      string = '多云';
      break;
    case 'PARTLY_CLOUDY_NIGHT':
      string = '多云';
      break;
    case 'CLOUDY':
      string = '阴';
      break;
    case 'WIND':
      string = '大风';
      break;
    case 'HAZE':
      string = '雾霾';
      break;
    case 'RAIN':
      string = '雨';
      break;
    case 'SNOW':
      string = '雪';
      break;
  }
  return string;
}

export function transformWindDirection(direction: number) {
  let string: string = '';
  if ((direction >= 0 && direction < 11.25) || (direction <= 360 && direction >= 348.75)) {
    string = '北';
  } else if (direction >= 11.25 && direction < 33.75) {
    string = '北东北';
  } else if (direction >= 33.75 && direction < 56.25) {
    string = '东北';
  } else if (direction >= 56.25 && direction < 78.75) {
    string = '东东北';
  } else if (direction >= 78.75 && direction < 101.25) {
    string = '东';
  } else if (direction >= 101.25 && direction < 123.75) {
    string = '东东南';
  } else if (direction >= 123.75 && direction < 146.25) {
    string = '东南';
  } else if (direction >= 146.25 && direction < 168.75) {
    string = '南东南';
  } else if (direction >= 168.75 && direction < 191.25) {
    string = '南';
  } else if (direction >= 191.25 && direction < 213.75) {
    string = '南西南';
  } else if (direction >= 213.75 && direction < 236.25) {
    string = '西南';
  } else if (direction >= 236.25 && direction < 258.75) {
    string = '西西南';
  } else if (direction >= 258.75 && direction < 281.25) {
    string = '西';
  } else if (direction >= 281.25 && direction < 303.75) {
    string = '西西北';
  } else if (direction >= 303.75 && direction < 326.25) {
    string = '西北';
  } else if (direction >= 326.25 && direction < 348.75) {
    string = '北西北';
  }
  return string;
}
