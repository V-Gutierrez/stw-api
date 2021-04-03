export const parseUrlsToHTTPS = (urls: string[]) => {
  return urls.map((url) => {
    return url.replace('http', 'https')
  })
}
