import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../Context/StoreContext";

const MyProfile = ({
    name,
    rollNo,
    personal_email,
    college_email,
    phoneNumber,
    gender,
    batch,
    cgpa,
    backlogs,
    branch,
    familyIncome,
    category,
    studentImage,
    isDisabled,
    password,
    approved,
}) => {
    const { setUserData, setIsChange } = useContext(StoreContext);

    const [data, setData] = useState({
        name: name,
        rollNo: rollNo,
        personal_email: personal_email,
        college_email: college_email,
        phoneNumber: phoneNumber,
        gender: gender,
        batch: batch,
        cgpa: cgpa,
        backlogs: backlogs,
        branch: branch,
        familyIncome: familyIncome,
        category: category,
        studentImage: studentImage,
        isDisabled: isDisabled,
        password: password,
        approved: approved,
    });
    const [edit, setEdit] = useState(false);
    const [see, setSee] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserData(data);
        setEdit(false);
        setIsChange(true);
    };
    const handleImage = (event) => {
        setData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.files[0]
        }))
    }

    return (
        <div className="p-6 min-h-screen text-pink8 ">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">My Profile</h2>
                <div className="flex gap-3">
                    <button
                        className={edit === false ? "h-8 w-8 text-slate-500" : "px-2 py-1 h-10 rounded text-xs bg-pink6 text-white hover:bg-pink7"}
                        onClick={() => setEdit((prev) => !prev)}
                        title="Edit Details"
                    >
                        {
                            edit === false ?
                                <svg
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                </svg>
                                : "Cancel Edit"
                        }
                    </button>

                    <div>
                        <label htmlFor="studentImage">
                            <img src={data.studentImage
                                ? URL.createObjectURL(data.studentImage)
                                : "/images/upload_area.png"}
                                alt="student image" className="w-28 cursor-pointer"
                                title="upload profile photo"
                            />
                        </label>
                        <input onChange={handleImage} type="file" name="studentImage" id='studentImage' hidden required />
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block font-semibold">Name:</label>
                        <input
                            type="text"
                            value={data.name}
                            name="name"
                            id="name"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        />
                    </div>
                    <div>
                        <label htmlFor="rollNo" className="block font-semibold">Roll No:</label>
                        <input
                            type="text"
                            value={data.rollNo}
                            name="rollNo"
                            id="rollNo"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        />
                    </div>

                    <div>
                        <label htmlFor="personal_email" className="block font-semibold">Personal Email:</label>
                        <input
                            type="email"
                            value={data.personal_email}
                            name="personal_email"
                            id="personal_email"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        />
                    </div>
                    <div>
                        <label htmlFor="college_email" className="block font-semibold">College Email:</label>
                        <input
                            type="email"
                            value={data.college_email}
                            name="college_email"
                            id="college_email"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className="block font-semibold">Phone Number:</label>
                        <input
                            type="text"
                            value={data.phoneNumber}
                            name="phoneNumber"
                            id="phoneNumber"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block font-semibold">Gender:</label>
                        {
                            edit === false 
                            ? <p className="w-full px-3 py-2 border rounded border-gray-300">{data.gender}</p>
                          :<select
                            value={data.gender}
                            name="gender"
                            id="gender"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        }
                    </div>


                    <div>
                        <label htmlFor="batch" className="block font-semibold">Batch:</label>
                        <input
                            type="text"
                            value={data.batch}
                            name="batch"
                            id="batch"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        />
                    </div>
                    <div>
                        <label htmlFor="cgpa" className="block font-semibold">CGPA:</label>
                        <input
                            type="number"
                            value={data.cgpa}
                            name="cgpa"
                            id="cgpa"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        />
                    </div>
                    <div>
                        <label htmlFor="backlogs" className="block font-semibold">Backlog:</label>
                        {
                            edit === false 
                            ? <p className="w-full px-3 py-2 border rounded border-gray-300">{data.backlogs}</p>
                            :<select
                            value={data.backlogs}
                            name="backlogs"
                            id="backlogs"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        >
                            <option value="" disabled>Select</option>
                            <option value="Nil">Nil</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value=">=4">{">"}=4</option>
                        </select>
                        }
                    </div>
                    <div>
                        <label htmlFor="branch" className="block font-semibold">Branch:</label>
                        {
                            edit === false
                            ? <p className="w-full px-3 py-2 border rounded border-gray-300">{data.branch}</p>
                            :<select
                            value={data.branch}
                            name="branch"
                            id="branch"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        >
                            <option value="" disabled>Select Branch</option>
                            <option value="CS">CS</option>
                            <option value="IT">IT</option>
                            <option value="ECE">ECE</option>
                            <option value="EE">EE</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="MECH">MECH</option>
                            <option value="PIE">PIE</option>
                        </select>
                        }
                    </div>
                    <div>
                        <label htmlFor="familyIncome" className="block font-semibold">Family Income:</label>
                        {
                            edit === false
                            ? <p className="w-full px-3 py-2 border rounded border-gray-300">{data.familyIncome}</p>
                            :<select
                            value={data.familyIncome}
                            name="familyIncome"
                            id="familyIncome"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        >
                            <option value="" disabled>Select Income</option>
                            <option value="1Lac">{"<"}1Lac</option>
                            <option value=">=1Lac">{">"}=1Lac</option>
                            <option value=">=5Lac">{">="}5Lac</option>
                        </select>
                        }
                    </div>
                    <div>
                        <label htmlFor="category" className="block font-semibold">Category:</label>
                        {
                            edit === false
                            ? <p className="w-full px-3 py-2 border rounded border-gray-300">{data.category}</p>
                            :<select
                            value={data.category}
                            name="category"
                            id="category"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="Gen">Gen</option>
                            <option value="OBC">OBC</option>
                            <option value="SC/ST">SC/ST</option>
                            <option value="PWD">PWD</option>
                        </select>
                        }
                    </div>
                    <div>
                        <label htmlFor="isDisabled" className="block font-semibold">Disability:</label>
                        {
                            edit === false
                            ? <p className="w-full px-3 py-2 border rounded border-gray-300">{data.isDisabled}</p>
                            :<select
                            value={data.isDisabled}
                            name="isDisabled"
                            id="isDisabled"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                        }
                    </div>
                    <div className="relative" >
                        <label htmlFor="password" className="block font-semibold">Password:</label>
                        <input
                            type={see ? "text" : "password"}
                            value={data.password}
                            name="password"
                            id="password"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        />
                        <button
                            type="button"
                            onClick={() => setSee(!see)}
                            className="absolute top-11 right-3 transform -translate-y-1/2 text-sm text-gray-500 focus:outline-none"
                        >
                            {see ? "Hide" : "Show"}
                        </button>
                    </div>
                    <div>
                        <label htmlFor="approved" className="block font-semibold">Approved:</label>
                        <input
                            type="text"
                            value={data.approved}
                            name="approved"
                            id="approved"
                            required
                            readOnly
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded border-gray-300"
                        />
                    </div>
                </div>
                {
                    edit ?
                        <div>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-pink7 text-white rounded hover:bg-pink8"
                            >
                                Submit
                            </button>
                        </div>
                        : ""
                }
            </form>
        </div>
    );
};

export default MyProfile;
