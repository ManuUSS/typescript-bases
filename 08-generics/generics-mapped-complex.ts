(() => {

    //* Tipos mapeados


    // En ciertos escenarios es posible que queramos hacer tipos, más complejos
    // como por ejemplo, dado un tipo mapear sus llaves y valores posibles y transformarlos
    //? Para situaciones como las mencionadas no es posible utilizar interfaces, por lo que debemos usar map
    type MyMappedGenericPartial<T> = {
        // [ prop in keyof T ] Creo una llave que apunta a T
        // T[ prop ] obtengo el tipo de valor que se guarda en esa llave
        [ prop in keyof T ]?: T[ prop ];
    }
    
    type MyMappedGenericNumber<T> = {
        // [ prop in keyof T ] Creo una llave (opcional) que apunta a T 
        // digo que el valor de la llave es un number
        [ prop in keyof T ]?: number;
    }

    type MyMappedGenericConcrete<T> = {
        // [ prop in keyof T ] Creo una llave (requerida) que apunta a T
        // T[ prop ] obtengo el tipo de valor que se guarda en esa llave
        [ prop in keyof T ]-?: number;
    }

    type MyMappedGenericMethods<T> = {
        // [ prop in keyof T ] Creo una llave que apunta a T
        // con la palabra as renombro la llave del objeto
        // () => T[ prop ] una funcion que retorna el tipo de valor de la llave
        [ prop in keyof T as `get${ Capitalize<string & prop> }` ]: () => T[ prop ];
    }

    interface User {
        name: string;
        userName:string;
        email:string;
        age: number;
    }
    interface UserMaybe {
        name: string;
        userName?:string;
        email?:string;
        age?: number;
    }

    // Todas las propiedades se transforman en opcional
    type PartialUser = MyMappedGenericPartial<User>; 
    
    // Todas las propiedades se transforman a valor numerico
    type NumberUser  = MyMappedGenericNumber<User>; 
    
    // Todas las propiedades se transforman a obligatorias
    type ConcreteUser = MyMappedGenericConcrete<UserMaybe>; 
    
    // Todas las propiedades se transforman a metodos
    type GetsUser     = MyMappedGenericMethods<User>;
    const getUser: GetsUser = {
        getName: () => 'Manuel',
        getUserName: () => 'iManu',
        getEmail: () => 'manuel.gmail.com',
        getAge:() => 20,
    }

    console.log( getUser.getName() ); // Manuel
    console.log( getUser.getUserName() ); // 20
    console.log( getUser.getEmail() ); // manuel.gmail.com
    console.log( getUser.getAge() ); // 20

})()