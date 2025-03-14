export const GA_MEASUREMENT_ID = "G-XC36H9CZD4";

// Registra las visitas a páginas
export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Evento personalizado
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

