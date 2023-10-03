(() => {
    //* Number
    //Cuando se crea una constante TS crea un nuevo tipo
    //en este caso se tiene que a:10 (Ya que el valor)
    //de las constantes no cambian
    const TEN = 10;
    
    //Cuando se define un var o let siempre es importante ponerle
    //el tipo de dato que almacena la variable
    let avengers:number = 10;
    const villians: number = 20;

    //Permite el cambio ya que el tipo es el mismo
    avengers = 123;
    console.log({ avengers });
    
    //Permite el cambio ya que el Number retorna un numero
    //el NaN (Not a Number) también es considera un number
    avengers = Number('55A');
    console.log({ avengers });


})()