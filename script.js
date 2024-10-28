function calcularPerfil() {
    // Obtener los valores de los campos de entrada
    const impulsividad = parseInt(document.getElementById("impulsividad").value);
    const agresividad = parseInt(document.getElementById("agresividad").value);
    const manipulacion = parseInt(document.getElementById("manipulacion").value);
    const control = parseInt(document.getElementById("control").value);

    // Calcular el "índice de peligrosidad" con base en un promedio ponderado
    const perfilIndex = (impulsividad * 0.3) + (agresividad * 0.3) + (manipulacion * 0.2) + (control * 0.2);

    let resultado;
    if (perfilIndex >= 7) {
        resultado = "Peligrosidad Alta: Las tendencias y características indican un alto riesgo de comportamiento antisocial.";
    } else if (perfilIndex >= 4) {
        resultado = "Peligrosidad Moderada: Las características sugieren cierta inclinación hacia comportamientos de riesgo.";
    } else {
        resultado = "Peligrosidad Baja: No se observan rasgos destacados de comportamiento antisocial.";
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = `<p>${resultado}</p>`;
}
