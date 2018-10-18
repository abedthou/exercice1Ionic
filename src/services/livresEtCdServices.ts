import { book } from "../pages/book-list/book";
import { CD } from "../pages/cd-list/CD";


export class livresEtCdServices {

    livresList :book []= [
        {
            titre: 'sauve moi',
            auteur: 'musso Guillaume',
            estprete:false
        },
        {
            titre: 'Le nouveau nom',
            auteur: 'Elena ferrante',
            estprete:false

        },
        {
            titre: 'Elle et lui',
            auteur: 'Mark Levy',
            estprete:true

        }
    ];

    CdList :CD[] = [
        {
            titre: 'Cd1 Charles',
            chanteur: 'Charles aznavour',
            estprete:true,


        },
        {
            titre: 'Cd1 Lara',
            chanteur: 'Lara fabien',
            estprete:false,

        },
        {
            titre: 'Cd2 Michael',
            chanteur: 'Michael Jackson',
            estprete:true,

        }
    ];
preterLivreOuCD( x: any){
    x.estprete = !x.estprete;

}





    

}
