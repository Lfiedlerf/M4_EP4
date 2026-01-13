# 🛠️ Dashboard de Herramientas: Manipulación del DOM

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=flat-square&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-Semantics-orange?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Grid%20Layout-blue?style=flat-square&logo=css3)

## 📖 Descripción del Proyecto

Este proyecto corresponde a la **Lección 3: Elementos fundamentales del Domain Object Model (DOM)** del Módulo 4.

El objetivo principal es demostrar la capacidad de interactuar dinámicamente con el documento HTML mediante JavaScript. Se ha construido un panel de control con cuatro herramientas independientes que resuelven problemas específicos manipulando nodos del DOM, escuchando eventos de usuario y modificando estilos en tiempo real.

## 🚀 Funcionalidades y Módulos

El desarrollo se adhiere al principio de **Separación de Responsabilidades**, manteniendo la estructura (HTML), el diseño (CSS) y el comportamiento (JS) en archivos distintos.

### 1. Repetidor de Cadenas
Algoritmo de manipulación de strings.
- **Input:** Recibe un texto y un número entero.
- **Lógica:** Utiliza métodos nativos de String para concatenar la cadena $n$ veces.
- **DOM:** Renderiza el resultado dinámicamente en un contenedor de salida.

### 2. Manipulador de Estilos Dinámicos
Interacción directa con el objeto `style` de un elemento HTML.
- **Input:** Selector de color (`<input type="color">`).
- **Lógica:** Captura el valor hexadecimal seleccionado.
- **DOM:** Modifica la propiedad `backgroundColor` del bloque de texto objetivo en tiempo real.

### 3. Calculadora de Operaciones Acumuladas
Lógica aritmética y parseo de datos numéricos.
- **Input:** Dos valores numéricos (Float/Int).
- **Lógica:** Ejecuta simultáneamente las cuatro operaciones básicas (+, -, *, /) y calcula una sumatoria final de todos los resultados obtenidos (Ej: Si los resultados son 15, -5, 50 y 0.5, la suma total es 60.5).
- **Validación:** Control de errores para entradas no numéricas (`NaN`).

### 4. Inversor de Texto
Manipulación de Arrays y Strings.
- **Input:** Cadena de texto arbitraria.
- **Lógica:** Convierte la cadena en un arreglo de caracteres, invierte su orden y lo reconstruye (`split` -> `reverse` -> `join`).
- **Resultado:** "Hola" -> "aloH".

---

## 🛠️ Estructura Técnica del Proyecto

```text
M4_EP4/
├── css/
│   └── styles.css       # Hoja de estilos (Diseño responsivo y estética)
├── js/
│   └── script.js        # Lógica de manipulación del DOM y eventos
├── index.html           # Estructura semántica principal
└── README.md            # Documentación del proyecto
```

## 💻 Instalación y Uso

**Clonar el repositorio:**

git clone [https://github.com/Lfiedlerf/M4_EP4.git](https://github.com/Lfiedlerf/M4_EP4.git)

**Ejecución:**

No requiere servidor ni dependencias, simplemente abre el archivo index.html en cualquier navegador moderno (Chrome, Firefox, Edge) o utiliza extensiones como "Live server" en VSC.

## 👨‍💻 Autor
**Luis Fiedler** - Desarrollador en formación

[Perfil de GitHub](https://github.com/Lfiedlerf/)