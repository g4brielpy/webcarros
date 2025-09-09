export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4 mt-auto shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <p className="text-sm md:text-base text-center">
          &copy; {new Date().getFullYear()} WebCarros. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
