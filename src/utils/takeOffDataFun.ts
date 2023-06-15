export function takeOffDataFun<T, K extends keyof T>(obj: T) {
  const data = obj['data' as K]
  if (typeof data === 'object') {
    return data
  } else {
    throw new Error('数据格式错误')
  }
}

export const sleep = async (time: number) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}
