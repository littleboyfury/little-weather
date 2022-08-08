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
