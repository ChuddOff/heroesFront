import { io } from 'socket.io-client';

// const urlDomen = process.env.BACKURL || "https://heroes-back.vercel.app";
const urlDomen = "http://localhost:4000";

export const socket = io(urlDomen)