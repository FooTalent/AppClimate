import React from 'react';


const CardContainer = () => {
    
   
    const fecha = new Date();
    const opcionesDeFormato = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesDeFormato);
    return (
        <div className='w-full flex justify-center'>
            <div className='rounded-md bg-gradient-to-br from-sky-700 via-sky-900 to-cyan-700 w-2/4 flex flex-col justify-center '>
                <div className='w-full flex justify-end my-4'><button><img className='mr-2' src="./lupa.svg" alt="" /></button></div>
                <div className='text-white w-full flex justify-center'><p>{fechaFormateada}</p></div>
                <div className='text-white w-full flex justify-center'><p>Argentina</p></div>
                <div className='text-white w-full flex justify-center'><p>Buenos Aires</p></div>
                <div className='flex gap-4 my-2 w-full justify-center'>
                    <div className='text-white w-2/4'>
                        <div>
                            <p>Wind status</p>
                            <p>7 mph</p>
                        </div>
                        <div>
                            <p>Visibility</p>
                            <p>6.4 miles</p>
                        </div>
                    </div>
                    <div className='text-white w-2/4'>
                        <div>
                            <p>Humidity</p>
                            <p>85%</p>
                        </div>
                        <div>
                            <p>Air pressure</p>
                            <p>998 mb</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardContainer;
