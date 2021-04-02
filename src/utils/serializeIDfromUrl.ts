export const serializeIDfromUrl = (url: string): string => {
  const urlArray = url.split('/')

  return urlArray[5]
}
