
/*
 * @module:工具类 - 表单校验规则的方法
 * @fileName:
 * @Description:
 * @Author: ZLL
 * @Date: 2019-10-29 15:30:02
 */
import $utils from './utils.js'
import $regExp from './regExp.js'
import { isEmail, isMobile, isUser, isURL, isPhone } from './validate.js'

/**
   * @description 计算字符的长度
   * @Author      ZLL
   * @DateTime    2019-10-25 14:15:33
   * @param       {String}  str:字符串
   */
function calcStrLen (str) {
  return $utils.getStringLength($utils.trimSpace(str))
}

/**
 * @Description:校验用户名
 * @Author: ZLL
 * @param  {String}  val:字符串
 * @Date: 2019-10-29 09:11:18
 */
export function validateUserName (val, min, max) {
  if (val) {
    var userNameLen = calcStrLen(val)
    if (!isUser(val) || (userNameLen < min || userNameLen > max)) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}
/**
 * @Description:校验邮箱
 * @Author: ZLL
 * @param  {String}  val:字符串
 * @Date: 2019-10-28 11:05:08
 */
export function validateEmail (val, min, max) {
  if (val) {
    var emailLen = calcStrLen(val)
    if (!isEmail(val) || emailLen < min || emailLen > max) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}
/**
 * @Description:校验手机号
 * @Author: ZLL
 * @param  {String}  val:字符串
 * @Date: 2019-10-28 10:34:21
 */
export function validateMobile (val) {
  if (val) {
    if (!isMobile(val)) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}
/**
 * @Description:校验固定电话
 * @Author: ZLL
 * @param  {String}  val:字符串
 * @Date: 2019-10-28 10:34:21
 */
export function validateTelephone (val) {
  if (val) {
    if (!isPhone(val)) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}
/**
 * @Description:校验表单输入的url
 * @Author: ZLL
 * @param  {String}  str:字符串
 * @Date: 2019-10-25 14:18:11
 */
export function validateUrl (val, min, max) {
  let urlLen = calcStrLen(val)
  if (val) {
    if (!isURL(val) || urlLen > max) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}

/**
 * @Description:校验邮政编码
 * @Author: ZLL
 * @param  {String}  str:字符串
 * @Date: 2019-11-06 10:15:18
 */
export function validatePostCode (val, min, max) {
  let reg = $regExp.postCode
  if (val) {
    if (!reg.test(val)) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}

/**
 * @Description:校验密码长度
 * @Author: ZLL
 * @param  {Number}  min:最小长度 max:最大长度
 * @Date: 2019-11-09 16:23:11
 */
export function validatePassword (value, min, max) {
  if (value) {
    let pwdLen = value.length
    if (!(/^[^\s]*$/.test(value)) || pwdLen < min || pwdLen > max) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}

/**
 * @Description:校验角色名 只能包含中/英文、数字
 * @Author: ZLL
 * @param  {Number}  min:最小长度 max:最大长度
 * @Date: 2019-11-09 16:23:11
 */
export function validateRoleName (val, min, max) {
  let roleNameLen = calcStrLen(val)
  if (val) {
    if (!$regExp.roleName.test(val)) {
      return true
    } else if (roleNameLen > max) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}

/**
 * @Description:校验表单字段(名称)规定范围内的长度
 * @Author: ZLL
 * @param  {String}  str:字符串
 * @Date: 2019-10-25 14:18:11
 */
export function validateLimit (val, min, max) {
  if (val !== '') {
    var fieldNameLen = calcStrLen(val)
    if (fieldNameLen < min || fieldNameLen > max) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}

/**
 * @Description:校验表单最大字符长度
 * @Author: ZLL
 * @param  {String}  str:字符串
 * @Date: 2019-10-25 14:18:11
 */
export function validateMaxLength (val, min, max) {
  // console.log('max', max, val)
  if (val) {
    const maxLen = Array.isArray(val) ? val.length : calcStrLen(val)
    if (maxLen > max) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}

/**
 * @Description:校验表单输入的url
 * @Author: ZLL
 * @param  {String}  str:字符串
 * @Date: 2019-10-25 14:18:11
 */
/* export function validateUrl (val) {
  if (val) {
    if (!$regExp.url.test(val)) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
} */

/**
 * @Description:校验表单 select选择框是否有值
 * @Author: ZLL
 * @param  {String}  str:字符串
 * @Date: 2019-10-25 15:33:58
 */
export function validateSelect (val) {
  if (val) {
    return true
  } else {
    return false
  }
}

/**
 * @Description:校验表单 路由:网址或相对路径
 * @Author: ZLL
 * @param  {String}  str:字符串
 * @Date: 2019-10-25 15:33:58
 */
export function validateRoute (val, max) {
  if (val) {
    var limitLen = calcStrLen(val)
    if ((isURL(val) || $regExp.checkRoute.test(val)) && limitLen <= max) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}
