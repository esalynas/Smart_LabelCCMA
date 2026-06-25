// Contiene la base de datos de trámites y sus respectivas validaciones
const matrizTramites = {
  reforma: {
    nombre: "Reforma Estatutos",
    controles: [
      "Verificación de quórum",
      "Validación firmas",
      "Derecho preferencia",
      "Cotejo estatutos"
    ]
  },
  constitucion_esal: {
    nombre: "Constitución ESAL",
    controles: [
      "Control homonimia",
      "Validación patrimonio",
      "Cláusula liquidación"
    ]
  },
  fusion: {
    nombre: "Fusión",
    controles: [
      "Avisos de fusión",
      "Estados financieros",
      "Derecho retiro"
    ]
  },
  constitucion_sas: {
    nombre: "Constitución SAS",
    controles: [
      "Control homonimia",
      "Objeto social",
      "Capital",
      "Representante legal",
      "Firmas"
    ]
  },
  nombramiento_rl: {
    nombre: "Designación Rep Legal",
    controles: [
      "Cumple SIPREF",
      "Convocatoria",
      "Órgano competente",
      "Quórum",
      "Aceptación al cargo"
    ]
  },
  
  junta_directiva: {
    nombre: "Junta Directiva",
    controles: [
      "Convocatoria",
      "Miembros",
      "Periodo",
      "Firmas"
    ]
  },
  certificacion_capital: {
    nombre: "Certificación Capital",
    controles: [
      "Cap Sus menor Autorizado",
      "Rev Fiscal-Contador Sin Sanciones",
      "Pago impuesto registro"
    ]
  }
};
