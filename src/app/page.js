"use client";
import React from "react";
import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";

const students = [
  {
    studentID: "1001",
    pin: "1234",
  },
  {
    studentID: "1002",
    pin: "5678",
  },
];

function verifyValue(studentid, studentpin, setVerifyStatus) {
  for (const student of students) {
    if (student.studentID == studentid) {
      if (student.pin == studentpin) {
        setVerifyStatus("success");
      } else {
        setVerifyStatus("invalid pin");
      }
      return;
    }
    setVerifyStatus("Invalid id");
  }
}

export default function Home() {
  const [items, setitems] = useState([
    { name: "uber", price: 399 },
    { name: "home", price: 500 },
    { name: "rent", price: 55 },
    { name: "food", price: 455 },
  ]);

  const [studentId, setStudentId] = useState("");
  const [studentPIN, setStudentPIN] = useState("");
  const [verifyStatus, setVerifyStatus] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24 ">
      <div className="bg-white px-20 py-10 border-2 flex items-center flex-col rounded-lg shadow-lg">
        <div className="container w-fit">
          <h1 className="text-4xl font-bold">Borrow A Book</h1>
          <div className="mt-10 flex flex-col gap-2">
            <label htmlFor="StudentID">Student ID</label>
            <input
              value={studentId}
              onInput={(e) => setStudentId(e.target.value)}
              type="text"
              id="StudentID"
              placeholder="Student ID"
              className="border-2 px-3 py-4 rounded-sm"
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="sutdentPin">Student PIN</label>
            <input
              value={studentPIN}
              onInput={(e) => setStudentPIN(e.target.value)}
              type="password"
              id="StudentPin"
              placeholder="Student PIN"
              className="border-2 px-3 py-4 rounded-sm"
            />
          </div>
          <button
            onClick={() => verifyValue(studentId, studentPIN, setVerifyStatus)}
            className="px-3 py-4 bg-blue-800 text-white rounded mt-8 w-full "
          >
            Proceed
          </button>{" "}
          {verifyStatus != "success" ? (
            <span>{verifyStatus}</span>
          ) : (
            <span>We go to next step</span>
          )}
        </div>
      </div>
    </main>
  );
}
