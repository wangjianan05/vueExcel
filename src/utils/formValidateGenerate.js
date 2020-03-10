/*
 * @module:工具类 - 策略模式结合函数柯里化--校验表单规则
 * @fileName:
 * @Description:
 * @Author: ZLL
 * @Date: 2019-10-25 15:00:32
 */

import * as Validates from './formRules.js'

export const formValidateGene = (key, msg, min, max) => (rule, value, cb) => {
  min = min || 0
  max = max || 50
  msg = msg || ''
  if (Validates[key](value, min, max) === true) {
    cb()
  } else {
    cb(new Error(msg))
  }
}
