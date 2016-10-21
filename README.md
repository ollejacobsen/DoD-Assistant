# Drakar och Demoner
*"Drakar och Demoner" is a Swedish version of the classic role-playing game Dungeons & Dragons.*

Det här repot innehåller hjälpmetoder för Drakar och Demoner. 
Koden är skriven i Typescript och genereras till ES5 (Javascript) genom ett byggscript.

## Drakar och Demoner : Expert

### Expert.calculateSkillCost

```
    Expert.calculateSkillCost(currentValue, wantedValue, cost, type = "A")
```

I Drakar & Demoner Expert blev det lite snurrigt med vad det kostar att köpa en viss FV i en viss färdighet.
Den här metoden räknar ut kostanden och baseras på de rättningar som *Äventyrsspel* senare gav ut i *Sinkadus*.

# Koden
I `dist` mappen hittar ni filerna som kompileras. Varje fil för sig och även en `bundle.js` som innehåller allt-i-ett.  

## Systemkrav
* Node.js

## Arbeta med koden
1. Checka ut kodbasen
2. Kör `npm install`
3. Starta enklast med `npm start`. Nu kommer en process startas som kompilerar alla TypeScript filer till Javascript. Den ligger och lyssnar på förändringar så ändrar man i .ts filer så kompilerars dessa "on-the-fly".

### Tester
Kör igång testerna med `npm test`.  

## Noteringar
Har endast kört det på min Windowsmaskin. Men hör gärna av er om ni stöter på problem.
