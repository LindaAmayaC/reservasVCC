// Vacaciones con Clase — utilidades compartidas

const VCC = {
  formatCOP(value) {
    if (value == null || isNaN(value)) return '';
    return new Intl.NumberFormat('es-CO', {
      style: 'currency', currency: 'COP', maximumFractionDigits: 0
    }).format(value);
  },

  formatUSD(value) {
    if (value == null || isNaN(value)) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD', minimumFractionDigits: 2
    }).format(value);
  },

  parseNumber(text) {
    if (text == null) return 0;
    const n = parseFloat(String(text).replace(/[^\d.-]/g, ''));
    return isNaN(n) ? 0 : n;
  },

  todayISO() {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  },

  generarNumeroReserva() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const rand = Math.floor(Math.random() * 9000 + 1000);
    return `${yyyy}${mm}-${rand}`;
  },

  // Hook para integración futura con Bitrix24
  bx24Ready(callback) {
    if (typeof BX24 !== 'undefined') {
      BX24.init(callback);
    } else {
      console.info('[VCC] BX24 no disponible — ejecución local sin Bitrix24.');
      callback();
    }
  }
};

window.VCC = VCC;
