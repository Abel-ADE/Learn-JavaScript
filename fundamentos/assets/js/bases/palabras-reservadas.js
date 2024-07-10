/* Palabras reservadas en JavaScript */

console.log('%cPalabras reservadas en JavaScript', 'font-weight: bold; font-size: 1.8em;');

console.table([
    { keyword: "break", category: "Flow Control" },
    { keyword: "export", category: "Modules" },
    { keyword: "super", category: "Classes" },
    { keyword: "case", category: "Flow Control" },
    { keyword: "extends", category: "Classes" },
    { keyword: "switch", category: "Flow Control" },
    { keyword: "catch", category: "Error Handling" },
    { keyword: "finally", category: "Error Handling" },
    { keyword: "this", category: "Functions & Classes" },
    { keyword: "class", category: "Classes" },
    { keyword: "for", category: "Loops" },
    { keyword: "throw", category: "Error Handling" },
    { keyword: "const", category: "Declarations" },
    { keyword: "function", category: "Functions" },
    { keyword: "try", category: "Error Handling" },
    { keyword: "continue", category: "Flow Control" },
    { keyword: "if", category: "Flow Control" },
    { keyword: "typeof", category: "Operators" },
    { keyword: "debugger", category: "Development" },
    { keyword: "import", category: "Modules" },
    { keyword: "var", category: "Declarations" },
    { keyword: "default", category: "Flow Control" },
    { keyword: "in", category: "Operators" },
    { keyword: "void", category: "Operators" },
    { keyword: "delete", category: "Operators" },
    { keyword: "instanceof", category: "Operators" },
    { keyword: "while", category: "Loops" },
    { keyword: "do", category: "Loops" },
    { keyword: "new", category: "Operators" },
    { keyword: "with", category: "Deprecated" },
    { keyword: "else", category: "Flow Control" },
    { keyword: "return", category: "Functions" },
    { keyword: "yield", category: "Generators" },
    { keyword: "let", category: "Declarations" }
  ]);

  console.log('%cPalabras reservadas en JavaScript (Futuro)', 'font-weight: bold; font-size: 1.8em;');

  console.table([
    { keyword: "enum", status: "Future Reserved" },
    { keyword: "implements", status: "Future Reserved" },
    { keyword: "interface", status: "Future Reserved" },
    { keyword: "package", status: "Future Reserved" },
    { keyword: "private", status: "Future Reserved" },
    { keyword: "protected", status: "Future Reserved" },
    { keyword: "public", status: "Future Reserved" },
    { keyword: "static", status: "Future Reserved" }
  ]);

  console.log('%cPalabras que no se recomienda usar', 'font-weight: bold; font-size: 1.8em;');

  console.table([
    { word: "null", category: "Basic Values" },
    { word: "undefined", category: "Basic Values" },
    { word: "true", category: "Boolean Values" },
    { word: "false", category: "Boolean Values" },
    { word: "hasOwnProperty", category: "Object Properties" },
    { word: "isNaN", category: "Global Functions" },
    { word: "Infinity", category: "Numeric Values" },
    { word: "isFinite", category: "Global Functions" },
    { word: "NaN", category: "Numeric Values" },
    { word: "length", category: "String/Array Properties" },
    { word: "Math", category: "Global Objects" },
    { word: "isPrototypeOf", category: "Object Properties" },
    { word: "prototype", category: "Object Properties" },
    { word: "valueOf", category: "Object Properties" },
    { word: "name", category: "General Properties" },
    { word: "Number", category: "Global Objects" },
    { word: "Object", category: "Global Objects" },
    { word: "String", category: "Global Objects" },
    { word: "toString", category: "Object Properties" },
    { word: "prompt", category: "Window Functions" },
    { word: "alert", category: "Window Functions" },
    { word: "confirm", category: "Window Functions" }
  ]);

  // let const = 3.14159;  Error - palabra reservada