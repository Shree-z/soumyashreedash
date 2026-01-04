import MandalaBackground from "@/components/MandalaBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <MandalaBackground />
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
          <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
