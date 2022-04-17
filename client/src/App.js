import React,{useState,useEffect} from 'react';
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import { useSelector } from 'react-redux';
import {selectUserRole} from "./components/features/userSlice"


import Login from "./components/Login/Login"
import Company from './components/Company/Company';
import Seeker from './components/Seeker/Seeker';

import SimpleStorage from "./contracts/SimpleStorage.json";
import getWeb3 from './getWeb3';

const App = () => {
  const userRole = useSelector(selectUserRole);

  const [contract,setContract] = useState(null);
  const [account,setAccount] = useState();

  const [appName,setAppName] = useState(null);
  const [owner,setOwner] = useState(null);
  const [jobSeekerCount,setJobSeekerCount] = useState(null);
  const [companyCount,setCompanyCount] = useState(null);
  const [jobCount,setJobCount] = useState(null);
  const [counter,setCounter] = useState(null);
  const [totalJobsApplied,setTotalJobsApplied] = useState(null);

  const [jobSeekerMap,setJobSeekerMap] = useState([]);
  const [inverseJobSeekerMap,setInverseJobSeekerMap] = useState([]);
  const [companyMap,setCompanyMap] = useState([]);
  const [inverseCompanyMap,setInverseCompanyMap] = useState([]);
  const [registerCompanyMap,setRegisterCompanyMap] = useState([]);
  const [idToSkill,setIdToSkill] = useState([]);
  const [skillToId,setSkillToId] = useState([]);

  const [jobDetailsMap,setJobDetailsMap] = useState([]);
  const [temp,setTemp] = useState([]);
  const [totalToJobId,setTotalToJobId] = useState([]);
  const [totalToSeekerId,setTotalToSeekerId] = useState([]);
  const [totalToJobIdAccepted,setTotalToJobIdAccepted] = useState([]);
  const [totalToSeekerIdAccepted,setTotalToSeekerIdAccepted] = useState([]);


  const loadContractData = async(contract)=>{
    console.log("The contract is ",contract);
    const appName = await contract.methods.appName().call();setAppName(appName);
    const owner = await contract.methods.owner().call();setOwner(owner);
    const jobSeekerCount = await contract.methods.jobSeekerCount().call();setJobSeekerCount(jobSeekerCount);
    const companyCount = await contract.methods.companyCount().call();setCompanyCount(companyCount);
    const jobCount = await contract.methods.jobCount().call();setJobCount(jobCount);
    const counter = await contract.methods.counter().call();setCounter(counter);
    const totalJobsApplied = await contract.methods.totalJobsApplied().call();setTotalJobsApplied(totalJobsApplied);



    const jobSeekerMap=[];
    for(var i=1;i<=jobSeekerCount;i++){
      const s1= await contract.methods.jobSeekerMap(i).call();
      jobSeekerMap.push(s1);
    }setJobSeekerMap(jobSeekerMap);

    const companyMap=[];
    for(var i=1;i<=companyCount;i++){
      const s1= await contract.methods.companyMap(i).call();
      companyMap.push(s1);
    }setCompanyMap(companyMap);

    const idToSkill=[];
    for(var i=0;i<=5;i++){
      const s1= await contract.methods.idToSkill(i).call();
      idToSkill.push(s1);
    }setIdToSkill(idToSkill);

    const skillToId=[];
    for(var i=0;i<=5;i++){
      const s1= await contract.methods.skillToId(i).call();
      skillToId.push(s1);
    }setSkillToId(skillToId);

    const jobDetailsMap=[];
    for(var i=1;i<=jobCount;i++){
      const j1=await contract.methods.jobDetailsMap(i).call();
      jobDetailsMap.push(j1);
    }setJobDetailsMap(jobDetailsMap);


    const totalToJobId=[];
    for(var i=1;i<=totalJobsApplied;i++){
      const val1=await contract.methods.totalToJobId(i).call();
      totalToJobId.push(val1);
    }setTotalToJobId(totalToJobId);

    const totalToSeekerId=[];
    for(var i=1;i<=totalJobsApplied;i++){
      const val1=await contract.methods.totalToSeekerId(i).call();
      totalToSeekerId.push(val1);
    }setTotalToSeekerId(totalToSeekerId);

    const totalToJobIdAccepted=[];
    for(var i=1;i<=totalJobsApplied;i++){
      const val1=await contract.methods.totalToJobIdAccepted(i).call();
      totalToJobIdAccepted.push(val1);
    }setTotalToJobIdAccepted(totalToJobIdAccepted);

    const totalToSeekerIdAccepted=[];
    for(var i=1;i<=totalJobsApplied;i++){
      const val1=await contract.methods.totalToSeekerIdAccepted(i).call();
      totalToSeekerIdAccepted.push(val1);
    }setTotalToSeekerIdAccepted(totalToSeekerIdAccepted);

}

  const loadWeb3Account = async(web3) => {
    const accounts = await web3.eth.getAccounts();
    if(accounts){
      console.log("The current user is ",accounts[0]);
      setAccount(accounts[0]);
    }
  }

  const loadWeb3Contract = async(web3) => {
    const networkId = await web3.eth.net.getId();
    console.log(SimpleStorage);
    const networkData = SimpleStorage.networks[networkId];
    console.log(networkData);
    if(networkData){
      console.log("Herere")
      
      const abi = SimpleStorage.abi;
      const address = networkData.address;
      const contract = new web3.eth.Contract(abi,address);
      setContract(contract);
      return contract;
    }
  }
  useEffect(() => {
    if(window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      })
      window.ethereum.on('accountsChanged', () => {
        window.location.reload();
      })
    }
  })

  useEffect(async()=>{
      const web3 = await getWeb3();
      await loadWeb3Account(web3);
      let contract = await loadWeb3Contract(web3);
      await loadContractData(contract);
  },[]);


  //Functions
  const registerSeeker=(name,age,gender,emailId,phoneNum)=>{
    contract.methods.registerSeeker(name,age,gender,emailId,phoneNum).send({from:account});
  }
  const loginSeeker=()=>{
    contract.methods.loginSeeker().send({from:account});
  }
  const registerCompany=(companyName)=>{
    contract.methods.registerCompany(companyName).send({from:account});
  }
  const loginCompany=()=>{
    contract.methods.loginCompany().send({from:account});
  }
  const postAJob=(title,roleType,companyName,companyUrl,location,description)=>{
    contract.methods.postAJob(title,roleType,companyName,companyUrl,location,description).send({from:account});
  }
  const applyJobFromCandidate=(jobId,seekerId)=>{
    contract.methods.applyJobFromCandidate(jobId,seekerId).send({from:account});
  }
  const acceptJobFromCompany=(jobId,seekerId)=>{
    contract.methods.acceptJobFromCompany(jobId,seekerId).send({from:account});
  }

  return (
  <div>
    <Router>
      {
        userRole && userRole==="Seeker" && (
          <Routes>
            <Route path="/seekerDashboard" element={<Seeker 
              jobDetailsMap={jobDetailsMap}
              jobCount={jobCount}
              applyJobFromCandidate={applyJobFromCandidate}
              account={account}
              jobSeekerMap={jobSeekerMap}
              totalToJobId={totalToJobId}
              totalToSeekerId={totalToSeekerId}
              totalToJobIdAccepted={totalToJobIdAccepted}
              totalToSeekerIdAccepted={totalToSeekerIdAccepted}
            
            />} />
          </Routes>
        )
      }
      {
        userRole && userRole==="Company" && (
          <Routes>
            <Route path="/companyDashboard" element={<Company 
              postAJob={postAJob}
              acceptJobFromCompany={acceptJobFromCompany}
              jobDetailsMap={jobDetailsMap}
              jobCount={jobCount}
              account={account}
              
              totalToJobId={totalToJobId}
              totalToSeekerId={totalToSeekerId}
              totalToJobIdAccepted={totalToJobIdAccepted}
              totalToSeekerIdAccepted={totalToSeekerIdAccepted}

            />} 
              
            />
          </Routes>
        )
      }
      {
        !userRole && (
          <Routes>
            <Route path="/" element={<Login 
              registerSeeker={registerSeeker}
              loginSeeker={loginSeeker}
              registerCompany={registerCompany}
              loginCompany={loginCompany}
              account={account}
            />} />
          </Routes>
        )
      }
    </Router>
    </div>
  )
}

export default App