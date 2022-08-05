<template>
  <view class="root">
    <view class="location">{{ location.name }}</view>
    <view class="weather">
      <view class="weather-left">
        <view class="temperature">
          <span class="temperature-text">{{ Math.round(realtime.temperature) }}</span>
          <span class="temperature-unit">℃</span>
        </view>
        <view class="weather-info">
          <view class="weather-info-item" v-if="daily">
            <span>{{ Math.round(daily.temperature[0].min) }}℃ / {{ Math.round(daily.temperature[0].max) }}℃</span>
            <span>AQI: {{ realtime.aqi }}</span>
          </view>
        </view>
      </view>
      <view class="weather-right">
        <img class=weather-image :src="transformSkyconImage(realtime.skycon)" alt="" srcset="">
      </view>
    </view>
    <view class="forecast-alert">
      <view class="forecast-keypoint">
        {{ forecastKeypoint }}
      </view>
      <view class="weather-alert" v-if="alert.content.length">
        <img class="alert-image" :src="transformWarningLevel(alert.content[0].code.substring(2,4))" alt="">
        <span>{{ transformWarningInformation(alert.content[0].code.substring(0, 2)) }}</span>
      </view>
    </view>
    <scroll-view :scroll-x="true" class="hourly">
      <view v-for="item in hourly" class="hourly-item" :key="item.hourlyTime" :for="item.hourlyTime">
        <span class="hourly-item-time">{{ item.hourlyTime }}</span>
        <img class="hourly-item-image" :src="item.skyconImage" alt="">
        <span class="hourly-item-temperature">{{ item.temperature }}℃</span>
      </view>
    </scroll-view>
    <view class="human-feeling">
      <view class="human-image">
        <img class="human-image-item" :src="transformCloth(realtime.comfort.index)" alt="">
      </view>
      <view class="human-data">
        <view class="human-data-item" v-for="item in humanData">
          <span class="text">{{item.text}}</span>
          <span class="data">{{item.data}}</span>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Amap } from '../../utils/amap';
import { Alert, Daily, Minutely, Realtime, reqWeather, transformWindDirection, WeatherInfo } from '../../utils/weather';
import {
  transformCloth,
  transformSkyconImage,
  transformWarningLevel,
  transformWarningInformation,
} from '../../utils/weather';

const location = ref<{
  desc: string
  latitude: number
  longitude: number
  name: string
} | null>({
  desc: '',
  latitude: 0,
  longitude: 0,
  name: '',
});
const alert = ref<Partial<Alert>>({
  content: [],
});
const daily = ref<Daily | null>(null);
const forecastKeypoint = ref<string | null>('');
const hourly = ref<Array<{
  temperature: number
  skyconImage: string
  hourlyTime: string
}>>([]);
const minutely = ref<Minutely | null>(null);
const realtime = ref<Partial<Realtime>>({
  temperature: 0,
  comfort: {
    index: 0,
    desc: ''
  }
});
const humanData = ref<Array<{
  text: string
  data: string
}>>([]);

onMounted(async () => {
  const locationInfo = await Amap.getRegeo()
      .then(res => (res as Array<any>)[0]);

  location.value = {
    desc: locationInfo.desc,
    name: locationInfo.name,
    latitude: locationInfo.latitude,
    longitude: locationInfo.longitude,
  };

  const weatherInfo = await reqWeather(locationInfo.longitude, locationInfo.latitude)
      .then(res => res.data.result);

  alert.value = weatherInfo.alert;
  daily.value = weatherInfo.daily;
  forecastKeypoint.value = weatherInfo.forecast_keypoint;
  const hourlyInfo = weatherInfo.hourly;
  for (let i = 0; i < hourlyInfo.temperature.length; i++) {
    const data = {
      temperature: 0,
      skyconImage: '',
      hourlyTime: '',
    };
    data.temperature = Math.round(hourlyInfo.temperature[i].value);
    data.hourlyTime = hourlyInfo.temperature[i].datetime;
    data.hourlyTime = data.hourlyTime.substr(data.hourlyTime.length - 5);
    data.skyconImage = transformSkyconImage(hourlyInfo.skycon[i].value);
    hourly.value.push(data);
  }
  minutely.value = weatherInfo.minutely;
  realtime.value = weatherInfo.realtime;

  humanData.value.push({
    text: '风向：',
    data: transformWindDirection(weatherInfo.realtime.wind.direction)
  })
  humanData.value.push({
    text: '风速：',
    data: weatherInfo.realtime.wind.speed + 'km/h'
  })
  const e = weatherInfo.realtime.humidity * 6.105 * Math.exp(17.27 * weatherInfo.realtime.temperature / (237.7 + weatherInfo.realtime.temperature));
  const at = Math.round(1.07 * weatherInfo.realtime.temperature + 0.2 * e - 0.65 * weatherInfo.realtime.wind.speed / 3.6 - 2.7); //体感温度
  humanData.value.push({
    text: '体感：',
    data: at + '℃'
  })
  humanData.value.push({
    text: '湿度：',
    data: Math.round(weatherInfo.realtime.humidity * 100) + '%'
  })
});

</script>

<style>
.root {
  box-sizing: border-box;
  margin: 10px;
}

.location {
  margin: 10px 0;
  font-size: 30rpx;
}

.weather {
  display: flex;
  padding: 10px;
  height: 300rpx;
}

.weather .weather-left,
.weather .weather-right {
  width: 50%;
}

.temperature {
  font-weight: bold;
  display: flex;
  justify-content: center;
}

.temperature .temperature-text {
  font-size: 150rpx;
}

.temperature .temperature-unit {
  font-size: 60rpx;
}

.weather-left .weather-info {
  padding: 10px 0;
  font-weight: bold;
}

.weather-left .weather-info .weather-info-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 30rpx;
}

.weather-right {
  text-align: center;
}

.weather-right .weather-image {
  width: 300rpx;
  height: 300rpx;
}

.forecast-alert {
  display: flex;
  font-size: 25rpx;
  font-weight: normal;
}

.forecast-alert .forecast-keypoint,
.forecast-alert .weather-alert {
  width: 50%;
}

.forecast-alert .forecast-keypoint {
  text-align: center;
}

.forecast-alert .weather-alert {
  display: flex;
  justify-content: center;
  align-items: center;
}

.forecast-alert .weather-alert .alert-image {
  width: 50rpx;
  height: 50rpx;
  margin-right: 20rpx;
}

.hourly {
  display: inline-block;
  white-space: nowrap;
  margin: 10px 0;
}

.hourly .hourly-item {
  width: 140rpx;
  text-align: center;
  display: inline-block;
}

.hourly .hourly-item .hourly-item-time {
  font-size: 35rpx;
  display: inline-block;
}

.hourly .hourly-item .hourly-item-image {
  width: 75rpx;
  height: 75rpx;
  transform: translateX(33rpx);
  display: block;
}

.hourly .hourly-item .hourly-item-temperature {
  font-size: 30rpx;
}

.human-feeling {
  display: flex;
  height: 300rpx;
}

.human-feeling .human-image,
.human-feeling .human-data {
  width: 50%;
}

.human-image .human-image-item {
  width: 100%;
  height: 100%;
}

.human-feeling .human-data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size:35rpx;
  padding: 30rpx 0;
}

</style>
