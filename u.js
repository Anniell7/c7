var op = window.prompt("1. M-10 2. M-30 3. M eqis 4. M borde 5. M diagonal 6. M diagonal al otro lado 7. M en X  8. X en posiciones 9. Salir");

if (op == '9') {
    document.write("<h2>Adiós, que le vaya bien 👋🏻" + "</h2>");
} else {
    var filas = parseInt(prompt("Ingrese el número de filas:"));
    var columnas = parseInt(prompt("Ingrese el número de columnas:"));
    if (op==1){
        var m = new Array(filas); 
            for (var f = 1; f <= filas; f++){ 
                for (var c = 1; c <= columnas; c++){
                    m[f,c] = 10; 
                    document.writeln(m[f,c])
                }
                document.writeln("<p>" + "</p>"); 
            }
    }
    if (op==2){
        var m = new Array(filas); 
            for (var f = 1; f <= filas; f++){ 
                for (var c = 1; c <= columnas; c++){
                    m[f,c] = 30; 
                    document.writeln(m[f,c])
                }
                document.writeln("<p>" + "</p>"); 
            }
    }
    if (op==3){
        
        var m = new Array(filas);
    
        for (var f = 0; f < filas; f++) { 
            m[f] = new Array(columnas); 
            for (var c = 0; c < columnas; c++) {
                if ((f == 0 && c == 0) || (f == 0 && c == columnas - 1) || 
                    (f == filas - 1 && c == 0) || (f == filas - 1 && c == columnas - 1)) {
                    m[f][c] = "X";  
                } else {
                    m[f][c] = "n";  
                }
                document.write(m[f][c] + " ");
            }
            document.write("<br>");
        }
    }
    if (op==4){
        var m = new Array(filas); 
        for (var f = 0; f < filas; f++) { 
            m[f] = new Array(columnas); 
            for (var c = 0; c < columnas; c++) {
                if (f == 0 || f == filas - 1 || c == 0 || c == columnas - 1) {
                    m[f][c] = "X"; 
                } else {
                    m[f][c] = "n"; 
                }
                document.write(m[f][c] + " ");
            }
            document.write("<br>");
        }
    }
    if (op==5) {
        var m = new Array(filas); 
        for (var f = 0; f < filas; f++){ 
            m[f] = new Array(columnas); 
            for (var c = 0; c < columnas; c++){
                if (f == c) {
                    m[f][c] = "X"; 
                } else {
                    m[f][c] = "n"; 
                }
                document.write(m[f][c] + " ");
            }
            document.write("<br>");
        }
    }
    if (op==6) {
        var m = new Array(filas); 
        for (var f = 0; f < filas; f++){ 
            m[f] = new Array(columnas); 
            for (var c = 0; c < 10; c++){
                if (f == 9 - c) {
                    m[f][c] = "X"; 
                } else {
                    m[f][c] = "n"; 
                }
                document.write(m[f][c] + " ");
            }
            document.write("<br>");
        }
    }
    if (op==7) {
        var m = new Array(filas);
        for (var f = 0; f < filas; f++) { 
            for (var f = 0; f < filas; f++) { 
                m[f] = new Array(columnas); 
                for (var c = 0; c < columnas; c++) {
                    if (f === c || c === columnas - f - 1) {
                        m[f][c] = "X"; 
                    } else {
                        m[f][c] = "n"; 
                    }
                    document.write(m[f][c] + " ");
                }
                document.write("<br>");
            }
    }
    }
    if (op==8) {
        var m = new Array(filas);
        for (var i = 0; i < filas; i++) {
            m[i] = new Array(columnas).fill('n'); 
        }
        for (var x = 0; x < 5; x++) {
            var fx = parseInt(prompt("Ingrese el número de fila (1 a " + filas + ") donde desea colocar una 'X':")) - 1;
            var cx = parseInt(prompt("Ingrese el número de columna (1 a " + columnas + ") donde desea colocar una 'X':")) - 1;
        
            if (fx >= 0 && fx < filas && cx >= 0 && cx < columnas) {
                m[fx][cx] = "X";
            } else {
                alert("Las coordenadas estan fuera de rango. Por favor intentelo de nuevo.");
                x--;
            }
        }
        for (var f = 0; f < filas; f++) {
            for (var c = 0; c < columnas; c++) {
                document.write(m[f][c] + " ");
            }
            document.write("<br>");
        }
    }
}
