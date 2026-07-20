// Single source of truth for navigation and contact details.

// Single-page navigation (anchors within the home page).
export const nav = [
	{ label: "Capacitaciones", href: "#capacitaciones" },
	{ label: "Consultoría", href: "#consultoria" },
	{ label: "+EduMap", href: "#edumap" },
	{ label: "Contacto", href: "#contacto" },
];

const WHATSAPP_MESSAGE = "Hola, quiero coordinar una conversación de 30 minutos";

export const contact = {
	person: "Marcela Cuenca",
	site: "maseduglobal.com",
	siteHref: "https://maseduglobal.com",
	whatsapp: "092 627 498",
	// Uruguay (+598), mobile without leading 0 → 92 627 498
	whatsappHref: "https://wa.me/59892627498",
	// Same number, with a pre-filled message for the CTA buttons.
	whatsappCtaHref: `https://wa.me/59892627498?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
	email: "maseducacion.global@gmail.com",
	emailHref: "mailto:maseducacion.global@gmail.com",
	instagram: "@maseducacion.global",
	instagramHref: "https://instagram.com/maseducacion.global",
	linkedin: "Marcela Cuenca",
	linkedinHref: "https://www.linkedin.com/in/marcela-cuencap/",
};
