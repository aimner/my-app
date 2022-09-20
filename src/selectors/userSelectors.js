import { createSelector } from "reselect"

export const usersSelector = (state) => {
   return state.usersPage.users.reverse()
}

export const usersSelectorSuper = createSelector(usersSelector, (users) => {
    return users
})

export const totalCountSelector = (state) => {
   return state.usersPage.totalCount
}
export const usersCountSelector = (state) => {
   return state.usersPage.usersCount
}
export const currentPageSelector = (state) => {
   return state.usersPage.currentPage
}
export const preloadSelector = (state) => {
   return state.usersPage.preload
}
export const followIdSelector = (state) => {
   return state.usersPage.followId
}