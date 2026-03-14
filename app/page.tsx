import TopicInput from "@/components/TopicInput";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 px-4 py-12">
      <div className="mx-auto flex max-w-5xl justify-center">
        <TopicInput />
      </div>
    </main>
  );
}