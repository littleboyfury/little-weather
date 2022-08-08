<template>
  <view class="root">
    <view class="location">{{ location.name }}</view>
    <view class="weather">
      <view class="weather-left">
        <view class="temperature">
          <text class="temperature-text">{{ Math.round(realtime.temperature) }}</text>
          <text class="temperature-unit">℃</text>
        </view>
        <view class="weather-info">
          <view class="weather-info-item" v-if="daily.length">
            <text>{{ daily[0].min }}℃ / {{ daily[0].max }}℃</text>
            <text>AQI: {{ realtime.aqi }}</text>
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
        <text>{{ transformWarningInformation(alert.content[0].code.substring(0, 2)) }}</text>
      </view>
    </view>
    <scroll-view :scroll-x="true" class="hourly">
      <view v-for="item in hourly" class="hourly-item" :key="item.i">
        <text class="hourly-item-time">{{ item.hourlyTime }}</text>
        <img class="hourly-item-image" :src="item.skyconImage" alt="">
        <text class="hourly-item-temperature">{{ item.temperature }}℃</text>
      </view>
    </scroll-view>
    <view class="human-feeling">
      <view class="human-image">
        <img class="human-image-item" :src="transformCloth(realtime.comfort.index)" alt="">
      </view>
      <view class="human-data">
        <view class="human-data-item" v-for="item in humanData" :key="item.text">
          <text class="text">{{ item.text }}</text>
          <text class="data">{{ item.data }}</text>
        </view>
      </view>
    </view>
    <scroll-view :scroll-x="true" class="daily">
      <view v-for="item in daily" class="daily-item" :key="item.i">
        <text class="daily-item-time">{{ item.date }}</text>
        <img class="daily-item-image" :src="item.skyconImage" alt="">
        <text class='daily-item-temperature'>{{ item.min }}℃/{{ item.max }}℃</text>
      </view>
    </scroll-view>
    <view class="weather-indicator" v-for="item in weatherIndicator" :key="item.leftText">
      <view class="left">
        <text class="text">{{ item.leftText }}: {{ item.leftData }}</text>
        <img src="../../static/18.jpg" alt="" srcset="" class="image">
      </view>
      <view class="right">
        <img src="../../static/19.jpg" alt="" srcset="" class="image">
        <text class="text">{{ item.rightText }}: {{ item.rightData }}</text>
      </view>
    </view>

  </view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Amap } from '../../utils/amap';
import { Alert, Minutely, Realtime, reqWeather, transformWindDirection } from '../../utils/weather';
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
const daily = ref<Array<{
  i: number
  skyconImage: string
  min: number
  max: number
  date: string
}>>([]);
const forecastKeypoint = ref<string | null>('');
const hourly = ref<Array<{
  i: number
  temperature: number
  skyconImage: string
  hourlyTime: string
}>>([]);
const minutely = ref<Minutely | null>(null);
const realtime = ref<Partial<Realtime>>({
  temperature: 0,
  comfort: {
    index: 0,
    desc: '',
  },
});
const humanData = ref<Array<{
  text: string
  data: string
}>>([]);
const weatherIndicator = ref<Array<{
  leftText: string
  leftData: string
  rightText: string
  rightData: string
}>>([]);
const isRain = ref(false);

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
  forecastKeypoint.value = weatherInfo.forecast_keypoint;
  minutely.value = weatherInfo.minutely;
  realtime.value = weatherInfo.realtime;

  initDaily(weatherInfo);
  initHourly(weatherInfo);
  initHumanData();
  initWeatherIndicator();

  const precipitation2h = weatherInfo.minutely.precipitation_2h;

  if (precipitation2h.find(v => v > 0)) {
    isRain.value = true;
    // chartData.value.series[0].data = weatherInfo.minutely.precipitation_2h.map(v => {
    //   return {
    //     value: v,
    //     labelText: '',
    //     labelShow: false,
    //   }
    // });
  }
});

function initDaily(weatherInfo: any) {
  for (let i = 0; i < weatherInfo.daily.temperature.length; i++) {
    const temperature = weatherInfo.daily.temperature[i];
    daily.value.push({
      i,
      min: Math.round(temperature.min),
      max: Math.round(temperature.max),
      skyconImage: transformSkyconImage(weatherInfo.daily.skycon[i].value),
      date: temperature.date.substring(temperature.date.length - 5),
    });
  }
}

function initHourly(weatherInfo: any) {
  const hourlyInfo = weatherInfo.hourly;
  for (let i = 0; i < hourlyInfo.temperature.length; i++) {
    const data = {
      i,
      temperature: 0,
      skyconImage: '',
      hourlyTime: '',
    };
    data.temperature = Math.round(hourlyInfo.temperature[i].value);
    data.hourlyTime = hourlyInfo.temperature[i].datetime;
    data.hourlyTime = data.hourlyTime.substring(data.hourlyTime.length - 5);
    data.skyconImage = transformSkyconImage(hourlyInfo.skycon[i].value);
    hourly.value.push(data);
  }
}

function initHumanData() {
  humanData.value.push({
    text: '风向：',
    data: transformWindDirection(realtime.value.wind!.direction),
  });
  humanData.value.push({
    text: '风速：',
    data: realtime.value.wind!.speed + 'km/h',
  });
  const e = realtime.value.humidity! * 6.105 * Math.exp(17.27 * realtime.value.temperature! / (237.7 + realtime.value.temperature!));
  const at = Math.round(1.07 * realtime.value.temperature! + 0.2 * e - 0.65 * realtime.value.wind!.speed / 3.6 - 2.7); //体感温度
  humanData.value.push({
    text: '体感：',
    data: at + '℃',
  });
  humanData.value.push({
    text: '湿度：',
    data: Math.round(realtime.value.humidity! * 100) + '%',
  });
}

function initWeatherIndicator() {
  weatherIndicator.value.push({
    leftText: '紫外线',
    leftData: realtime.value.ultraviolet?.index + '/' + realtime.value.ultraviolet?.desc,
    rightText: '气压',
    rightData: Math.round(realtime.value.pres as number) / 100 + ' hPa',
  });
  weatherIndicator.value.push({
    leftText: '舒适度',
    leftData: realtime.value.comfort?.desc as string,
    rightText: 'PM2.5',
    rightData: realtime.value.pm25 + '',
  });
  weatherIndicator.value.push({
    leftText: '云量',
    leftData: realtime.value.cloudrate! * 100 + '%',
    rightText: '能见度',
    rightData: realtime.value.visibility! + ' km',
  });
}
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
  margin: 0 auto;
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
  font-size: 35rpx;
  padding: 30rpx 0;
}

.daily {
  display: inline-block;
  white-space: nowrap;
  margin: 10px 0;
}

.daily .daily-item {
  width: 180rpx;
  text-align: center;
  display: inline-block;
}

.daily .daily-item .daily-item-image {
  width: 75rpx;
  height: 75rpx;
  /*transform: translateX(50rpx);*/
  margin: 0 auto;
  display: block;
}

.weather-indicator {
  display: flex;
  height: 100rpx;
  padding: 10px;
  justify-content: space-between;
}

.weather-indicator .left,
.weather-indicator .right {
  width: 50%;
  position: relative;
}

.weather-indicator .image {
  width: 50rpx;
  height: 100rpx;
  position: absolute;
}

.weather-indicator .text {
  position: absolute;
}

.weather-indicator .left .text {
  left: 20rpx;
}

.weather-indicator .right .text {
  left: 60rpx;
  bottom: 0;
}

.weather-indicator .left .image {
  right: 0;
}

.weather-indicator .right .image {
  left: 0;
}

.ucharts {
  width: 100%;
  height: 200rpx;
}
</style>
