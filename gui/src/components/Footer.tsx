// Footer.tsx
const Footer = () => (
  <footer className="flex flex-col gap-3 bottom-0 left-0 right-0 bg-gray-800 text-center text-gray-300 px-3 py-1 z-10">
    <section className="text-center">
      <h2 className="text-md font-semibold text-blue-300">About Sarvum</h2>
      <p className="text-gray-300 max-w-5xl mx-auto">
        Sarvum is a unified API gateway designed to streamline backend services across multiple applications. It offers
        modular endpoints for AI tools, astronomical data, ride booking, fashion inventory, and more—making integration
        seamless for developers and scalable for businesses.
      </p>
    </section>
    <hr />
    <p>&copy; 2025 Sarvum Technologies. All rights reserved.</p>
  </footer>
);

export default Footer;
