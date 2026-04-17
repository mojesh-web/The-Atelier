import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackEvent = (category, action, label, value) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

export const trackSearch = (searchQuery) => {
  trackEvent("Engagement", "Search", searchQuery);
};

export const trackAddToCart = (productName, price) => {
  trackEvent("Ecommerce", "Add to Cart", productName, price);
};
