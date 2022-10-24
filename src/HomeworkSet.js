import { Button, Input } from "@mui/material";
import React, { Component, useState } from "react";
import callBackend from "./backend.js";

function HomeworkSet(props) {
  const [qtyInput, setQtyInput] = useState(0);
  const [qty, setQty] = useState(0);

  const validateInput = (v) => {
    if (v === "") setQtyInput(v);
    if (isNaN(parseInt(v))) return;
    setQtyInput(parseInt(v));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div>
        {props.homeworkName}: {qty}/100
      </div>
      <div>
        <Input
          value={qtyInput}
          onChange={(e) => validateInput(e.target.value)}
          type="text"
          placeholder="Enter qty"
        />
      </div>
      <div>
        <Button
          onClick={() => {
            callBackend(`checkIn-hardware/${props.projectId}/${qtyInput}`);
            setQty(qty + qtyInput);
            setQtyInput(0);
          }}
        >
          Check in
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            callBackend(`checkOut-hardware/${props.projectId}/${qtyInput}`);
            setQty(qty - qtyInput);
            setQtyInput(0);
          }}
        >
          Check out
        </Button>
      </div>
    </div>
  );
}

export default HomeworkSet;
