# SimpleSlider

SimpleSlider es un control deslizante de imágenes simple y receptivo, configurable mediante parámetros.

## Autor

- **Nombre**: Héctor de Jesús Coello Gómez
- **Correo Electrónico**: hector_m3@live.com.mx
- **Fecha de Creación**: 2024-06-20

## Descripción

Este proyecto proporciona una clase `SimpleSlider` que permite crear un control deslizante de imágenes con parámetros configurables como el ancho y alto de los elementos, el margen y el número total de vistas.

## Características

- Deslizamiento suave de imágenes
- Configurable a través de parámetros
- Adaptable a diferentes tamaños de pantalla
- Botones de navegación con flechas estilizadas en CSS

## Uso

### HTML

Incluye la estructura básica de HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Slider</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body style="background-color: gainsboro;">

    <div id="sslider">
        <span class="btn-slider btn-slider-left" onclick="slider.move('l')"></span>
        <ul>
            <li><img src="./img/flayer1.png" alt=""></li>
            <li><img src="./img/flayer2.png" alt=""></li>
            <li><img src="./img/flayer3.png" alt=""></li>
            <li><img src="./img/flayer4.png" alt=""></li>
            <li><img src="./img/flayer4.png" alt=""></li>
            <li><img src="./img/flayer4.png" alt=""></li>
            <li><img src="./img/flayer4.png" alt=""></li>
        </ul>
        <span class="btn-slider btn-slider-right" onclick="slider.move('r')"></span>
    </div>

    <script src="slider.js"></script>
    <script>
        const slider = new SimpleSlider({
            container: '#sslider',
            itemWidth: 300,
            itemHeight: 200,
            margin: 10,
            totalView: 4
        });
    </script>
</body>
</html>
