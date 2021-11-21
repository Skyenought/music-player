import React from "react";
import "./recordItem.less";
import {
  IconPlayCircle,
  IconPlus,
  IconFolder,
  IconForward,
  IconDownload,
} from "@douyinfe/semi-icons";
import utils from "../../../../utils";

export default function RecordItem(props) {
  const { record, index } = props;
  return (
    <li className={utils.isEven(index) ? "record-item even" : "record-item"}>
      <div className="hd">
        <span className="hd-index">{index}.</span>
        <IconPlayCircle />
      </div>
      <div className="singer">
        <span className="music-name">{record.song.name}</span>
        <span className="divider">-</span>
        {record.song.ar.map((a, i) => (
          <span key={a.id} className="singer-name">
            {i === 0 ? a.name : "/" + a.name}
          </span>
        ))}
      </div>
      <div className="operates">
        <IconPlus />
        <IconFolder />
        <IconForward />
        <IconDownload />
      </div>
      <div className="tops">
        <span className="bg" style={{
            width: `${record.score}%`
        }}></span>
        <span className="text">{record.playCount}次</span>
      </div>
    </li>
  );
}