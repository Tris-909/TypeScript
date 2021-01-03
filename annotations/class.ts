class Vehicle {
    constructor(public color: string) {}

    drive(): void {
        console.log('haha');
    }

    honk(): void {
        console.log('Honk Honk!');
        console.log(this.color);
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, public color: string) {
        super(color);
    }

    private logID(id): void {
        console.log(id);
    }
}

const vehicle = new Vehicle('orange');
vehicle.honk();