import PropTypes from "prop-types";

export default function ScanMetadata({scan}) {

  const noiseFloorMetric = scan?.noiseFloorMetric;
  const overallConf = scan?.overallConf;
  const detectionsList = scan?.detectionsList;

  return (
    <div>
      <div>
        <p>
          Noise Floor Metric:
          <i>{noiseFloorMetric}</i>
        </p>
        <p>
          Overall Confidence:
          <i>{overallConf}</i>
        </p>
      </div>
      <div>
        Number of Detections:  {detectionsList?.length}
        <ul>
          {detectionsList?.map((detection,index) => {
            return (
              <li key={detection.uuid}>
                <p>
                  Detection { index + 1  } 
                </p>
                <p>
                  Detection Mean Confidence: {detection.meanconf}
                </p>
                <p>
                  Detection Mean Coldens: {detection.detectionType}
                </p>
                <p>
                  Summ of Confidence: {detection.sumconf}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

ScanMetadata.propTypes = {
  scan: PropTypes.object,
};
