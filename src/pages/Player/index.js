"use client";
import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function Player({ apiKey }) {
  const myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", apiKey);
  myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://v3.football.api-sports.io/players/seasons?", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("teste");
        console.log(data);
        setPhotos(data);
      });
  }, []);

  return (
    <RadarChart
      cx={250}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
      // style={{ backgroundColor: "#111" }}
    >
      {/* <PolarGrid stroke="#111" /> */}
      <PolarAngleAxis dataKey="subject" fill="#111" stroke="#fff" />
      {/* <PolarRadiusAxis /> */}
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
