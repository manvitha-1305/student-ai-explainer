import ReactMarkdown from "react-markdown";

type Props = {
  topic: string;
  explanation: string;
};

export default function ExplanationCard({ topic, explanation }: Props) {
  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">Topic: {topic}</h2>

      <div className="prose prose-gray max-w-none">
        <ReactMarkdown>{explanation}</ReactMarkdown>
      </div>
    </div>
  );
}