
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket implements Payload {
    name : string;
    totalCapacityKg : number;
    cargoItems : Cargo[];
    astronauts: Astronaut[];
    massKg: number;


    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }


    sumMass ( items : Payload[] ) : number {
        let sum : number = 0;
        for (let i=0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }


    currentMassKg() : number {
        let currentMass : number;
        currentMass = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return currentMass;
    }


    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }


    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }


}