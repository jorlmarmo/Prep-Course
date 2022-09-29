function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
  
      var arrayIncrementado = [];
      for (var i = 0; i < array.length; i++) {
          arrayIncrementado = (array[i] + 1);
      }
      return arrayIncrementado;
  
  }