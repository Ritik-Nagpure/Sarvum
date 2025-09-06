
const DetailsView = ({
  data,
  onBack,
}: {
  data: { title: string; endpoint: string; description: string; sample: string };
  onBack: () => void;
}) => (
  <section className="mt-8 scrollbar-hide">
    <button onClick={onBack} className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      ← Back
    </button>
    <div className="bg-gray-800 p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-blue-300 mb-2">{data.title}</h2>
      <p className="mb-4 text-gray-300">
        <strong>Endpoint:</strong> <code className="text-blue-400">{data.endpoint}</code>
      </p>
      <p className="mb-4 text-gray-400">{data.description}</p>
      <pre className="bg-gray-700 p-4 rounded text-sm text-green-200 whitespace-pre-wrap">{data.sample}</pre>
    </div>
  </section>
);

export default DetailsView;
