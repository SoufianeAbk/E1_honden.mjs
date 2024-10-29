import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

const hond1 = {
    naam: "Bobby",
    leeftijd: 6,
    isSpeels: true
  };
  
  const hond2 = {
    naam: "Rex",
    leeftijd: 5,
    isSpeels: false
  };
  
  const hond3 = {
    naam: "Max",
    leeftijd: 2,
    isSpeels: true
  };
  
  const hondenArray = [hond1, hond2, hond3];
  
  console.log(hondenArray);
  

process.exit()
