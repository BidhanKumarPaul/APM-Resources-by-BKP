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
  24:[
    {name:"Izaz Mahmud",handle:"https://www.facebook.com/md.mahmud.533797"},
    {name:"Shah Md Saleh Al Farhan",handle:"https://www.facebook.com/profile.php?id=61591737040155"},
    {name:"Sishir Kumar Das",handle:"https://www.facebook.com/sishir.kumar.das.2025"},
    {name:"Afib Bin Iqbal",handle:"https://www.facebook.com/afib.bin.iqbal.05/"},
    {name:"Istiak Ahmed Rafi",handle:"https://www.facebook.com/ist01.rafi"},
    {name:"Md. Anis Mia Sourav",handle:"https://www.facebook.com/profile.php?id=100081195833571"},
    {name:"Umme Habiba",handle:"https://www.facebook.com/profile.php?id=61589173036299"},
    {name:"Md. Ariful Islam",handle:"https://www.facebook.com/profile.php?id=61577938976191"},
    {name:"M. K. M. Utsub",handle:"https://www.facebook.com/profile.php?id=61553515168228"},
    {name:"Md. Toyob",handle:"https://www.facebook.com/profile.php?id=61564314324528"},
    {name:"Nafis Abrar",handle:"https://www.facebook.com/nafis.abrar.3323"},
    {name:"Md. Jubayer Hossan Sajib",handle:"https://www.facebook.com/jubayerhossansajib"},
    {name:"Md. Imrul Kayes",handle:"https://www.facebook.com/mdimrul.kayes.9041"},
    {name:"Abdun Noor Musabbir",handle:"https://www.facebook.com/ta.hir.477982"},
    {name:"Ehsanuddin Ahmad",handle:"https://www.facebook.com/sleepCosmic"},
    {name:"Golam Morshed Nur",handle:"https://www.facebook.com/golammorshed.nur.39"},
    {name:"S. M. Rafid Noor Uddin",handle:"https://www.facebook.com/rafid.noor.58"},
    {name:"Md. Sahadat Billa Khadem",handle:"https://www.facebook.com/md.sahadat.billa.khadem"},
    {name:"Md. Rumman Babu",handle:"https://www.facebook.com/rumman.islam.310806"},
    {name:"Dibbo Joti Sanyal Dev",handle:"https://www.facebook.com/dibbo.joti.sanyal.dev"},
    {name:"Md. Taohed Hasan Turjo",handle:"https://www.facebook.com/tawhidhasanturjo8"},
    {name:"Ahnaf Hasan Shin",handle:"https://www.facebook.com/ahnafhasanshin"},
    {name:"A. K. M. Hossain Kabir",handle:""},
    {name:"Md. Muhtasim Billah",handle:"https://www.facebook.com/profile.php?id=61587015088670"},
    {name:"Shahriar Nafiz",handle:"https://www.facebook.com/profile.php?id=61572054052152"},
    {name:"Amio Golder",handle:"https://www.facebook.com/amio.golder.2024"},
    {name:"Md. Safayet Hossen Sad",handle:"https://www.facebook.com/md.afayet.ho.en"},
    {name:"Md. Monirujjaman Imran",handle:"https://www.facebook.com/profile.php?id=61578375322452"},
    {name:"Mahbubul Islam",handle:"https://www.facebook.com/mahbub.islam.247369"},
    {name:"Md. Mosharof Hossen",handle:"https://www.facebook.com/mdmosharofhossenbd"},
    {name:"Md. Sabbir Hossain",handle:"https://www.facebook.com/profile.php?id=61588811428163"},
    {name:"Raju Ahmed Siyam Shanto",handle:"https://www.facebook.com/raju.ahmed.siyam"},
    {name:"Susmita Das",handle:"https://www.facebook.com/susmita.das.714099"},
    {name:"Md. Fatin Sadab",handle:"https://www.facebook.com/fatin.sadab.520"},
    {name:"Md. Najim Uddin",handle:"https://www.facebook.com/profile.php?id=100093129635412"},
    {name:"Sidratul Montaha Mahi",handle:"https://www.facebook.com/sidratul.montaha.mahi.myth"},
    {name:"Biplob Kumar Dash",handle:"https://www.facebook.com/biplob.dash.223180"},
    {name:"Joya Shaha",handle:""},
    {name:"Abdullah Al Tanzib Nuyel",handle:"https://www.facebook.com/profile.php?id=61589478572792"},
    {name:"Junayer Ahmed Siddik Shuvo",handle:"https://www.facebook.com/junayer.ahmed.shuvo"},
    {name:"Sahinur Akter",handle:"https://www.facebook.com/sahinur.akter.466349"},
    {name:"Rifat Ahmed",handle:"https://www.facebook.com/rifat.ahmed.137968"},
    {name:"Md Ratul Rahman",handle:"https://www.facebook.com/md.ratul.rahman.211194"},
    {name:"Md. Shafiq",handle:"https://www.facebook.com/mo.saphika.409988"},
    {name:"Arnab Chowdhury",handle:"https://www.facebook.com/arnab.chowdhury.16940599"},
    {name:"Md. Muzahid Pramanik",handle:"https://www.facebook.com/muzahidpra"},
    {name:"Md. Easa",handle:"https://www.facebook.com/profile.php?id=61588571914164"},
    {name:"Mir Md. Aslam Alim Asik",handle:"https://www.facebook.com/ashik.mira.79"},
    {name:"Md. Rafat Hossin",handle:"https://www.facebook.com/md.rafat.869650"},
    {name:"Mst. Khadezatul Kobra",handle:"https://www.facebook.com/profile.php?id=61588899400164"},
    {name:"Niza Akter",handle:""},
    {name:"Md. Tanvir Alam Ontor",handle:"https://www.facebook.com/mdtanviralamontor.01"},
    {name:"Tausif Ahmed Rownak",handle:"https://www.facebook.com/profile.php?id=61563733901337"},
    {name:"Md. Mustafejur Rahman",handle:"https://www.facebook.com/profile.php?id=100083919252840"},
    {name:"Md. Huzifa Sadhon",handle:"https://www.facebook.com/mo.huja.ipha.sadhana"},
    {name:"Mehrin Akter",handle:"https://www.facebook.com/mehrin.juthi"},
    {name:"Rafid Mostofa Anik",handle:"https://www.facebook.com/Rafid.Mostofa.vandijk"},
    {name:"Tanjina Sultana",handle:"https://www.facebook.com/do.hee.267396"},
    {name:"Bidhan Kumar Pal",handle:"https://www.linkedin.com/in/bidhan-kumar-paul-420a3324b?utm_source=share_via&utm_content=profile&utm_medium=member_android"},
    {name:"Mushfiqur Rahman Anim",handle:"https://www.facebook.com/MushfiqurAnim"},
    {name:"Md. Aminul Islam",handle:"https://www.facebook.com/profile.php?id=100089130983451"},
    {name:"Md. Liyakot Hosen Limon",handle:"https://www.facebook.com/please.choose.another.name.limon"},
    {name:"A. A. M. Musnad",handle:"https://www.facebook.com/profile.php?id=61575820036561"},
    {name:"Tahmid Azad",handle:"https://www.facebook.com/tahmid.exe.9"},
    {name:"Md. Al-Amin Islam Sajib",handle:""},
    {name:"Md. Shemul Mia",handle:"https://www.facebook.com/profile.php?id=61586673257211"}
  ],
  23:[
    {name:"Masqura Akter",handle:"https://www.facebook.com/masqura.akter.2024"},
    {name:"Nusrat Jahan Nabia",handle:"https://www.facebook.com/profile.php?id=61577750711146"},
    {name:"Md. Ahfan Sabid Sunan",handle:"https://www.facebook.com/md.ahfan.sabid.sunan"},
    {name:"Md. Kawsar Ali",handle:"https://www.facebook.com/kawsar.ahmmad.shuvo"},
    {name:"Md. Mohin Khandakar Mizan",handle:"https://www.facebook.com/mohin.khandakar.313"},
    {name:"Imran Forhad",handle:"https://www.facebook.com/imran.forhad.260275"},
    {name:"Nusrat Jahan Suraiya",handle:"https://www.facebook.com/nusrat.jahan.suraiya.23975"},
    {name:"Maria Sultana Moushi",handle:"https://www.facebook.com/profile.php?id=61579772407547"},
    {name:"Muhammad Alif Akbar",handle:"https://www.facebook.com/akib.akbor.3"},
    {name:"Md. Siyam Islam",handle:"https://www.facebook.com/siyam.islam.811884"},
    {name:"Md. Rayatul Islam Rifat",handle:"https://www.facebook.com/rayatul.islam.rifat"},
    {name:"Md. Sojib Mia",handle:"https://www.facebook.com/sojib7642"},
    {name:"Afrin Akhter Setu",handle:"https://www.facebook.com/afrin.akhter.setu.2025"},
    {name:"Mymuna Tabassum",handle:"https://www.facebook.com/mymuna.tabassum.586572"},
    {name:"Md. Atik Hasan",handle:"https://www.facebook.com/hasan.atik.499816"},
    {name:"Md. Shezan Hossain",handle:"https://www.facebook.com/shezan.hossain.752"},
    {name:"Mohammad Abu Zobair",handle:"https://www.facebook.com/M.A.Zobair"},
    {name:"Mahidul Islam Jony",handle:"https://www.facebook.com/gastula.69"},
    {name:"Md. Farhan Sadik",handle:"https://www.facebook.com/fa.rh.an.206689"},
    {name:"Samin",handle:"https://www.facebook.com/md.samin.698160"},
    {name:"Halima-Tus-Sadia",handle:"https://www.facebook.com/halima.tus.sadia.645891"},
    {name:"Md. Menarul Mondol",handle:"https://www.facebook.com/md.menarul.mondol.2025"},
    {name:"Md. Santo Mia",handle:"https://www.facebook.com/profile.php?id=61577953716487"},
    {name:"Md. Jahid Hasan",handle:"https://www.facebook.com/jahid.hasan.907185"},
    {name:"Md. Minhaz Ali",handle:"https://www.facebook.com/minhaz.siuuu07"},
    {name:"Shifat Ullah Hamim",handle:"https://www.facebook.com/shifatullah.hamim"},
    {name:"Sabbir Hossain",handle:"https://www.facebook.com/profile.php?id=100083082673688"},
    {name:"Mir Shabaz Mickey",handle:"https://www.facebook.com/mir.shabaz.535561"},
    {name:"Jubayer Ahmed Zihad",handle:"https://www.facebook.com/jubayerahmed.zihad.3"},
    {name:"Jannatul Ferdous Mollika",handle:"https://www.facebook.com/jannatul.ferdows.mollika"},
    {name:"Md Shahriyar Kabir Rafi",handle:"https://www.facebook.com/profile.php?id=100086786120173"},
    {name:"Imran Bin Rahman Shithil",handle:"https://www.facebook.com/imran.abdullah.561732"},
    {name:"Md Tanvir Hossen",handle:"https://www.facebook.com/mdtanvir.hossen.37819"},
    {name:"Mahmudul Hasan Noman",handle:"https://www.facebook.com/mh.noman.98031"},
    {name:"Md Abid Sadman",handle:"https://www.facebook.com/abid.sadman.71"},
    {name:"Md Masaud Hasan",handle:"https://www.facebook.com/mdmasaud.hasan.5"},
    {name:"Md Mesbah Ul Hassan",handle:"https://www.facebook.com/mesbah.ulhassan.39"},
    {name:"Tanvirul Islam Fahad",handle:"https://www.facebook.com/tanvirul.islam.372019"},
    {name:"Abdul Awal",handle:"https://www.facebook.com/Abdul.Awal.Abir06"},
    {name:"Md Shariyar Parvej Eiamim",handle:"https://www.facebook.com/shahoriar.parvej"},
    {name:"Krisno Ranjon Roy",handle:"https://www.facebook.com/krishno.roy.opu"},
    {name:"Ashmit Sutradhar",handle:"https://www.facebook.com/ashmit.sutradhar66"},
    {name:"Md Shoreful Islam",handle:"https://www.facebook.com/shoreful.islam.pn"},
    {name:"Md Ratul Hasan",handle:"https://www.facebook.com/forhadhosan.ratul"},
    {name:"Shihab Faysal",handle:"https://www.facebook.com/shihabfaysal.8"},
    {name:"Motasir Billa Bayzid",handle:"https://www.facebook.com/mohtasir.billah"},
    {name:"Zayed Mahmud",handle:"https://www.facebook.com/profile.php?id=61576520576824"},
    {name:"Azimul Islam Nayon",handle:"https://www.facebook.com/azimulislamnayon07"},
    {name:"Md Mehbub Islam Sagor",handle:"https://www.facebook.com/mehbubislam.sagar"},
    {name:"Tasnim Rahman",handle:"https://www.facebook.com/tasnim.rahman.151486"},
    {name:"Mst Sanjida Bilkis",handle:"https://www.facebook.com/s.b.sifa.2024"},
    {name:"Md Najim Hossen",handle:"https://www.facebook.com/nh.najim.164984"},
    {name:"Md Saiful Islam",handle:"https://www.facebook.com/md.s.siful.370100"},
    {name:"Ibrahim Gazi",handle:"https://www.facebook.com/ibrahim.gazi.728675"},
    {name:"Rifat Ara",handle:"https://www.facebook.com/rifattaraa"},
    {name:"Md Naimul Islam Chowdhory",handle:"https://www.facebook.com/profile.php?id=61572568139578"},
    {name:"Ifti Niloy",handle:"https://www.facebook.com/ifti.tamim"},
    {name:"Jannatul Arefin Zinia",handle:"https://www.facebook.com/zinia2691491"},
    {name:"Rosmoy Chisim",handle:"https://www.facebook.com/chisim.diggi"},
    {name:"Rabbi Hasan Tamim",handle:"https://www.facebook.com/rh.tamim.rh"},
    {name:"Rahatul Islam",handle:"https://www.facebook.com/mahabi.hasab"},
    {name:"Md Abdullah Al Sadik",handle:"https://www.facebook.com/md.abdullah.al.sadik.732432"},
    {name:"Rifat Ahmed Shishir",handle:"https://www.facebook.com/rifat.ahammed.shishir"},
    {name:"Atia Binte Arif",handle:"https://www.facebook.com/profile.php?id=61577684964309"},
    {name:"Md Maruf",handle:""},
    {name:"Shashwato Alam",handle:"https://www.facebook.com/shashwato.alam"},
    {name:"Md Sayeed Al Ferdous",handle:"https://www.facebook.com/sayeed.al.ferdous"},
    {name:"Pollob Biswas",handle:"https://www.facebook.com/pollob.biswas.736572"},
    {name:"Nayemul Islam Koushik",handle:"https://www.facebook.com/profile.php?id=61584069928362"},
    {name:"Monir Ullah",handle:"https://www.facebook.com/monir.ullah.308703"},
    {name:"Junaid Masud",handle:"https://web.facebook.com/profile.php?id=61588941813641"}
  ],
  22:[
    {name:"Mohi Uddin",handle:"https://www.facebook.com/share/16ddcD3PAV/"},
    {name:"Md. Shahjahan Mia",handle:"https://www.facebook.com/share/1DcPJ11T3D/"},
    {name:"Durlov Sen",handle:"https://www.facebook.com/share/1AecusQfog/"},
    {name:"Md. Maruf Hosen",handle:"https://www.facebook.com/share/1Er3HKg4UX/"},
    {name:"Md. Mazidul Islam",handle:"https://www.facebook.com/share/16bpEm88Y8/"},
    {name:"Md. Rabiul Hassan Rawnak",handle:"https://www.facebook.com/share/16TqPj1qqC/"},
    {name:"Musmmat Somiya Akther",handle:"https://www.facebook.com/share/1CXmkeB3yR/"},
    {name:"Arko Saha",handle:"https://www.facebook.com/share/16HR9X6EtY/"},
    {name:"Md. Roman Hossain",handle:"https://www.facebook.com/share/18qePK6yjv/"},
    {name:"Sultan Mahmud Patwary Utsho",handle:"https://www.facebook.com/share/14G1hUEQLQV/"},
    {name:"Prionkor Saha",handle:"https://www.facebook.com/share/19S3DuMa3g/"},
    {name:"Md. Jihad Molla",handle:"https://www.facebook.com/share/16UXsUwzUB/"},
    {name:"Md. Shehab Mahamud Sojib",handle:"https://www.facebook.com/share/1CPEbL4NKb/"},
    {name:"Alim Mia",handle:"https://www.facebook.com/share/1AtnrJm7dc/"},
    {name:"Md. Nasir Uddin",handle:"https://www.facebook.com/share/1AX423xRXq/"},
    {name:"Md. Sagor Ali",handle:"https://www.facebook.com/share/1EdCPAHBjN/"},
    {name:"Abidur Rahaman",handle:"https://www.facebook.com/share/1BRRf3g67F/"},
    {name:"Israt Jahan",handle:"https://www.facebook.com/share/1YWvCWdD8Q/"},
    {name:"Md. Shabulbul",handle:"https://www.facebook.com/share/1Agk9K8HgG/"},
    {name:"Eyasir Arafat Sikdar",handle:"https://www.facebook.com/share/1C6AGSZER1/"},
    {name:"Rattre Datta Moni",handle:"https://www.facebook.com/share/1687AQbUmB/"},
    {name:"Ibnat Amin",handle:"https://www.facebook.com/share/1BejTypRCF/"},
    {name:"Fouzia Naim Khan",handle:"https://www.facebook.com/share/16CVfFUEFG/"},
    {name:"Bishal Kumar Shil",handle:"https://www.facebook.com/share/1J1jUCCAPy/"},
    {name:"Md. Ayman Rafid",handle:"https://www.facebook.com/share/198vL6sZKw/"},
    {name:"Sheikh Raihan",handle:"https://www.facebook.com/share/16PkXY9ARH/"},
    {name:"Sadia Zaman",handle:"https://www.facebook.com/share/1Ars73umKo/"},
    {name:"Md. Abdullah Al Zihad",handle:"https://www.facebook.com/share/16iwpuZzd9/"},
    {name:"Arman Hossain",handle:"https://www.facebook.com/share/1CARZNUpET/"},
    {name:"Benozir Ahamed Hridoy",handle:"https://www.facebook.com/cyberridoy2"},
    {name:"Md. Mamun Mia",handle:"https://www.facebook.com/share/15oztYofcU/"},
    {name:"Md. Manik Hossain",handle:"https://www.facebook.com/share/193N7CUTTU/"},
    {name:"Abdullah Al Noman Hasnat Rafi",handle:"https://www.facebook.com/share/16dYWbaUXz/"},
    {name:"Md. Rana Islam Emon",handle:"https://www.facebook.com/share/1FPRJKK9aV/"},
    {name:"Mahmudul Islam",handle:"https://www.facebook.com/share/1BZhbazyp1/"},
    {name:"Md. Abu Bakkar Siddik",handle:"https://www.facebook.com/share/1AJzzdQ2Tv/"},
    {name:"Md. Sagor Mondol",handle:"https://www.facebook.com/share/1Ai3tzxtbs/"},
    {name:"Md. Shaharia Parvez",handle:"https://www.facebook.com/share/1Bis4Ti77d/"},
    {name:"Md. Monir Hossain Mehedi",handle:"https://www.facebook.com/share/19KaxEsK9v/"},
    {name:"Junayet Rejoan Moon",handle:"https://www.facebook.com/share/1EDh42g8Q4/"},
    {name:"Md. Mubarok Hossen",handle:"https://www.facebook.com/share/1ApMbGSj8k/"},
    {name:"Md Zihad Ahmed",handle:"https://www.facebook.com/share/1Ngc8MVJ3H/"},
    {name:"Samya Ghosh",handle:"https://www.facebook.com/Mr.cubastic"},
    {name:"Md. Mehedi Hasan Sifat",handle:"https://www.facebook.com/share/1FdLuQ1nsz/"},
    {name:"Md. Monoar Hossen Enam",handle:"https://www.facebook.com/share/19M1pe4pZH/"},
    {name:"Jannatul Nur",handle:"https://www.facebook.com/jannatul.nur.1428921"},
    {name:"Prosanjit Chandra Das",handle:"https://www.facebook.com/share/16k6edTL2q/"},
    {name:"Shafiur Rahman Khadem",handle:"https://www.facebook.com/share/1Hkz4o4aaJ/"},
    {name:"Shovon Mojumder",handle:"https://www.facebook.com/share/1EpXAkgmUf/"},
    {name:"Md. Shohel Rana",handle:"https://www.facebook.com/share/16n2dYM5oc/"},
    {name:"Ashraful Islam",handle:"https://www.facebook.com/share/15K2Qidzct/"},
    {name:"Md. Safin Ahammed Rain",handle:"https://www.facebook.com/share/18aTASEwLE/"},
    {name:"Tanveer Mahmud",handle:"https://www.facebook.com/share/16kpLyA4cd/"},
    {name:"Md. Kamrujaman",handle:"https://www.facebook.com/share/1VehnjBTQh/"},
    {name:"Md. Naimur Rahman Noyon",handle:"https://www.facebook.com/share/19ZmHxV2jJ/"},
    {name:"Md. Sarwar",handle:"https://www.facebook.com/share/1L4TTc3KkX/"},
    {name:"Md. Maruf Hossain",handle:"https://www.facebook.com/share/16MDe6rtjj/"},
    {name:"Md. Sohel Rana",handle:"https://www.facebook.com/share/1CQNSCi9XQ"},
    {name:"Md. Abdullah Al Zihad",handle:"https://www.facebook.com/profile.php?id=100076656108990"},
    {name:"Md. Hridoy Mahbub Dhali",handle:"https://www.facebook.com/hm.hridoy.954074"},
    {name:"Prajna Laboni Saha",handle:"https://www.facebook.com/labonno.saha.8410"}
  ]
};
