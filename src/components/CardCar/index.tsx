import React from "react";

export function CardCar() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
      <div className="w-full h-44 sm:h-52 md:h-56 lg:h-64">
        <img
          src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202508/20250825/bmw-x5-3-0-i6-turbo-hibrido-xdrive50e-m-sport-automatico-wmimagem12201877439.webp?s=fill&w=552&h=414&q=60"
          alt="BMW X5"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold uppercase text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800">
          BMW X5
        </h3>

        <small className="text-gray-700 text-sm sm:text-base">
          2023/2024 • 14.000 KM
        </small>

        <strong className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-600 mt-2">
          R$ 615.900
        </strong>

        <hr className="my-2" />

        <p className="text-gray-700 text-xs sm:text-sm md:text-base">
          Belo Horizonte - MG
        </p>
      </div>
    </div>
  );
}
