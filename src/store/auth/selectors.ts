import { AppState } from "..";

export const getToken = (state: AppState): string => state.auth.token;
export const isAuthenticated = (state: AppState) => !!state.auth.token;
export const getProfile = (state: AppState) => state.auth.userProfile;