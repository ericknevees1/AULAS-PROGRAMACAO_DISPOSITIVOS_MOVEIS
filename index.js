
// Modulos ES6 -> Importando
import {TabelaIMC, calcularIMC} from "./CalculadoraIMC.js"

console.log("Calculo do IMC")

console.log(">>> Tabela do IMC <<<")
console.table(TabelaIMC)

const peso = 80
const altura = 1.70

const resultado = calcularIMC(peso, altura)

console.log("Resultado do IMC")
console.log(`IMC: ${resultado.toFixed(2)} `)

// Importando lib moment e usando
import moment from "moment";

const hoje = moment().locale('pt-br')

console.log("Hoje é: ")
console.log(hoje.format('DD/MM/yyyy'))


import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
