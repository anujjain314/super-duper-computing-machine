import { Button } from "@mui/material";
import React, { Component, useState } from "react";
import HomeworkSet from "./HomeworkSet";
import callBackend from "./backend.js";

function Projects(props) {
  const [joined, setJoined] = useState(false);

  return (
    <div
      style={{
        border: "3px solid black",
        height: "200px",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        padding: "10px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        {props.projectName}
      </div>
      <div style={{ display: "flex" }}>list, of, authorized, users</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HomeworkSet homeworkName="HWSet1" projectId={props.projectId} />
        <HomeworkSet homeworkName="HWSet2" projectId={props.projectId} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        ></div>
      </div>
      <div>
        <Button
          onClick={() => {
            if (joined) {
              callBackend(`/leaveProject/${props.projectId}`);
            } else {
              callBackend(`/joinProject/${props.projectId}`);
            }
            setJoined(!joined);
          }}
        >
          {joined ? "Leave" : "Join"}
        </Button>
      </div>
    </div>
  );
}

export default Projects;
