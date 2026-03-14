"use client";

import { useState } from "react";
import ExplanationCard from "./ExplanationCard";

export default function TopicInput() {
  const [topic, setTopic] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const explainTopic = async () => {
    if (!topic.trim()) {
      setError("Please enter a topic to continue.");
      setExplanation("");
      return;
    }

    setLoading(true);
    setError("");
    setExplanation("");

    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to generate explanation.");
      } else {
        setExplanation(data.explanation);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        AI-powered Study Explainer
      </h1>
      <p className="mb-6 text-gray-600">
        Enter any study topic and get a simple explanation.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic like Photosynthesis"
          className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <button
          onClick={explainTopic}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Generating explanation..." : "Explain Topic"}
        </button>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {explanation && (
        <ExplanationCard topic={topic} explanation={explanation} />
      )}
    </div>
  );
}