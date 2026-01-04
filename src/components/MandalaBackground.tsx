import mandalaImage from "@/assets/mandala-gold.png";

const MandalaBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <img
        src={mandalaImage}
        alt=""
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 w-[80vw] max-w-[1200px] h-auto opacity-[0.07] animate-mandala-rotate"
      />
    </div>
  );
};

export default MandalaBackground;
