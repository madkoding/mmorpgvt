// Importamos la función que vamos a testear
import { miWeaDeFuncion } from "./miWeaDeFuncion";

describe('miWeaDeFuncion', () => {
  it('debería devolver el doble del número proporcionado', () => {
    // Arrange
    const numero = 5;
    const resultadoEsperado = 10;

    // Act
    const resultado = miWeaDeFuncion(numero);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it('debería devolver 0 cuando el número es 0', () => {
    // Arrange
    const numero = 0;
    const resultadoEsperado = 0;

    // Act
    const resultado = miWeaDeFuncion(numero);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it('debería manejar números negativos correctamente', () => {
    // Arrange
    const numero = -3;
    const resultadoEsperado = -6;

    // Act
    const resultado = miWeaDeFuncion(numero);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});