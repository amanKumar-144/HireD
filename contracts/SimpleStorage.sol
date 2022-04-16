// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

// Job Seeker, Company, Admin
// Company can post jobs (Company -> Array of Jobs)
// Job Seeker can apply for jobs (Seeker -> Array of applied jobs)
// Job Seeker can get array of job offers (Seeker -> Array of offers from company)
// Job Seeker profile can be private or public
// Job Seeker -> [skills Array]
// (Job Seeker->Resume URI) mapping
//Admin can add companies


contract SimpleStorage {
  string public appName;
  address payable public owner;

  uint public jobSeekerCount;
  uint public companyCount;
  uint public jobCount;
  uint public counter;
  uint public totalJobsApplied;
  constructor() public {
    appName = "HireD";
    owner = msg.sender;
    jobSeekerCount = 0;
    companyCount = 0;
    jobCount = 0;
    counter = 0;
    totalJobsApplied = 0;

    idToSkill[0] = "C++";
    idToSkill[1] = "Python";
    idToSkill[2] = "Java";
    idToSkill[3] = "ReactJS";
    idToSkill[4] = "Solidity";
    idToSkill[5] = "MongoDB";
    
    skillToId["C++"] = 0;
    skillToId["Python"] = 1;
    skillToId["Java"] = 2;
    skillToId["ReactJS"] = 3;
    skillToId["Solidity"] = 4;
    skillToId["MongoDB"] = 5;
  }
  mapping(uint => JobSeeker) public jobSeekerMap;
  mapping(address => uint) public inverseJobSeekerMap;
  
  mapping(uint => Company) public companyMap;
  mapping(address => uint) public inverseCompanyMap;
  
  mapping(uint => string) public idToSkill;
  mapping(string => uint) public skillToId;

  struct JobSeeker {
    uint seekerId;
    string name;
    string age;
    string gender;
    string emailId;
    string phoneNum;
  }
  struct Company {
    uint companyId;
    string companyName;
  }
  struct JobDetails {
    uint jobId;
    string title;
    string roleType;
    string companyName;
    string companyUrl;
    string location;
    string description;
  }
  mapping(uint=>JobDetails) public jobDetailsMap;
  mapping(uint=>string) public temp;
  
  mapping(uint=>uint) totalToJobId;
  mapping(uint=>uint) totalToSeekerId;

  mapping(uint=>uint) totalToJobIdAccepted;
  mapping(uint=>uint) totalToSeekerIdAccepted;


  //Register the JobSeeker
  function registerSeeker(string memory name,string memory age,string memory gender,string memory emailId,
    string memory phoneNum) public {
      require(inverseJobSeekerMap[msg.sender] == 0,"Job Seeker already exists");
      jobSeekerCount++;
      inverseJobSeekerMap[msg.sender] = jobSeekerCount;
      jobSeekerMap[jobSeekerCount] = JobSeeker(jobSeekerCount,name,age,gender,emailId,phoneNum);
  }

  //Login the JobSeeker
  function loginSeeker() public view{
    require(inverseJobSeekerMap[msg.sender] != 0,"Seeker should be in the database");
  }

  //Register the Company
  function registerCompany(string memory companyName) public {
    require(inverseCompanyMap[msg.sender] == 0,"Company is already registered");
    companyCount++;
    inverseCompanyMap[msg.sender] = companyCount;
    companyMap[companyCount] = Company(companyCount,companyName);
  }

  //Login the Company
  function loginCompany() public view{
    require(inverseCompanyMap[msg.sender] != 0,"Company is already registered");
  }

  event postAJobEvent(
    uint jobId,
    string title,
    string roleType,
    string companyName,
    string companyUrl,
    string location,
    string description
  );
  //Company posting a job
  function postAJob(string memory title,string memory roleType,string memory companyName,
  string memory companyUrl,string memory location,string memory description,uint[] memory skillsId) public {
    jobCount++;
    counter = 0;
    for(uint i = 0;i < skillsId.length;i++)
    {
      uint id = skillsId[i];
      string memory skill = idToSkill[id];
      temp[counter] = skill;
      counter++;
    }
    JobDetails memory j1 = JobDetails(jobCount,title,roleType,companyName,companyUrl,location,description);
    jobDetailsMap[jobCount] = j1;
    emit postAJobEvent(jobCount,title,roleType,companyName,companyUrl,location,description);
    // read (temp_mapping) public mapping
  }

  function applyJobFromCandidate(uint jobId,uint seekerId) public {
    totalJobsApplied++;
    totalToJobId[totalJobsApplied] = jobId;
    totalToSeekerId[totalJobsApplied] = seekerId; 
    totalToJobIdAccepted[totalJobsApplied] = 0;
    totalToSeekerIdAccepted[totalJobsApplied] = 0; 
  }

  function acceptJobFromCompany(uint jobId,uint seekerId) public {
    for(uint i = 0;i < totalJobsApplied ;i++){
      if(totalToJobId[i]==jobId && totalToSeekerId[i]==seekerId){
        totalToJobIdAccepted[i] = 1;
        totalToSeekerIdAccepted[i] = 1;
      }
    }
  }
}
