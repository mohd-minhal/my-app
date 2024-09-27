export default function Hero() {
  return (
    <div className="flex flex-col items-start justify-center h-screen px-6 md:px-16 text-white bg-gradient-to-r from-[#002541] to-[#003d5b]">
      <small>&lt;&gt;Hello World&lt;/&gt;</small>
      <h1 className="font-bold text-5xl mb-6">I'm [Your Name]</h1>
      <h2 className="text-3xl animate-blinker mb-6">Software Developer</h2>
      <h3 className="text-xl mb-8">Specializing in Java Backend and React</h3>
      <div className="flex flex-col border-l border-[#b3d7e0] pl-4 space-y-4 cursor-pointer">
      </div>
    </div>
  );
}
