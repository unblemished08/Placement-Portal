import React from 'react'
import { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';

const CompanyRequirements = () => {
    const { setCompanyRequirements, setIsChange } = useContext(StoreContext);

    const [data, setData] = useState({
        name: "",
        ctc: "",
        job_id: "",
        email: "",
        phoneNumber: "",
        gender: "",
        batch: "",
        cgpa: 0,
        backlogs: "",
        branch: [],
        location: "",
        companyImage: "",
        job_profile: [],
        onlyPWD: false,
        group_disscussion: true,
        tech_rounds: 2,
        hr_rounds: 1,
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
        <div className="p-6 min-h-screen text-pink8">
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
                        <label htmlFor="ctc" className="block font-semibold">CTC: </label>
                        <input
                            type="text"
                            value={data.ctc}
                            name="ctc"
                            id="ctc"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        />
                    </div>

                    <div>
                        <label htmlFor="job_id" className="block font-semibold">Job ID:</label>
                        <input
                            type="email"
                            value={data.job_id}
                            name="job_id"
                            id="job_id"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-semibold">Email:</label>
                        <input
                            type="email"
                            value={data.email}
                            name="email"
                            id="email"
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
                                : <select
                                    value={data.gender}
                                    name="gender"
                                    id="gender"
                                    required={edit}
                                    readOnly={!edit}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                                >
                                    <option value="" disabled>Select Gender</option>
                                    <option value="Female">Only Female</option>
                                    <option value="Other">Both</option>
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
                        <label htmlFor="cgpa" className="block font-semibold">Minimum CGPA:</label>
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
                                : <select
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
                                : <select
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
                        <label htmlFor="Location" className="block font-semibold">Locations :</label>
                        <input
                            type="text"
                            value={data.location}
                            name="location"
                            id="location"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        />
                    </div>
                    <div>
                        <label htmlFor="onlyPWD" className="block font-semibold">Is Only PWD Candidates Allowed:</label>
                        {
                            edit === false
                                ? <p className="w-full px-3 py-2 border rounded border-gray-300">{data.onlyPWD}</p>
                                : <select
                                    value={data.onlyPWD}
                                    name="onlyPWD"
                                    id="onlyPWD"
                                    required={edit}
                                    readOnly={!edit}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                                >
                                    <option value="" disabled>Select</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                        }
                    </div>
                    <div>
                        <label htmlFor="group_disscussion" className="block font-semibold">Is Group Discussion:</label>
                        {
                            edit === false
                                ? <p className="w-full px-3 py-2 border rounded border-gray-300">{data.group_disscussion}</p>
                                : <select
                                    value={data.group_disscussion}
                                    name="group_disscussion"
                                    id="group_disscussion"
                                    required={edit}
                                    readOnly={!edit}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                                >
                                    <option value="" disabled>Select</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                        }
                    </div>
                    <div>
                        <label htmlFor="cgpa" className="block font-semibold">Number of Tech Rounds :</label>
                        <input
                            type="text"
                            value={data.tech_rounds}
                            name="tech_rounds"
                            id="tech_rounds"
                            required={edit}
                            readOnly={!edit}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                        />
                    </div>
                    <div>
                        <label htmlFor="hr_rounds" className="block font-semibold">Is HR Round:</label>
                        {
                            edit === false
                                ? <p className="w-full px-3 py-2 border rounded border-gray-300">{data.hr_rounds}</p>
                                : <select
                                    value={data.hr_rounds}
                                    name="hr_rounds"
                                    id="hr_rounds"
                                    required={edit}
                                    readOnly={!edit}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded ${edit ? "border-pink6" : "border-gray-300"}`}
                                >
                                    <option value="" disabled>Select</option>
                                    <option value={1}>Yes</option>
                                    <option value={0}>No</option>
                                </select>
                        }
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
}

export default CompanyRequirements
