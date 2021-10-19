
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
