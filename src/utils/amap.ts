// @ts-ignore
import { AMapWX } from '../lib/amap-wx'

// 高德开发者key
let key = '5d91d7168906039f3d1fb32cb4031ede'
let myAmapFun = new AMapWX({ key })

export class Amap {
  /**
   * 获取POI数据
   * @param {string} querykeywords
   */
  static getPoiAround(querykeywords = '') {
    return new Promise((resolve, reject) => myAmapFun.getPoiAround({ querykeywords, success: resolve, fail: reject }))
  }

  /**
   * 获取地理描述数据
   */
  static getRegeo() {
    return new Promise((resolve, reject) => myAmapFun.getRegeo({ success: resolve, fail: reject }))
  }

  /**
   * 获取天气数据
   *
   */
  static getWeather() {
    return new Promise((resolve, reject) => myAmapFun.getWeather({ success: resolve, fail: reject }))
  }

  /**
   * 获取输入提示词
   * @param {string} keywords
   * @param {string} location
   */
  static getInputtips(city: any, location = '', keywords = '') {
    return new Promise((resolve, reject) => myAmapFun.getInputtips({
      keywords,
      location,
      city,
      success: resolve,
      fail: reject,
    }))
  }

  /**
   * 获取路线规划
   * type : getDrivingRoute --驾车
   * type : getWalkingRoute --步行
   * type : getTransitRoute --公交
   * type : getRidingRoute --骑行
   * @param {string} origin
   * @param {string} destination
   */
  static getRoute(origin: any, destination: any, type: any, city: any) {
    return new Promise((resolve, reject) => myAmapFun[type]({
      origin,
      destination,
      city,
      success: resolve,
      fail: reject,
    }))
  }
}
