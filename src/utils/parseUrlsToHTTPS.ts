export const parseUrlsToHTTPS = (urls: string[]) => {
  return urls.map((url) => {
    url.replace('http', 'https')
  })
}
