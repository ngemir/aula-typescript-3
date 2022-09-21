import { Imprimivel } from "../utils/imprimivel";
import { Comparavel } from "./comparavel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {
}