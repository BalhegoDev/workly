export interface Selo{
    [key: string]: boolean | undefined | Selo ;
    agendamento?:boolean;
    confianca?:boolean;
    qualidade?:boolean;
    iluminacao?:boolean;
    climatizado?:boolean;
    tomadas?:boolean;
    quadros?:boolean;
    projetores?:boolean;

    //esse atributo em específico foi posto devido à um bug.
    selos?:any;
}