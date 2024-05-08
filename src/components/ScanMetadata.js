import PropTypes from "prop-types";

export default function ScanMetadata({ scan }) {
  const noiseFloorMetric = scan?.noiseFloorMetric.toFixed(2);
  const overallConf = scan?.overallConf.toFixed(2);
  const detectionsList = scan?.detectionsList;

  return (
    <div>
      <table className="mb-4 text-sm text-left text-gray-500 ">
        <thead className="text-xs  uppercase bg-kuvaGray text-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Noise Floor Metric
            </th>
            <th scope="col" className="px-6 py-3">
              Overall Confidence
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 "
            >
              {noiseFloorMetric}
            </th>
            <td className="px-6 py-4">{overallConf}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <p>Number of Detections: {detectionsList?.length}</p>
        {detectionsList?.map((detection, index) => {
          return (
            <section>
              <small>Detection {index + 1}</small>
            
            <table className="mb-4 text-sm text-left text-gray-500 ">
              <thead className="text-xs  uppercase bg-kuvaGray text-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Mean Confidence
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mean Cold.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Summ of Confidence
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 "
                  >
                    {detection.meanconf.toFixed(2)}
                  </th>
                  <td className="px-6 py-4">{detection.meancoldens.toFixed(2)}</td>
                  <td className="px-6 py-4">{detection.sumconf.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            </section>
          );
        })}
      </div>
    </div>
  );
}

ScanMetadata.propTypes = {
  scan: PropTypes.object,
};
