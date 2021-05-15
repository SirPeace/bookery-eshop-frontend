import axios from "axios"

import apiClient from "./client"
import { RegisterFormFields } from "../pages/register"

export default {
  async login(payload) {
    await apiClient.get("/sanctum/csrf-cookie")
    return apiClient.post("/login", payload)
  },

  logout() {
    return apiClient.post("/logout")
  },

  async forgotPassword(payload) {
    await apiClient.get("/sanctum/csrf-cookie")
    return apiClient.post("/forgot-password", payload)
  },

  getAuthUser() {
    return apiClient.get("/api/user")
  },

  async resetPassword(payload) {
    await apiClient.get("/sanctum/csrf-cookie")
    return apiClient.post("/reset-password", payload)
  },

  updatePassword(payload) {
    return apiClient.put("/user/password", payload)
  },

  async registerUser(data: RegisterFormFields) {
    await apiClient.get("/sanctum/csrf-cookie")
    return apiClient.post("/register", data)
  },

  sendVerification(payload) {
    return apiClient.post("/email/verification-notification", payload)
  },

  updateUser(payload) {
    return apiClient.put("/user/profile-information", payload)
  },
}
