import axios from "axios";

export const aerolabApi = axios.create({
  baseURL: "https://coding-challenge-api.aerolab.co/",
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjNjE2ZTk5OTIwOTAwMWE1YmM4OGEiLCJpYXQiOjE2NTY1MTI4Nzh9.joyddK6lmL0q-MjqxGrQ-73PoAyOrnHsqsqkt0UjWnY"
  }
})