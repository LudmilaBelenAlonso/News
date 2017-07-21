
'use strict';

/* 

# Crear el modulo Diario

- El objeto noticia debera contener un id, un titulo, una descripcion y una imagen
- El modulo debera validar que la noticia no fue ingresada previamente
- El modulo debera tener la posibilidad de eliminar una noticia por ID (Splice)

*/

var diario = (function (){
            
            //parte privada


var noticias = [ 
	//Cada objeto dentro del array es una peli :)
	{ 
		id:1,
		titulo: 'El sorprendente hallazgo en la exhumación del cuerpo de Dalí',
        descripcion:'Veintiocho años después de su muerte, su bigote preserva aún "su clásica postura de las diez y diez", reveló este viernes el secretario de la Fundación Gala-Dalí, Luis Peñuelas. En la exhumación, ejecutada por orden judicial, fueron extraídas muestras de cabello, uñas, piezas dentales y dos huesos largos. La supuesta hija de Dalí, nacida en Figueres en 1956, se sometió a una extracción de saliva para obtener su ADN el pasado día 11 en Madrid.',
		imagen: "Dali.jpg"
	},
	{
		id:2,
		titulo: "Cómo son las casas donde la gente vivirá en la Luna",
		descripcion: "La agencia espacial dejó el desafío del diseño de las primeras viviendas en manos de distintas universidades. Catorce casas de estudios de todo el mundo participaron en la delineación de los planos. Entre ellas la Facultad de Ingeniería de Sorocaba, en San Pablo, Brasil, que se encargó de trazar y calcular con datos reales cuatro módulos para hospedar a 16 astronautas.",
		imagen: "casasLuna.jpg"
	},
	{
		id:3,
		titulo: "El incómodo berrinche de Charlotte que provocó la reacción de Kate Middleton",
		descripcion: "El hecho ocurrió durante una visita al aeropuerto de Hamburgo en la que la familia real observaba diferentes vehículos aéreos. Seguramente agotada por las obligaciones a las que era exigida, Charlotte -de apenas dos años- decidió exhibir su frustración por unos papeles que tenía en su mano.",
		imagen: "charlore.jpg"
	},
	{
		id:4,
		titulo: "Renunció Sean Spicer, el vocero de la Casa Blanca: los motivos de su salida",
		descripcion: 'Spicer, de 45 años, se tornó una figura notoria por el espíritu agresivo con que defendió las decisiones del gobierno. "Fue un honor y un privilegio servir al presidente Donald Trump y a este impresionante país. Seguiré con mi servicio hasta agosto", escribió en su cuenta de Twitter.',
		imagen: "voceroTrump.jpg"
	},
	{
		id:5,
		titulo: "Las 3 reglas de oro para preparar un té perfecto",
		descripcion: 'El té, una de las bebidas preferidas para los días de frío, posee múltiples beneficios para la salud. Diferentes estudios demostraron cómo contribuye a frenar el deterioro cognitivo; ayuda a perder peso; reduce el riesgo de desarrollar diabetes tipo 2, disminuye la incidencia de fracturas óseas y detiene la acumulación de grasa en el hígado...',
		imagen: "te.jpg"
	},				
	{
		id:6,
		titulo: "Conflicto diplomático entre la Argentina y Chile por un basural en la Cordillera",
		descripcion: 'Entre 2007 y 2012 la minera chilena Los Pelambres, que produce cobre, llenó aproximadamente 52 hectáreas de escombros del lado argentino, en la provincia de San Juan. Es una superficie equivalente a unas 70 canchas de River...',
		imagen: "basura.jpg"
	}

]

            
            
            
            
            //parte publica
            
            
return {
        getnew: function(){
    console.log(noticias);
}, 
    render: function(){
        for (var i =0; i<noticias.length; i++){
            
            //agergar titulo
            var titulo = document.createElement('h2');
        
        titulo.innerHTML=noticias[i].titulo;
        var contenedor = document.querySelector('main');
        contenedor.appendChild(titulo);
        
        
        //agregar descripcion
        var descripcion = document.createElement('p');
        descripcion.innerHTML=noticias[i].descripcion;
        contenedor.appendChild(descripcion);
            
       //agregar elemento
        var imagen = document.createElement('img');
        imagen.src = 'img/' + noticias[i].imagen;
            contenedor.appendChild(imagen);
        
            };
    },


            }            
              })()


            diario.render()
        
              
              
