export const site = {
  name: "KRAFTLINE",
  descriptor: "PACKAGING SOLUTIONS",
  tagline: "Built to Protect. Designed to Deliver.",
  description:
    "Corrugated packaging solutions for FMCG manufacturers, distributors and growing businesses across Maharashtra, India.",
  location: "Maharashtra, India",
  email: "hello@yourdomain.in",
  phone: "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yourdomain.in",
  capacity: "10,000–50,000 boxes / month",
  products: [
    { name: "3-Ply Corrugated Boxes", code: "01", description: "Lightweight, dependable packaging for products that need practical protection through storage and distribution.", spec: "3-ply board", image: "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&w=1200&q=85" },
    { name: "5-Ply Corrugated Boxes", code: "02", description: "A stronger packaging option for heavier products, longer routes and demanding handling conditions.", spec: "5-ply board", image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1200&q=85" },
    { name: "Custom FMCG Packaging", code: "03", description: "Packaging developed around your product dimensions, stacking needs, handling journey and brand requirements.", spec: "Made to brief", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85" }
  ]
};
