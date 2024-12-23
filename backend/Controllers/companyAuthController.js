import Company from "../Models/Company.js";

export const login1 = async (req, res, next) => {
  const { name,ctc, job_id,email,phoneNumber,gender,batch,cgpa,backlogs,branch,location,job_profile,companyImage,last_date,password,group_disscussion,tech_rounds,hr_rounds
   } = req.body;

  //validate fileds

  if (!name) 
    next("Name is required");
  
  if (!ctc) 
    next("CTC No is required");
  
  if (!job_id) 
    next("JOB ID is required");

  if (!email) 
    next("email is required");

  if (!phoneNumber) 
    next("Phone number is required");

  if (!gender) 
    next("Gender is required");

  if (!batch) 
    next("Batch is required");

  if (cgpa === undefined || cgpa === null) 
    next("CGPA is required");

  if (!backlogs) 
    next("Backlogs are required");

  if (!branch) 
    next("Branch is required");

  if (!location) 
    next("Location is required");

  if (!job_profile) 
    next("Job Profile is required");

  if (!companyImage) 
    next("Company image is required");

  if (!isDisabled) 
    next("Disability status is required");

  if (!password) 
    next("Password is required");

  try {
    const studentExist = await Student.findOne({ rollNo });

    if (studentExist) {
      next("Roll No. already exists");
      return;
    }

    const newstudent = await Student.create({
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
        password
    });

    // user token
    const token = await newstudent.createJWT();

    res.status(201).send({
      success: true,
      message: "Account created successfully",
      newstudent: {
        _id: newstudent._id,
        name: newstudent.name,
        rollNo: newstudent.rollNo,
        personal_email: newstudent.personal_email,
        college_email: newstudent.college_email,
        phoneNumber: newstudent.phoneNumber,
        gender: newstudent.gender,
        batch: newstudent.batch,
        cgpa: newstudent.cgpa,
        backlogs: newstudent.backlogs,
        branch: newstudent.branch,
        familyIncome: newstudent.familyIncome,
        category: newstudent.category,
        studentImage: newstudent.studentImage,
        isDisabled: newstudent.isDisabled,
        password: newstudent.password
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const signUp1 = async (req, res, next) => {
  const { name,job_id, password } = req.body;

  try {
    //validation
    if (!name || !job_id || !password) {
      next("Please Provide All Credentials");
      return;
    }

    // find user by name and jobid
    const com = await Company.findOne({ name,job_id }).select("+password");

    if (!com) {
      next("Invalid name or jobId or password");
      return;
    }

    // compare password
    const isMatch = await com.comparePassword(password);

    if (!isMatch) {
      next("Invalid name or JobId or password");
      return;
    }

    com.password = undefined;

    const token = com.createJWT();

    res.status(201).json({
      success: true,
      message: "Login successfully",
      com,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
