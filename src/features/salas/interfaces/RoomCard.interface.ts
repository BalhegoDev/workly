import { Selo } from "./Selos.interface";

export interface RoomCardInterface{
    imageURL:string;
    title:string;
    description:string;
    rating:number;
    capacity:number;
    moneyType: string 
    price?:number;
    payementType:number;
    selos?:Selo;
    alugadoQntd:number;
}