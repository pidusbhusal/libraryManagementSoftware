"use client";
import React, { useState } from "react";

function Students() {
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [studentId, setStudentId] = useState("");
  const [studentPin, setStudentPin] = useState("");
  const [stepNo, setStepNo] = useState(1);
  const [searchedId, setSearchID] = useState("");
  return (
    <div className=" flex justify-center items-center ">
      <div className="container flex gap-20 flex-wrap">
        <div className="bg-white px-20 py-10 border-2 flex items-center flex-col rounded-lg shadow-lg w-full ">
          <h1 className="text-4xl font-bold">Add Student</h1>
          <div className="flex flex-wrap gap-10 mt-5">
            {/* User Name */}
            {}
            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="StudentName">Student First Name</label>
              <input
                value={studentFirstName}
                onInput={(e) => setStudentFirstName(e.target.value)}
                type="text"
                id="StudentName"
                placeholder="Student Name"
                className="border-2 px-3 py-4 rounded-sm"
              />
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="StudentName">Student Last Name</label>
              <input
                value={studentLastName}
                onInput={(e) => setStudentLastName(e.target.value)}
                type="text"
                id="StudentName"
                placeholder="Student Name"
                className="border-2 px-3 py-4 rounded-sm"
              />
            </div>

            {/* Users Details */}

            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                value={phoneNumber}
                onInput={(e) => setPhoneNumber(e.target.value)}
                type="text"
                id="phonenumber"
                placeholder="Phone Number"
                className="border-2 px-3 py-4 rounded-sm"
              />
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="address">Address</label>
              <input
                value={address}
                onInput={(e) => setAddress(e.target.value)}
                type="text"
                id="address"
                placeholder="Address"
                className="border-2 px-3 py-4 rounded-sm"
              />
            </div>

            {/* User Sign In Credentials */}
            <div className="mt-5 flex flex-col gap-2">
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
                value={studentPin}
                onInput={(e) => setStudentPin(e.target.value)}
                type="password"
                id="StudentPin"
                placeholder="Student PIN"
                className="border-2 px-3 py-4 rounded-sm"
              />
            </div>

            <button className="px-8 py-5 h-fit bg-blue-800 text-white rounded   ">
              Add Student
            </button>
          </div>
        </div>
        <div className="bg-white px-20 py-10 border-2 flex items-center flex-col rounded-lg shadow-lg w-full">
          <h1 className="text-4xl font-bold">Find Student</h1>

          <div className="headcopy">
            <div className="flex gap-20 mt-10">
              <input
                type="Search"
                className="border-2 px-3 py-4 rounded-sm"
                value={phoneNumber}
                placeholder="Student Id"
                onInput={(e) => setPhoneNumber(e.target.value)}
              />
              <button className="px-8 py-5 h-fit bg-blue-800 text-white rounded   ">
                Search
              </button>
            </div>

            <div className="flex flex-wrap mt-20">
              <div className="border-2 px-3 py-4 rounded-sm max-w-full">
                <div>
                  <span>
                    {"Sudip"} {"Bhusal"}
                  </span>
                  <span>Student ID : {"4555"}</span>
                </div>
                <div>
                  <span>Phone Number : {"4376612045"}</span>
                  <span>Address : {"89 Claremont Street, Toronto,ON"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
