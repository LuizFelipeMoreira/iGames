interface UseProductTYpe{
     gameList:;
     calculateTotalPrice:string;
     productsBag:;
     loading:boolean;
     error:string;
     fetchGames:()=>Promise<void>;
     addNewProduct:()=>void;
     RemoveProduct:(game:any)=>void;
}