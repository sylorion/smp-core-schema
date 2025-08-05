// src/utils/createId.js
import { customAlphabet } from 'nanoid'

// Alphabet : lettres majuscules + chiffres, longueur : 16
const createId = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 16)

export default createId
