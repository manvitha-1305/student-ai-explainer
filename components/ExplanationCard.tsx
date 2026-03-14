type Props = {
  topic: string;
  explanation: string;
};

export default function ExplanationCard({ topic, explanation }: Props) {
  const paragraphs = explanation
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Topic: {topic}
      </h2>

      <div className="space-y-4">
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-8 text-gray-800"
              style={{ color: "#1f2937", WebkitTextFillColor: "#1f2937" }}
            >
              {paragraph}
            </p>
          ))
        ) : (
          <p
            className="text-base leading-8 text-gray-800"
            style={{ color: "#1f2937", WebkitTextFillColor: "#1f2937" }}
          >
            {explanation}
          </p>
        )}
      </div>
    </div>
  );
}