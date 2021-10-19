
const link = 'https://gorest.co.in/public-api'

export function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
}

export const getUsers = () => {
  return api(`${link}/users`).then((res) => {
    return res
  })
}

export const getPosts = () => {
  return api(`${link}/posts`).then((res) => {
    return res
  })
}
