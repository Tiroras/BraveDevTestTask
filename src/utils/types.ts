
export type UserType = {
  id: number
  name: string
  email: string
  gender: 'male' | 'female'
  status: 'active' | 'inactive'
};

export type UsersFromAPI = {
  code: number
  data: UserType[]
  meta: MetaType
}

export type MetaType = {
  pagination: PaginationType
}

export type PaginationType = {
  limit: number
  page: number
  pages: number
  total: number
}

export type PostType = {
  id: number
  user_id: number
  title: string
  body: string
}

export type PostsFromAPI = {
  code: number
  data: PostType[]
  meta: MetaType
}
