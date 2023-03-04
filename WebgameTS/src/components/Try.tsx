import { TryInfo } from "../types/NumberBaseballTypes";

const Try: React.FunctionComponent<{ tryInfo: TryInfo }> = ({ tryInfo }) => {
  console.log(tryInfo);
  return (
    <li>
      <div>[{tryInfo.try}] {tryInfo.result}</div>
    </li>
  );
};

export default Try;
