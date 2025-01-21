import React, { useEffect } from 'react'
import { useContext, useState, useRef } from 'react';
import { StoreContext } from '../../context/StoreContext';

const CompanyRequirements = () => {
    const { CompanyReq, setCompanyReq, setIsChange } = useContext(StoreContext);

    const [data, setData] = useState({
        name: CompanyReq.name,
        ctc: CompanyReq.ctc,
        job_id: CompanyReq.job_id,
        email: CompanyReq.email,
        phoneNumber: CompanyReq.phoneNumber,
        gender: CompanyReq.gender,
        batch: CompanyReq.batch,
        cgpa: CompanyReq.cgpa,
        backlogs: CompanyReq.backlogs,
        branch: CompanyReq.branch,
        location: CompanyReq.location,
        companyImage: CompanyReq.companyImage,
        job_profile: CompanyReq.job_profile,
        onlyPWD: CompanyReq.onlyPWD,
        group_disscussion: CompanyReq.group_disscussion,
        tech_rounds: CompanyReq.tech_rounds,
        hr_rounds: CompanyReq.hr_rounds,
        last_date: CompanyReq.last_date,
    });

    const [isNewLocationAdding, setIsNewLocationAddinig] = useState(false); // if we have clicked on add location or not
    const [newLocation, setNewLocation] = useState(""); // stores the new location 
    const [edit, setEdit] = useState(false); // if edit is true or not
    const [editIndex, setEditIndex] = useState(null); // in location which location we are editing
    const [editValue, setEditValue] = useState(''); // in location the new edited location value

    // handles the location editing
    const handleEditLocation = (index, loc) => {
        setEditIndex(index);
        setEditValue(loc);
    };

    // deletes any location
    const handleDeleteLocation = (index) => {
        const updatedLocations = data.location.filter((_, i) => i !== index);
        setData({ ...data, location: updatedLocations });
    };

    // adds new location
    const handleAddLocation = () => {
        let flag = false;
        if (data.location.includes(newLocation)) {
            flag = true;
        }
        if (newLocation.trim()) {
            setData((prev) => ({
                ...prev,
                location: [...prev.location, newLocation],
            }));
            setNewLocation("");
            setIsNewLocationAddinig(false);
        }
        if (flag === true) {
            handleDeleteLocation(data.location.length);
        }
    };

    // handles the new seletion of any branch
    const handleBranchSelection = (e, branch) => {
        setData((prev) => {
            const branches = [...prev.branch];
            if (e.target.checked) {
                if (!branches.includes(branch)) {
                    branches.push(branch);
                }
            }
            else {
                const index = branches.indexOf(branch);
                if (index > -1) {
                    branches.splice(index, 1);
                }
            }
            return { ...prev, branch: branches };
        });
    };

    // handles the new selection of any profile role
    const handleProfileSelection = (e, profile) => {
        setData((prev) => {
            const profiles = [...prev.job_profile];
            if (e.target.checked) {
                if (!profiles.includes(profile)) {
                    profiles.push(profile);
                }
            }
            else {
                const index = profiles.indexOf(profile);
                if (index > -1) {
                    profiles.splice(index, 1);
                }
            }
            return { ...prev, job_profile: profiles };
        });
    };

    // handles any change in other values like name,ctc etc.
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // handles the submition
    const handleSubmit = (event) => {
        event.preventDefault();
        setCompanyReq(data);
        setEdit(false);
        setIsChange(true);
    };

    // handles the image
    const handleImage = (event) => {
        setData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.files[0]
        }))
    }

    return (
        <>
        <h2 className="text-2xl text-center font-bold mb-4">Role Requirements</h2>
        <div className="p-6  flex  text-black">
            <div className="flex-row justify-between w-1/4">
                <div className="flex gap-3">
                    <div>
                        <label htmlFor="companyImage">
                            <img src={data.companyImage
                                ? URL.createObjectURL(data.companyImage)
                                : "/images/upload_area.png"}
                                alt="company image" className="w-40 cursor-pointer"
                                title="upload company photo"
                            />
                        </label>
                        <input onChange={handleImage} type="file" name="companyImage" id='companyImage' hidden required />
                    </div>
                    <button
                        className={edit === false ? "h-8 w-8 text-slate-500" : "px-4 py-2 h-10 bg-blue-500 text-white rounded hover:bg-blue-600"}
                        onClick={() => setEdit((prev) => !prev)}
                        title="Edit Requirements"
                    >
                        {
                            edit === false ?
                                <svg
                                    className="h-7 w-7"
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
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 w-3/4 bg-slate-50 shadow-gray-500 rounded-lg p-6 hover:shadow-lg hover:shadow-gray-600 transition-shadow duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div className="flex flex-col">
                        {edit === false ? (
                            <p className="font-medium text-gray-700">
                                <strong>Name:</strong> {data.name}
                            </p>
                        ) : (
                            <div>
                                <label htmlFor="name" className="block font-semibold text-gray-800 mb-1">Name:</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    name="name"
                                    id="name"
                                    required
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded border-gray-400 "
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col">
                        {edit === false ? (
                            <p className="font-medium text-gray-700">
                                <strong>CTC:</strong> {data.ctc}
                            </p>
                        ) : (
                            <div>
                                <label htmlFor="ctc" className="block font-semibold text-gray-800 mb-1">CTC:</label>
                                <input
                                    type="text"
                                    value={data.ctc}
                                    name="ctc"
                                    id="ctc"
                                    required={edit}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded border-gray-400 " />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col">
                        {edit === false ? (
                            <p className="font-medium text-gray-700">
                                <strong>Job ID:</strong> {data.job_id}
                            </p>
                        ) : (
                            <div>
                                <label htmlFor="job_id" className="block font-semibold text-gray-800 mb-1">Job ID:</label>
                                <input
                                    type="text"
                                    value={data.job_id}
                                    name="job_id"
                                    id="job_id"
                                    required={edit}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded border-gray-400 " />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col">
                        {edit === false ? (
                            <p className="font-medium text-gray-700">
                                <strong>Email:</strong> {data.email}
                            </p>
                        ) : (
                            <div>
                                <label htmlFor="email" className="block font-semibold text-gray-800 mb-1">Email:</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    name="email"
                                    id="email"
                                    required={edit}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded border-gray-400 " />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col">
                        {edit === false ? (
                            <p className="font-medium text-gray-700">
                                <strong>Phone Number:</strong> {data.phoneNumber}
                            </p>
                        ) : (
                            <div>
                                <label htmlFor="phoneNumber" className="block font-semibold text-gray-800 mb-1">Phone Number:</label>
                                <input
                                    type="text"
                                    value={data.phoneNumber}
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    required={edit}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded border-gray-400 " />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col">
                        {edit === false ? (
                            <p className="font-medium text-gray-700">
                                <strong>Gender:</strong> {data.gender}
                            </p>
                        ) : (
                            <div>
                                <label htmlFor="gender" className="block font-semibold text-gray-800 mb-1">Gender:</label>
                                <select
                                    value={data.gender}
                                    name="gender"
                                    id="gender"
                                    required={edit}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded border-gray-400 ">
                                    <option value="" disabled>Select Gender</option>
                                    <option value="Only Female">Only Female</option>
                                    <option value="Both">Both</option>
                                </select>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col">
                        {edit === false ? (
                            <p className="font-medium text-gray-700">
                                <strong>Minimum CGPA:</strong> {data.cgpa}
                            </p>
                        ) : (
                            <div>
                                <label htmlFor="cgpa" className="block font-semibold text-gray-800 mb-1">Minimum CGPA:</label>
                                <input
                                    type="number"
                                    value={data.cgpa}
                                    name="cgpa"
                                    id="cgpa"
                                    required={edit}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded border-gray-400 " />
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col'>
                        {edit === false ?
                            <p className="font-medium text-gray-700"><strong>Batch :</strong> {data.batch}</p>
                            : <div>
                                <label htmlFor="batch" className="block font-semibold text-gray-800 mb-1">Batch:</label>
                                <input
                                    type="text"
                                    value={data.batch}
                                    name="batch"
                                    id="batch"
                                    required={edit}
                                    readOnly={!edit}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded border-gray-400 " />
                            </div>}
                    </div>

                    <div className='flex flex-col'>
                        {edit === false ?
                            <p className="font-medium text-gray-700"><strong>Backlog :</strong> {data.backlogs}</p>
                            : <div>
                                <label htmlFor="backlogs" className="block font-semibold text-gray-800 mb-1">Backlog :</label>
                                <select
                                    value={data.backlogs}
                                    name="backlogs"
                                    id="backlogs"
                                    required={edit}
                                    readOnly={!edit}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded border-gray-400 ">
                                    <option value="" disabled>Select</option>
                                    <option value="Nil">Nil</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value=">=4">{">"}=4</option>
                                </select>

                            </div>}
                    </div>

                    <div className='flex flex-col'>
                        {edit === false ?
                            <p className="font-medium text-gray-700"><strong>Is Only PWD Candidates Allowed :</strong> {data.onlyPWD === true ? "Yes" : "No"}</p>
                            : <div>
                                <label htmlFor="onlyPWD" className="block font-semibold text-gray-800 mb-1">Is Only PWD Candidates Allowed:</label>
                                {
                                    edit === false
                                        ? <p className="w-full px-3 py-2 border rounded border-gray-300">{data.onlyPWD === true ? "Yes" : "No"}</p>
                                        : <select
                                            value={data.onlyPWD}
                                            name="onlyPWD"
                                            id="onlyPWD"
                                            required={edit}
                                            readOnly={!edit}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border rounded border-gray-400 ">
                                            <option value="" disabled>Select</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                }
                            </div>}
                    </div>

                    <div className='flex flex-col'>
                        {edit === false ?
                            <p className="font-medium text-gray-700"><strong>Is Group Discussion :</strong> {data.group_disscussion === true ? "Yes" : "No"}</p>
                            : <div>
                                <label htmlFor="group_disscussion" className="block font-semibold text-gray-800 mb-1">Is Group Discussion:</label>
                                {
                                    edit === false
                                        ? <p className="font-medium text-gray-700">{data.group_disscussion === true ? "Yes" : "No"}</p>
                                        : <select
                                            value={data.group_disscussion}
                                            name="group_disscussion"
                                            id="group_disscussion"
                                            required={edit}
                                            readOnly={!edit}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border rounded border-gray-400 ">
                                            <option value="" disabled>Select</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                }
                            </div>}
                    </div>

                    <div className='flex flex-col'>
                        {edit === false ?
                            <p className="font-medium text-gray-700"><strong>Number of Tech Rounds :</strong> {data.tech_rounds === true ? "Yes" : "No"}</p>
                            : <div>
                                <label htmlFor="tech_rounds" className="block font-semibold text-gray-800 mb-1">Number of Tech Rounds :</label>
                                <input
                                    type="text"
                                    value={data.tech_rounds}
                                    name="tech_rounds"
                                    id="tech_rounds"
                                    required={edit}
                                    readOnly={!edit}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded border-gray-400 " />
                            </div>}
                    </div>

                    <div className='flex flex-col'>
                        {edit === false ?
                            <p className="font-medium text-gray-700"><strong>Is HR Round :</strong> {data.hr_rounds}</p>
                            : <div>
                                <label htmlFor="hr_rounds" className="block font-semibold text-gray-800 mb-1">Is HR Round:</label>
                                {
                                    edit === false
                                        ? <p className="font-medium text-gray-700">{data.hr_rounds}</p>
                                        : <select
                                            value={data.hr_rounds}
                                            name="hr_rounds"
                                            id="hr_rounds"
                                            required={edit}
                                            readOnly={!edit}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border rounded border-gray-400 ">
                                            <option value="" disabled>Select</option>
                                            <option value={1}>Yes</option>
                                            <option value={0}>No</option>
                                        </select>
                                }
                            </div>}
                    </div>

                    <div className='flex flex-col'>
                        {edit === false ?
                            <p className="font-medium text-gray-700"><strong>Last Date to Apply :</strong> {data.last_date}</p>
                            : <div>
                                <label htmlFor="last_date" className="block font-semibold text-gray-800 mb-1">Last Date to Apply :</label>
                                <input
                                    type="date"
                                    value={data.last_date}
                                    name="last_date"
                                    id="last_date"
                                    required={edit}
                                    readOnly={!edit}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded border-gray-400 " />
                            </div>}
                    </div>

                    <div className="flex flex-col">
                        {edit === false ? (
                            <p className="font-medium text-gray-700">
                                <strong>Branches:</strong> {data.branch.join(", ")}
                            </p>
                        ) : (
                            <div>
                                <label htmlFor="branch" className="block font-semibold text-gray-800 mb-1">Branches:</label>
                                <div className="w-full flex px-3 py-2 border rounded border-gray-400 ">
                                    <div className='w-2/4'>
                                        {["CS", "IT", "ECE", "EE"].map((branch) => (
                                            <label key={branch} className="block mb-1">
                                                <input
                                                    type="checkbox"
                                                    value={branch}
                                                    checked={data.branch.includes(branch)}
                                                    onChange={(e) => handleBranchSelection(e, branch)}
                                                    className="mr-2"
                                                />
                                                {branch}
                                            </label>
                                        ))}
                                    </div>
                                    <div className='w-2/4'>
                                        {["CIVIL", "MECH", "PIE"].map((branch) => (
                                            <label key={branch} className="block mb-1">
                                                <input
                                                    type="checkbox"
                                                    value={branch}
                                                    checked={data.branch.includes(branch)}
                                                    onChange={(e) => handleBranchSelection(e, branch)}
                                                    className="mr-2"
                                                />
                                                {branch}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col">
                        {edit === false ? (
                            <p className="font-medium text-gray-700">
                                <strong>Job Role :</strong> {data.job_profile.join(", ")}
                            </p>
                        ) : (
                            <div>
                                <label htmlFor="job_profile" className="block font-semibold text-gray-800 mb-1">Job Role:</label>
                                <div className="w-full px-3 py-2 border rounded border-gray-400 ">
                                    {["Full Time", "Project", "Research Intern"].map((profile) => (
                                        <label key={profile} className="block mb-1">
                                            <input
                                                type="checkbox"
                                                value={profile}
                                                checked={data.job_profile.includes(profile)}
                                                onChange={(e) => handleProfileSelection(e, profile)}
                                                className="mr-2"
                                            />
                                            {profile}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col space-y-4">
                        {edit === false ? (
                            <p className="font-medium text-gray-700">
                                <strong>Locations:</strong> {data.location.join(", ")}
                            </p>
                        ) : (
                            <div>
                                <label htmlFor="Location" className="block font-semibold text-gray-800 mb-1">
                                    Locations:
                                </label>
                                {data.location.map((loc, index) => (
                                    <div key={index} className="mb-2 flex items-center">
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                className="w-full px-3 py-2 border rounded border-gray-400 " />
                                        ) : (
                                            <input
                                                type="text"
                                                value={loc}
                                                name={`location-${index}`}
                                                onClick={() => handleEditLocation(index, loc)}
                                                readOnly
                                                className="w-full px-3 py-2 border rounded border-gray-400 " />
                                        )}

                                        <button
                                            onClick={() => handleDeleteLocation(index)}
                                            className="ml-2 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}

                                <div className="mt-4">
                                    {!isNewLocationAdding ? (
                                        <button
                                            onClick={() => setIsNewLocationAddinig(true)}
                                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            {data.location.length === 0 ? "Add Location" : "Add More Locations"}
                                        </button>
                                    ) : (
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                value={newLocation}
                                                placeholder="Enter a location"
                                                onChange={(e) => setNewLocation(e.target.value)}
                                                className="w-full px-3 py-2 border rounded border-gray-300"
                                            />
                                            <button
                                                onClick={handleAddLocation}
                                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                            >
                                                Add
                                            </button>
                                            <button
                                                onClick={() => setIsNewLocationAddinig(false)}
                                                className="ml-2 mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {
                    edit ?
                        <div>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </div>
                        : ""
                }
            </form >
        </div >
        </>
    );
}

export default CompanyRequirements
