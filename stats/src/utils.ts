import { date } from "faker";

export const parseDate = (date: string): Date => {
    //19/06/1999
    const arr = date.split('/');
    return new Date(parseInt(arr[2]), parseInt(arr[1]), parseInt(arr[0]));
}