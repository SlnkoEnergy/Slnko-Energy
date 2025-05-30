// src/Components/ChatbotBox.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import whatsapp from "../../../../assets/whatsapp.1.png";
const questions = [
  "Hey Welcome to Slnko! What's your name?",
  "Good!, Can you please tell me your Mobile Number",
  "Nice!, could you please tell me your State",
  "From which district are you ?",
  "Are you interested in ?",
];

const KusumOptions = [
  "a) KUSUM Yojna",
  "b) Other Government projects",
  "c) Open access",
  "d) Private use",
  "e) Other services",
];

const stateDistrictMap = {
  "Andhra Pradesh": [
    "Anantapur",
    "Chittoor",
    "East Godavari",
    "Guntur",
    "Kadapa",
    "Krishna",
    "Kurnool",
    "Nellore",
    "Prakasam",
    "Srikakulam",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
    "Parvathipuram Manyam",
    "Alluri Sitharama Raju",
    "Annamayya",
    "Bapatla",
    "Eluru",
    "Kakinada",
    "Konaseema",
    "Nandyal",
    "Palnadu",
    "Tirupati",
  ],
  "Arunachal Pradesh": [
    "Tawang",
    "West Kameng",
    "East Kameng",
    "Pakke Kessang",
    "Papum Pare",
    "Kurung Kumey",
    "Kra Daadi",
    "Lower Subansiri",
    "Upper Subansiri",
    "West Siang",
    "East Siang",
    "Siang",
    "Upper Siang",
    "Lower Siang",
    "Lower Dibang Valley",
    "Dibang Valley",
    "Anjaw",
    "Lohit",
    "Namsai",
    "Changlang",
    "Tirap",
    "Longding",
    "Kamle",
    "Lepa Rada",
    "Shi Yomi",
  ],
  Assam: [
    "Baksa",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Dima Hasao",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Hojai",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong",
  ],
  Bihar: [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran",
  ],
  Chhattisgarh: [
    "Balod",
    "Baloda Bazar",
    "Balrampur",
    "Bastar",
    "Bemetara",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Gariaband",
    "Gaurella-Pendra-Marwahi",
    "Janjgir-Champa",
    "Jashpur",
    "Kabirdham",
    "Kanker",
    "Kondagaon",
    "Korba",
    "Koriya",
    "Mahasamund",
    "Mungeli",
    "Narayanpur",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Sukma",
    "Surajpur",
    "Surguja",
  ],
  Goa: ["North Goa", "South Goa"],
  Gujarat: [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota Udepur",
    "Dahod",
    "Dang",
    "Gir Somnath",
    "Jamnagar",
    "Junagadh",
    "Kachchh",
    "Kheda",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad",
  ],
  Haryana: [
    "Ambala",
    "Bhiwani",
    "Faridabad",
    "Fatehabad",
    "Gurugram",
    "Hisar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendragarh",
    "Nuh",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar",
  ],
  "Himachal Pradesh": [
    "Bilaspur",
    "Chamba",
    "Hamirpur",
    "Kangra",
    "Kinnaur",
    "Kullu",
    "Lahaul and Spiti",
    "Mandi",
    "Shimla",
    "Sirmaur",
    "Solan",
    "Una",
  ],
  Jharkhand: [
    "Bokaro",
    "Chatra",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "East Singhbhum",
    "Garhwa",
    "Giridih",
    "Godda",
    "Gumla",
    "Hazaribagh",
    "Jamtara",
    "Khunti",
    "Koderma",
    "Latehar",
    "Lohardaga",
    "Pakur",
    "Palamu",
    "Ramgarh",
    "Ranchi",
    "Sahebganj",
    "Seraikela Kharsawan",
    "Simdega",
    "West Singhbhum",
  ],
  Karnataka: [
    "Bagalkot",
    "Ballari",
    "Belagavi",
    "Bengaluru Rural",
    "Bengaluru Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikballapur",
    "Chikkamagaluru",
    "Chitradurga",
    "Dakshina Kannada",
    "Davanagere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysuru",
    "Raichur",
    "Ramanagara",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
    "Uttara Kannada",
    "Vijayapura",
    "Yadgir",
  ],
  Kerala: [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad",
  ],
  "Madhya Pradesh": [
    "Agar Malwa",
    "Alirajpur",
    "Anuppur",
    "Ashoknagar",
    "Balaghat",
    "Barwani",
    "Betul",
    "Bhind",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dindori",
    "Guna",
    "Gwalior",
    "Harda",
    "Hoshangabad",
    "Indore",
    "Jabalpur",
    "Jhabua",
    "Katni",
    "Khandwa",
    "Khargone",
    "Mandla",
    "Mandsaur",
    "Morena",
    "Narsinghpur",
    "Neemuch",
    "Niwari",
    "Panna",
    "Raisen",
    "Rajgarh",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shajapur",
    "Sheopur",
    "Shivpuri",
    "Sidhi",
    "Singrauli",
    "Tikamgarh",
    "Ujjain",
    "Umaria",
    "Vidisha",
  ],
  Maharashtra: [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal",
  ],
  Manipur: [
    "Bishnupur",
    "Chandel",
    "Churachandpur",
    "Imphal East",
    "Imphal West",
    "Jiribam",
    "Kakching",
    "Kamjong",
    "Kangpokpi",
    "Noney",
    "Pherzawl",
    "Senapati",
    "Tamenglong",
    "Tengnoupal",
    "Thoubal",
    "Ukhrul",
  ],
  Meghalaya: [
    "East Garo Hills",
    "East Jaintia Hills",
    "East Khasi Hills",
    "North Garo Hills",
    "Ri-Bhoi",
    "South Garo Hills",
    "South West Garo Hills",
    "South West Khasi Hills",
    "West Garo Hills",
    "West Jaintia Hills",
    "West Khasi Hills",
  ],
  Mizoram: [
    "Aizawl",
    "Champhai",
    "Kolasib",
    "Lawngtlai",
    "Lunglei",
    "Mamit",
    "Saiha",
    "Serchhip",
    "Hnahthial",
    "Khawzawl",
    "Saitual",
  ],
  Nagaland: [
    "Chümoukedima",
    "Dimapur",
    "Kiphire",
    "Kohima",
    "Longleng",
    "Mokokchung",
    "Mon",
    "Niuland",
    "Noklak",
    "Peren",
    "Phek",
    "Shamator",
    "Tseminyü",
    "Tuensang",
    "Wokha",
    "Zünheboto",
  ],
  Odisha: [
    "Angul",
    "Balangir",
    "Balasore",
    "Bargarh",
    "Bhadrak",
    "Bolangir",
    "Cuttack",
    "Dhenkanal",
    "Ganjam",
    "Gajapati",
    "Jagatsinghpur",
    "Jajpur",
    "Jharsuguda",
    "Kalahandi",
    "Kandhamal",
    "Kendrapara",
    "Kendujhar",
    "Khordha",
    "Koraput",
    "Malkangiri",
    "Mayurbhanj",
    "Nabarangpur",
    "Nayagarh",
    "Nuapada",
    "Puri",
    "Rayagada",
    "Sambalpur",
    "Subarnapur",
    "Sundargarh",
  ],
  Punjab: [
    "Amritsar",
    "Barnala",
    "Bathinda",
    "Faridkot",
    "Fatehgarh Sahib",
    "Firozpur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Mansa",
    "Moga",
    "Muktsar",
    "Nawanshahr",
    "Patiala",
    "Rupnagar",
    "Sangrur",
    "Shaheed Bhagat Singh Nagar",
    "Sri Muktsar Sahib",
    "Tarn Taran",
  ],
  Rajasthan: [
    "Ajmer",
    "Alwar",
    "Banswara",
    "Baran",
    "Barmer",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Churu",
    "Dausa",
    "Dholpur",
    "Dungarpur",
    "Hanumangarh",
    "Jaipur",
    "Jaisalmer",
    "Jalor",
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Karauli",
    "Kota",
    "Nagaur",
    "Pali",
    "Pratapgarh",
    "Rajsamand",
    "Sawai Madhopur",
    "Sikar",
    "Sirohi",
    "Tonk",
    "Udaipur",
  ],
  Sikkim: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Salem",
    "Sivaganga",
    "Tiruvallur",
    "Tirunelveli",
    "Tirupur",
    "Tiruchirappalli",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ],
  Telangana: [
    "Adilabad",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar Bhupalpally",
    "Jogulamba Gadwal",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Komaram Bheem Asifabad",
    "Mahabubabad",
    "Mahabubnagar",
    "Mancherial",
    "Medak",
    "Medchal–Malkajgiri",
    "Mulugu",
    "Nalgonda",
    "Nirmal",
    "Nizamabad",
    "Peddapalli",
    "Rajanna Sircilla",
    "Rangareddy",
    "Sangareddy",
    "Siddipet",
    "Suryapet",
    "Vikarabad",
    "Warangal",
    "Warangal Rural",
    "Yadadri Bhuvanagiri",
  ],
  Tripura: [
    "Dhalai",
    "Gomati",
    "Kailashahar",
    "Khowai",
    "North Tripura",
    "Sepahijala",
    "South Tripura",
    "Unakoti",
    "West Tripura",
  ],
  "Uttar Pradesh": [
    "Agra",
    "Aligarh",
    "Allahabad",
    "Ambedkar Nagar",
    "Amethi",
    "Amroha",
    "Auraiya",
    "Azamgarh",
    "Baghpat",
    "Bahraich",
    "Ballia",
    "Balrampur",
    "Banda",
    "Barabanki",
    "Bareilly",
    "Basti",
    "Bijnor",
    "Budaun",
    "Bulandshahr",
    "Chandauli",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Etawah",
    "Faizabad",
    "Farrukhabad",
    "Fatehpur",
    "Firozabad",
    "Gautam Buddha Nagar",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Hapur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Kaushambi",
    "Kushinagar",
    "Lakhimpur Kheri",
    "Lucknow",
    "Mau",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Muzaffarnagar",
    "Bijnor",
    "Pratapgarh",
    "Rae Bareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Sant Kabir Nagar",
    "Shahjahanpur",
    "Shrawasti",
    "Siddharthnagar",
    "Sitapur",
    "Sonbhadra",
    "Sultanpur",
    "Unnao",
    "Varanasi",
  ],
  Uttarakhand: [
    "Almora",
    "Bageshwar",
    "Chamoli",
    "Champawat",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri Garhwal",
    "Pithoragarh",
    "Rudraprayag",
    "Tehri Garhwal",
    "Udham Singh Nagar",
    "Uttarkashi",
  ],
  "West Bengal": [
    "Alipurduar",
    "Bankura",
    "Birbhum",
    "Cooch Behar",
    "Dakshin Dinajpur",
    "Darjeeling",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Jhargram",
    "Kalimpong",
    "Kolkata",
    "Malda",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "North Dinajpur",
    "Paschim Bardhaman",
    "Paschim Medinipur",
    "Purba Bardhaman",
    "Purba Medinipur",
    "Purulia",
    "South 24 Parganas",
    "Uttar Dinajpur",
  ],
};

const states = Object.keys(stateDistrictMap);

const KusumFollowUpQuestion =
  "Which state are you interested in filling the tender?";
const TenderStates = [
  "Rajasthan",
  "MP",
  "UP",
  "Other states",
  "Already applied",
];

const StageQuestion = "What stage are you on ?";

const Stages = [
  "Tender Applied",
  "LOI Received",
  "LOA Received",
  "PPA Received",
];
const Exit = ["Exit Chat"];

const ChatbotBox = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [s, setS] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: questions[0] },
  ]);
  const [input, setInput] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const endOfMessagesRef = useRef(null);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { from: "user", text: input };
    const nextStep = step + 1;
    const newMessages = [userMessage];

    if (step === 2) setSelectedState(input);

    // Prevent pushing a new question if it's step 3 (district), so 4 can show options
    if (nextStep < questions.length) {
      newMessages.push({ from: "bot", text: questions[nextStep] });
    }

    setMessages((prev) => [...prev, ...newMessages]);
    setInput("");
    setStep(nextStep);
  };

  const handleOptionClick = (option) => {
    const userMessage = { from: "user", text: option };

    if (option === "Exit Chat") {
      setMessages((prev) => [
        ...prev,
        userMessage,
        { from: "bot", text: "Thank you for visiting us!" },
      ]);
      setTimeout(() => onClose(), 1000);
      return;
    }

    if (step === 4 && option.startsWith("a) KUSUM Yojna")) {
      setS(option);
      setStep(5);
      setMessages((prev) => [
        ...prev,
        userMessage,
        { from: "bot", text: KusumFollowUpQuestion },
      ]);
    } else if (step === 5 && option.startsWith("Already applied")) {
      setS(option);
      setStep(6);
      setMessages((prev) => [
        ...prev,
        userMessage,
        { from: "bot", text: StageQuestion },
      ]);
    } else if (step === 5) {
      setStep(6);
      setMessages((prev) => [
        ...prev,
        userMessage,
        { from: "bot", text: "Thank you! We’ll get in touch with you soon." },
      ]);
    } else if (step === 4) {
      setMessages((prev) => [
        ...prev,
        userMessage,
        { from: "bot", text: "Thank you! We’ll get in touch with you soon." },
      ]);
      setStep(6);
    } else if (step === 6 && Stages.includes(option)) {
      setMessages((prev) => [
        ...prev,
        userMessage,
        {
          from: "bot",
          text: "Thanks for sharing! Our team will follow up with you shortly.",
        },
      ]);
      setStep(7);
    }
  };

  const getDistrictOptions = () => {
    return selectedState && stateDistrictMap[selectedState]
      ? stateDistrictMap[selectedState]
      : [];
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "10%",
        right: { xs: "4%", sm: "3%", md: "2%" },
        width: { xs: "50%", sm: "40%", md: "22%", lg: "20%", xl: "18%" },
        height: "45%",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        mb: 1,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: "#214b7b",
          color: "white",
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight="500">Slnky</Typography>
        <Box>
          <IconButton sx={{ width: 45, height: 45 }}>
            <Box
              component="img"
              alt="whatsapp"
              src={whatsapp}
              sx={{ width: "100%", height: "100%" }}
            />
          </IconButton>
          <IconButton size="small" onClick={onClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Message Area */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 1.5,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.from === "user" ? "#ffd945" : "#f0f0f0",
              color: "black",
              px: 2,
              py: 1,
              borderRadius: "10px",
              maxWidth: "80%",
              fontSize: { md:'0.7rem',lg:'0.8rem',xl: "0.9rem" },
              fontFamily: "poppins",
              letterSpacing: 1,
            }}
          >
            {msg.text}
          </Box>
        ))}

        {/* Step 4: Show Kusum Options */}
        {step === 4 && (
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignSelf: "flex-start",
            }}
          >
            {KusumOptions.map((option) => (
              <Button
                key={option}
                variant="outlined"
                size="small"
                sx={{ textTransform: "none", alignSelf: "flex-start" }}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </Button>
            ))}
          </Box>
        )}

        {/* Step 5: Follow-up on KUSUM */}
        {step === 5 && s?.includes("KUSUM") && (
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignSelf: "flex-start",
            }}
          >
            {TenderStates.map((option) => (
              <Button
                key={option}
                variant="outlined"
                size="small"
                sx={{ textTransform: "none", alignSelf: "flex-start" }}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </Button>
            ))}
          </Box>
        )}

        {/* Step 6: Stage Options */}
        {step === 6 && s?.includes("Already") && (
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignSelf: "flex-start",
            }}
          >
            {Stages.map((option) => (
              <Button
                key={option}
                variant="outlined"
                size="small"
                sx={{ textTransform: "none", alignSelf: "flex-start" }}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </Button>
            ))}
          </Box>
        )}
        <Box ref={endOfMessagesRef} />
      </Box>

      <Divider />

      {/* Input Area */}
      <Box
        sx={{ display: "flex", gap: 1, p: 1.5, borderTop: "1px solid #ddd" }}
      >
        {step === 2 ? (
          <Select
            fullWidth
            size="small"
            displayEmpty
            value={input}
            onChange={(e) => setInput(e.target.value)}
            MenuProps={{ PaperProps: { sx: { maxHeight: 250 } } }}
          >
            <MenuItem value="" disabled>
              Select your state
            </MenuItem>
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        ) : step === 3 ? (
          <Select
            fullWidth
            size="small"
            displayEmpty
            value={input}
            onChange={(e) => setInput(e.target.value)}
            MenuProps={{ PaperProps: { sx: { maxHeight: 250 } } }}
          >
            <MenuItem value="" disabled>
              Select your district
            </MenuItem>
            {getDistrictOptions().map((district) => (
              <MenuItem key={district} value={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
        ) : step === 4 || step === 5 ? (
          <TextField
            fullWidth
            size="small"
            disabled
            placeholder="Please select an option above"
          />
        ) : (
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
        )}

        <Button
          variant="contained"
          sx={{ minWidth: "40px", px: 1, background: "#214b7b" }}
          onClick={handleSend}
          disabled={step === 4 || step === 5}
        >
          <SendIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
};

export default ChatbotBox;
