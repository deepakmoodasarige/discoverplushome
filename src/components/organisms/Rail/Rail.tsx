import * as React from "react";

import Text from "../../atoms/CustomText/CustomText";

import ShowList, {
  ShowListProps,
} from "../../molecules/ShowsList/ShowList";


import "./Rail.scss";

export interface RailListProps {
  headerText: string;
  type: string;
  railList: Array<ShowListProps>;
}

const Rail = ({ headerText, railList, type }: RailListProps) => {
  let renderRails =
    railList && Array.isArray(railList)
      ? railList.map((item, index) => {
          switch (type) {
            case "playlist":
              let playListItem = item as ShowListProps;
              return <ShowList {...playListItem} key={index} />;
              default:
              break;
          }
        })
      : null;

  return (
    <div className={`${type}-rails`}>
      <div className={`${type}-rails__header`}>
        <Text textLabel={headerText} fontSize="lg" color="gray" />
      </div>
      <div className={`${type}-rails__body`}>{renderRails}</div>
    </div>
  );
};

export default Rail;
