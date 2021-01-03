type allDateTypes = Date | number | string;

interface CarInterface {
    name: string;
    yearOfCreated: allDateTypes;
    isSold: boolean;
    consoleLog(): void
}

const Car: CarInterface = {
    name: 'Ford',
    yearOfCreated: new Date(),
    isSold: true,
    consoleLog: () => {
        console.log('void');
    }
}