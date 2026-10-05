// ===== RU-APM site data. Everything you edit regularly lives in this file. =====
// Course slots: n1, n2 (Notes), bk (Books), pt (PYQs typed), ph (PYQs handwritten). Paste links between the quotes.
const CRS=(name,code,tag)=>({name,code,tag,n1:"",n2:"",bk:"",pt:"",ph:""});
const L=(arr,tag)=>arr.map(([c,n])=>CRS(n,c,tag));
const YR=["1st Year","2nd Year","3rd Year","4th Year"];
window.SEMS=[
{id:"1y1s",label:"APM 1Y1S",year:"1st Year · 1st Semester",courses:L([["AMAT1101","Fundamentals of Mathematics"],["AMAT1102","Algebra and Trigonometry"],["AMAT1103","Differential Calculus"],["AMAT1104","Matrix Theory"],["PHYS1110","Mechanic, Properties of Matter, Wave and Sound"],["STAT1111","Fundamental of Statistics"],["AMAT1120","Practical (Using MATLAB)"]])},
{id:"1y2s",label:"APM 1Y2S",year:"1st Year · 2nd Semester",courses:L([["AMAT1201","Geometry of Two Dimensions"],["AMAT1202","Vector Analysis"],["AMAT1203","Integral Calculus"],["AMAT1204","Linear Algebra"],["PHYS1210","Electricity and Magnetism"],["STAT1211","Theory of Probability"],["AMAT1220","Practical (Using Mathematica)"]])},
{id:"2y1s",label:"APM 2Y1S",year:"2nd Year · 1st Semester",courses:L([["AMAT2101","Advanced Calculus"],["AMAT2102","Geometry of Three Dimensions"],["AMAT2103","Ordinary Differential Equations with Modeling"],["AMAT2104","Tensor Analysis"],["PHYS2211","Heat and Thermodynamics"],["STAT2212","Sample Survey and Demography"],["AMAT2220","Practical (Using MATLAB)"]])},
{id:"2y2s",label:"APM 2Y2S",year:"2nd Year · 2nd Semester",courses:L([["AMAT2201","Abstract Algebra"],["AMAT2202","Mechanics"],["CSE2210","Discrete Mathematics and Graph Theory"],["CSE2211","Python Programming"],["PHYS2212","Optics and Modern Physics"],["STAT2213","Mathematical Statistics"],["AMAT2220","Practical (Using Python)"]])},
{id:"3y1s",label:"APM 3Y1S",year:"3rd Year · 1st Semester",courses:L([["AMAT3101","Real Analysis"],["AMAT3102","Complex Analysis"],["AMAT3103","Partial Differential Equations"],["AMAT3104","Methods of Applied Mathematics"],["AMAT3105","Numerical Analysis"],["CSE3110","Programming with C++"],["AMAT3120","Practical (Function Oriented C++)"]])},
{id:"3y2s",label:"APM 3Y2S",year:"3rd Year · 2nd Semester",courses:L([["AMAT3201","Hydrodynamics"],["AMAT3202","Classical Mechanics"],["AMAT3203","Stochastic Calculus"],["AMAT3204","Topology"],["AMAT3205","Integral Equations"],["PHS3210","Electrodynamics"],["AMAT3220","Practical (Object Oriented C++)"]])},
{id:"4y1s",label:"APM 4Y1S",year:"4th Year · 1st Semester",courses:L([["AMAT4101","Fluid Dynamics"],["AMAT4102","Quantum Mechanics"],["AMAT4103","Advanced Numerical Analysis"],["AMAT4104","Differential Geometry"],["AMAT4105","Financial Mathematics"],["IENG4110","Operations Research"],["AMAT4120","Practical (Advanced Numerical Analysis, Using C++)"]])},
{id:"4y2s",label:"APM 4Y2S",year:"4th Year · 2nd Semester",courses:[...L([["AMAT4201","Special Theory of Relativity"],["AMAT4202","Astronomy"],["AMAT4203","Continuum Mechanics"],["AMAT4204","Functional Analysis"],["AMAT4205","Econometrics"],["AMAT4206","Physical Meteorology"],["CSE4210","Data Science and Machine Learning"]],"Optional (choose any five)"),...L([["AMAT4219","Project"],["AMAT4220","Practical (Data Science and Machine Learning, Using Python)"]],"Compulsory")]}
];
window.ABOUT=[["My website","https://bidhankumarpaul.github.io/",true],["My GitHub","https://github.com/BidhanKumarPaul",false],["My LinkedIn","https://www.linkedin.com/in/bidhan-kumar-paul-420a3324b",false],["My YouTube","https://youtube.com/@bkpit",false]];
// ===== COURSE LINKS: paste your links between the quotes =====
// n1 = Note 1, n2 = Note 2, bk = Books, pt = PYQs (typed), ph = PYQs (handwritten)
// Leave a slot empty ("") and the button shows "Not added yet".
const LINKS={
  "1y1s:AMAT1101":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Fundamentals of Mathematics
  "1y1s:AMAT1102":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Algebra and Trigonometry
  "1y1s:AMAT1103":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Differential Calculus
  "1y1s:AMAT1104":{n1:"",n2:"",bk:"",pt:"https://drive.google.com/file/d/18aIeln7O7SYR4oH_nZJQ-sJIGzr82mnW/view?usp=drivesdk",ph:""}, // Matrix Theory
  "1y1s:PHYS1110":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Mechanic, Properties of Matter, Wave and Sound
  "1y1s:STAT1111":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Fundamental of Statistics
  "1y1s:AMAT1120":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Practical (Using MATLAB)
  "1y2s:AMAT1201":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Geometry of Two Dimensions
  "1y2s:AMAT1202":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Vector Analysis
  "1y2s:AMAT1203":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Integral Calculus
  "1y2s:AMAT1204":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Linear Algebra
  "1y2s:PHYS1210":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Electricity and Magnetism
  "1y2s:STAT1211":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Theory of Probability
  "1y2s:AMAT1220":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Practical (Using Mathematica)
  "2y1s:AMAT2101":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Advanced Calculus
  "2y1s:AMAT2102":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Geometry of Three Dimensions
  "2y1s:AMAT2103":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Ordinary Differential Equations with Modeling
  "2y1s:AMAT2104":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Tensor Analysis
  "2y1s:PHYS2211":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Heat and Thermodynamics
  "2y1s:STAT2212":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Sample Survey and Demography
  "2y1s:AMAT2220":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Practical (Using MATLAB)
  "2y2s:AMAT2201":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Abstract Algebra
  "2y2s:AMAT2202":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Mechanics
  "2y2s:CSE2210":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Discrete Mathematics and Graph Theory
  "2y2s:CSE2211":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Python Programming
  "2y2s:PHYS2212":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Optics and Modern Physics
  "2y2s:STAT2213":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Mathematical Statistics
  "2y2s:AMAT2220":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Practical (Using Python)
  "3y1s:AMAT3101":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Real Analysis
  "3y1s:AMAT3102":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Complex Analysis
  "3y1s:AMAT3103":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Partial Differential Equations
  "3y1s:AMAT3104":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Methods of Applied Mathematics
  "3y1s:AMAT3105":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Numerical Analysis
  "3y1s:CSE3110":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Programming with C++
  "3y1s:AMAT3120":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Practical (Function Oriented C++)
  "3y2s:AMAT3201":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Hydrodynamics
  "3y2s:AMAT3202":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Classical Mechanics
  "3y2s:AMAT3203":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Stochastic Calculus
  "3y2s:AMAT3204":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Topology
  "3y2s:AMAT3205":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Integral Equations
  "3y2s:PHS3210":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Electrodynamics
  "3y2s:AMAT3220":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Practical (Object Oriented C++)
  "4y1s:AMAT4101":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Fluid Dynamics
  "4y1s:AMAT4102":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Quantum Mechanics
  "4y1s:AMAT4103":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Advanced Numerical Analysis
  "4y1s:AMAT4104":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Differential Geometry
  "4y1s:AMAT4105":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Financial Mathematics
  "4y1s:IENG4110":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Operations Research
  "4y1s:AMAT4120":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Practical (Advanced Numerical Analysis, Using C++)
  "4y2s:AMAT4201":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Special Theory of Relativity
  "4y2s:AMAT4202":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Astronomy
  "4y2s:AMAT4203":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Continuum Mechanics
  "4y2s:AMAT4204":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Functional Analysis
  "4y2s:AMAT4205":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Econometrics
  "4y2s:AMAT4206":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Physical Meteorology
  "4y2s:CSE4210":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Data Science and Machine Learning
  "4y2s:AMAT4219":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Project
  "4y2s:AMAT4220":{n1:"",n2:"",bk:"",pt:"",ph:""}, // Practical (Data Science and Machine Learning, Using Python)
};
window.SEMS.forEach(s=>s.courses.forEach(c=>{const l=LINKS[s.id+":"+c.code]||{};Object.entries(l).forEach(([k,v])=>{if(v)c[k]=v})}));
window.HOME_LINKS=[["GitHub repository","https://github.com/BidhanKumarPaul/APM-Resources-by-BKP"],["MIT OpenCourseWare","https://ocw.mit.edu/"],["3Blue1Brown","https://www.youtube.com/@3blue1brown"],["Desmos calculator","https://www.desmos.com/calculator"],["NPTEL","https://nptel.ac.in/"],["University of Rajshahi","https://www.ru.ac.bd/"]];
window.SOCIAL=[["APM group","https://facebook.com/groups/140642182623607/"],["APM page","https://www.facebook.com/ruappliedmath"],["APM sports","https://www.facebook.com/profile.php?id=61583014736505"]];
window.TEACHERS_URL="https://profile.ru.ac.bd/public/teachers/243";
// Students by batch number. Add people like: 24:[{name:"Full Name",handle:"https://facebook.com/..."}]
window.BATCHES={
  24:[{name:"Bidhan Kumar Pal",handle:"https://www.facebook.com/share/1EvQ5ixkCx/"}]
};
