import { createSelector } from "reselect"
import { AppStateType } from "../state/redux-store"

export const usersSelector = (state: AppStateType) => {
   return state.usersPage.users
}

export const usersSelectorSuper = createSelector(usersSelector, (users) => {
    return users
})

export const totalCountSelector = (state: AppStateType) => {
   return state.usersPage.totalCount
}
export const usersCountSelector = (state: AppStateType) => {
   return state.usersPage.usersCount
}
export const currentPageSelector = (state: AppStateType) => {
   return state.usersPage.currentPage
}
export const preloadSelector = (state: AppStateType) => {
   return state.usersPage.preload
}
export const followIdSelector = (state: AppStateType) => {
   return state.usersPage.followId
}