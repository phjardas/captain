import { type User } from "firebase/auth";
import { type DataState } from "../data.js";

export type Authentication = DataState<{ user?: User }>;
