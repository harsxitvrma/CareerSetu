// This is your college mapping data, corrected to match every quiz combination.
const collegeMapping = {
    "Science_60–75%_Engineering/Technology_Home State": [
        { name: 'Amity University Noida', location: 'Noida', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'Delhi College of Engineering', location: 'Delhi', fees: '1.2 Lakhs', hasHostel: true },
        { name: 'Indira Gandhi Institute of Technology', location: 'Delhi', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'Graphic Era University', location: 'Dehradun', fees: '1.8 Lakhs', hasHostel: true }
    ],
    "Science_60–75%_Engineering/Technology_Metro Cities": [
        { name: 'Amity University Noida', location: 'Noida', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'LPU Punjab', location: 'Phagwara', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Chandigarh University', location: 'Chandigarh', fees: '2.0 Lakhs', hasHostel: true },
        { name: 'Graphic Era University', location: 'Dehradun', fees: '1.8 Lakhs', hasHostel: true }
    ],
    "Science_60–75%_Engineering/Technology_Anywhere in India": [
        { name: 'Amity University Noida', location: 'Noida', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'LPU Punjab', location: 'Phagwara', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Chandigarh University', location: 'Chandigarh', fees: '2.0 Lakhs', hasHostel: true },
        { name: 'Graphic Era University', location: 'Dehradun', fees: '1.8 Lakhs', hasHostel: true }
    ],
    "Science_60–75%_Medical/Healthcare_Home State": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Private State Medical College', location: 'Local', fees: '5.0 Lakhs', hasHostel: true },
        { name: 'Sri Ramachandra Chennai', location: 'Chennai', fees: '6.0 Lakhs', hasHostel: true },
        { name: 'DY Patil Navi Mumbai', location: 'Navi Mumbai', fees: '5.5 Lakhs', hasHostel: true }
    ],
    "Science_60–75%_Medical/Healthcare_Metro Cities": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Private State Medical College', location: 'Local', fees: '5.0 Lakhs', hasHostel: true },
        { name: 'Sri Ramachandra Chennai', location: 'Chennai', fees: '6.0 Lakhs', hasHostel: true },
        { name: 'DY Patil Navi Mumbai', location: 'Navi Mumbai', fees: '5.5 Lakhs', hasHostel: true }
    ],
    "Science_60–75%_Medical/Healthcare_Anywhere in India": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Private State Medical College', location: 'Local', fees: '5.0 Lakhs', hasHostel: true },
        { name: 'Sri Ramachandra Chennai', location: 'Chennai', fees: '6.0 Lakhs', hasHostel: true },
        { name: 'DY Patil Navi Mumbai', location: 'Navi Mumbai', fees: '5.5 Lakhs', hasHostel: true }
    ],
    "Science_60–75%_Management/Business_Home State": [
        { name: 'ICFAI Hyderabad', location: 'Hyderabad', fees: '3.5 Lakhs', hasHostel: true },
        { name: 'Jaipuria Institute of Management', location: 'Lucknow', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'UPES Dehradun', location: 'Dehradun', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Alliance University', location: 'Bangalore', fees: '3.2 Lakhs', hasHostel: true }
    ],
    "Science_60–75%_Management/Business_Metro Cities": [
        { name: 'ICFAI Hyderabad', location: 'Hyderabad', fees: '3.5 Lakhs', hasHostel: true },
        { name: 'Jaipuria Institute of Management', location: 'Lucknow', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'UPES Dehradun', location: 'Dehradun', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Alliance University', location: 'Bangalore', fees: '3.2 Lakhs', hasHostel: true }
    ],
    "Science_60–75%_Management/Business_Anywhere in India": [
        { name: 'ICFAI Hyderabad', location: 'Hyderabad', fees: '3.5 Lakhs', hasHostel: true },
        { name: 'Jaipuria Institute of Management', location: 'Lucknow', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'UPES Dehradun', location: 'Dehradun', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Alliance University', location: 'Bangalore', fees: '3.2 Lakhs', hasHostel: true }
    ],
    "Science_60–75%_Arts/Humanities_Home State": [
        { name: 'Panjab University', location: 'Chandigarh', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Fergusson College Pune', location: 'Pune', fees: '0.3 Lakhs', hasHostel: false },
        { name: 'Loyola College Chennai', location: 'Chennai', fees: '0.4 Lakhs', hasHostel: false },
        { name: 'Miranda House DU', location: 'Delhi', fees: '0.6 Lakhs', hasHostel: true }
    ],
    "Science_60–75%_Arts/Humanities_Metro Cities": [
        { name: 'Panjab University', location: 'Chandigarh', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Fergusson College Pune', location: 'Pune', fees: '0.3 Lakhs', hasHostel: false },
        { name: 'Loyola College Chennai', location: 'Chennai', fees: '0.4 Lakhs', hasHostel: false },
        { name: 'Miranda House DU', location: 'Delhi', fees: '0.6 Lakhs', hasHostel: true }
    ],
    "Science_60–75%_Arts/Humanities_Anywhere in India": [
        { name: 'Panjab University', location: 'Chandigarh', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Fergusson College Pune', location: 'Pune', fees: '0.3 Lakhs', hasHostel: false },
        { name: 'Loyola College Chennai', location: 'Chennai', fees: '0.4 Lakhs', hasHostel: false },
        { name: 'Miranda House DU', location: 'Delhi', fees: '0.6 Lakhs', hasHostel: true }
    ],
    "Science_75–90%_Engineering/Technology_Home State": [
        { name: 'VIT Vellore', location: 'Vellore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'SRM Chennai', location: 'Chennai', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Manipal Institute of Technology', location: 'Manipal', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'PES University', location: 'Bangalore', fees: '2.2 Lakhs', hasHostel: true }
    ],
    "Science_75–90%_Engineering/Technology_Metro Cities": [
        { name: 'VIT Vellore', location: 'Vellore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'SRM Chennai', location: 'Chennai', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Manipal Institute of Technology', location: 'Manipal', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'PES University', location: 'Bangalore', fees: '2.2 Lakhs', hasHostel: true }
    ],
    "Science_75–90%_Engineering/Technology_Anywhere in India": [
        { name: 'VIT Vellore', location: 'Vellore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'SRM Chennai', location: 'Chennai', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Manipal Institute of Technology', location: 'Manipal', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'PES University', location: 'Bangalore', fees: '2.2 Lakhs', hasHostel: true }
    ],
    "Science_75–90%_Medical/Healthcare_Home State": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Grant Medical College Mumbai', location: 'Mumbai', fees: '0.7 Lakhs', hasHostel: true },
        { name: 'BJ Medical Pune', location: 'Pune', fees: '0.9 Lakhs', hasHostel: true },
        { name: 'St. John’s Bangalore', location: 'Bangalore', fees: '1.2 Lakhs', hasHostel: true }
    ],
    "Science_75–90%_Medical/Healthcare_Metro Cities": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Grant Medical College Mumbai', location: 'Mumbai', fees: '0.7 Lakhs', hasHostel: true },
        { name: 'BJ Medical Pune', location: 'Pune', fees: '0.9 Lakhs', hasHostel: true },
        { name: 'St. John’s Bangalore', location: 'Bangalore', fees: '1.2 Lakhs', hasHostel: true }
    ],
    "Science_75–90%_Medical/Healthcare_Anywhere in India": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Grant Medical College Mumbai', location: 'Mumbai', fees: '0.7 Lakhs', hasHostel: true },
        { name: 'BJ Medical Pune', location: 'Pune', fees: '0.9 Lakhs', hasHostel: true },
        { name: 'St. John’s Bangalore', location: 'Bangalore', fees: '1.2 Lakhs', hasHostel: true }
    ],
    "Science_75–90%_Management/Business_Home State": [
        { name: 'Xavier Institute Mumbai', location: 'Mumbai', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'Amity Business School', location: 'Noida', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Lovely Professional University', location: 'Phagwara', fees: '1.8 Lakhs', hasHostel: true },
        { name: 'BML Munjal University', location: 'Gurgaon', fees: '2.0 Lakhs', hasHostel: true }
    ],
    "Science_75–90%_Management/Business_Metro Cities": [
        { name: 'Xavier Institute Mumbai', location: 'Mumbai', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'Amity Business School', location: 'Noida', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Lovely Professional University', location: 'Phagwara', fees: '1.8 Lakhs', hasHostel: true },
        { name: 'BML Munjal University', location: 'Gurgaon', fees: '2.0 Lakhs', hasHostel: true }
    ],
    "Science_75–90%_Management/Business_Anywhere in India": [
        { name: 'Xavier Institute Mumbai', location: 'Mumbai', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'Amity Business School', location: 'Noida', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Lovely Professional University', location: 'Phagwara', fees: '1.8 Lakhs', hasHostel: true },
        { name: 'BML Munjal University', location: 'Gurgaon', fees: '2.0 Lakhs', hasHostel: true }
    ],
    "Science_75–90%_Arts/Humanities_Home State": [
        { name: 'Jamia Millia Islamia', location: 'Delhi', fees: '0.3 Lakhs', hasHostel: true },
        { name: 'St. Xavier’s Mumbai', location: 'Mumbai', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Presidency University Kolkata', location: 'Kolkata', fees: '0.4 Lakhs', hasHostel: true },
        { name: 'Christ University', location: 'Bangalore', fees: '1.0 Lakhs', hasHostel: true }
    ],
    "Science_75–90%_Arts/Humanities_Metro Cities": [
        { name: 'Jamia Millia Islamia', location: 'Delhi', fees: '0.3 Lakhs', hasHostel: true },
        { name: 'St. Xavier’s Mumbai', location: 'Mumbai', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Presidency University Kolkata', location: 'Kolkata', fees: '0.4 Lakhs', hasHostel: true },
        { name: 'Christ University', location: 'Bangalore', fees: '1.0 Lakhs', hasHostel: true }
    ],
    "Science_75–90%_Arts/Humanities_Anywhere in India": [
        { name: 'Jamia Millia Islamia', location: 'Delhi', fees: '0.3 Lakhs', hasHostel: true },
        { name: 'St. Xavier’s Mumbai', location: 'Mumbai', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Presidency University Kolkata', location: 'Kolkata', fees: '0.4 Lakhs', hasHostel: true },
        { name: 'Christ University', location: 'Bangalore', fees: '1.0 Lakhs', hasHostel: true }
    ],
    "Science_90%+_Engineering/Technology_Home State": [
        { name: 'IIT Delhi', location: 'Delhi', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'IIT Bombay', location: 'Mumbai', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'NIT Trichy', location: 'Trichy', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'IIIT Hyderabad', location: 'Hyderabad', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Science_90%+_Engineering/Technology_Metro Cities": [
        { name: 'IIT Delhi', location: 'Delhi', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'IIT Bombay', location: 'Mumbai', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'NIT Trichy', location: 'Trichy', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'IIIT Hyderabad', location: 'Hyderabad', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Science_90%+_Engineering/Technology_Anywhere in India": [
        { name: 'IIT Delhi', location: 'Delhi', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'IIT Bombay', location: 'Mumbai', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'NIT Trichy', location: 'Trichy', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'IIIT Hyderabad', location: 'Hyderabad', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Science_90%+_Medical/Healthcare_Home State": [
        { name: 'AIIMS Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'CMC Vellore', location: 'Vellore', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'JIPMER Puducherry', location: 'Puducherry', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'KMC Manipal', location: 'Manipal', fees: '0.8 Lakhs', hasHostel: true }
    ],
    "Science_90%+_Medical/Healthcare_Metro Cities": [
        { name: 'AIIMS Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'CMC Vellore', location: 'Vellore', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'JIPMER Puducherry', location: 'Puducherry', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'KMC Manipal', location: 'Manipal', fees: '0.8 Lakhs', hasHostel: true }
    ],
    "Science_90%+_Medical/Healthcare_Anywhere in India": [
        { name: 'AIIMS Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'CMC Vellore', location: 'Vellore', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'JIPMER Puducherry', location: 'Puducherry', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'KMC Manipal', location: 'Manipal', fees: '0.8 Lakhs', hasHostel: true }
    ],
    "Science_90%+_Management/Business_Home State": [
        { name: 'IIM Indore (IPM)', location: 'Indore', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'NMIMS Mumbai', location: 'Mumbai', fees: '5.5 Lakhs', hasHostel: true },
        { name: 'Christ University Bangalore', location: 'Bangalore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Symbiosis Pune', location: 'Pune', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Science_90%+_Management/Business_Metro Cities": [
        { name: 'IIM Indore (IPM)', location: 'Indore', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'NMIMS Mumbai', location: 'Mumbai', fees: '5.5 Lakhs', hasHostel: true },
        { name: 'Christ University Bangalore', location: 'Bangalore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Symbiosis Pune', location: 'Pune', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Science_90%+_Management/Business_Anywhere in India": [
        { name: 'IIM Indore (IPM)', location: 'Indore', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'NMIMS Mumbai', location: 'Mumbai', fees: '5.5 Lakhs', hasHostel: true },
        { name: 'Christ University Bangalore', location: 'Bangalore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Symbiosis Pune', location: 'Pune', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Science_90%+_Arts/Humanities_Home State": [
        { name: 'Delhi University', location: 'Delhi', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'JNU Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'Ashoka University', location: 'Sonipat', fees: '9.0 Lakhs', hasHostel: true },
        { name: 'BHU Varanasi', location: 'Varanasi', fees: '0.3 Lakhs', hasHostel: true }
    ],
    "Science_90%+_Arts/Humanities_Metro Cities": [
        { name: 'Delhi University', location: 'Delhi', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'JNU Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'Ashoka University', location: 'Sonipat', fees: '9.0 Lakhs', hasHostel: true },
        { name: 'BHU Varanasi', location: 'Varanasi', fees: '0.3 Lakhs', hasHostel: true }
    ],
    "Science_90%+_Arts/Humanities_Anywhere in India": [
        { name: 'Delhi University', location: 'Delhi', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'JNU Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'Ashoka University', location: 'Sonipat', fees: '9.0 Lakhs', hasHostel: true },
        { name: 'BHU Varanasi', location: 'Varanasi', fees: '0.3 Lakhs', hasHostel: true }
    ],
    "Commerce_60–75%_Engineering/Technology_Home State": [
        { name: 'Amity University Noida', location: 'Noida', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'LPU Punjab', location: 'Phagwara', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Chandigarh University', location: 'Chandigarh', fees: '2.0 Lakhs', hasHostel: true },
        { name: 'Graphic Era University', location: 'Dehradun', fees: '1.8 Lakhs', hasHostel: true }
    ],
    "Commerce_60–75%_Engineering/Technology_Metro Cities": [
        { name: 'Amity University Noida', location: 'Noida', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'LPU Punjab', location: 'Phagwara', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Chandigarh University', location: 'Chandigarh', fees: '2.0 Lakhs', hasHostel: true },
        { name: 'Graphic Era University', location: 'Dehradun', fees: '1.8 Lakhs', hasHostel: true }
    ],
    "Commerce_60–75%_Engineering/Technology_Anywhere in India": [
        { name: 'Amity University Noida', location: 'Noida', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'LPU Punjab', location: 'Phagwara', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Chandigarh University', location: 'Chandigarh', fees: '2.0 Lakhs', hasHostel: true },
        { name: 'Graphic Era University', location: 'Dehradun', fees: '1.8 Lakhs', hasHostel: true }
    ],
    "Commerce_60–75%_Medical/Healthcare_Home State": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Private State Medical College', location: 'Local', fees: '5.0 Lakhs', hasHostel: true },
        { name: 'Sri Ramachandra Chennai', location: 'Chennai', fees: '6.0 Lakhs', hasHostel: true },
        { name: 'DY Patil Navi Mumbai', location: 'Navi Mumbai', fees: '5.5 Lakhs', hasHostel: true }
    ],
    "Commerce_60–75%_Medical/Healthcare_Metro Cities": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Private State Medical College', location: 'Local', fees: '5.0 Lakhs', hasHostel: true },
        { name: 'Sri Ramachandra Chennai', location: 'Chennai', fees: '6.0 Lakhs', hasHostel: true },
        { name: 'DY Patil Navi Mumbai', location: 'Navi Mumbai', fees: '5.5 Lakhs', hasHostel: true }
    ],
    "Commerce_60–75%_Medical/Healthcare_Anywhere in India": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Private State Medical College', location: 'Local', fees: '5.0 Lakhs', hasHostel: true },
        { name: 'Sri Ramachandra Chennai', location: 'Chennai', fees: '6.0 Lakhs', hasHostel: true },
        { name: 'DY Patil Navi Mumbai', location: 'Navi Mumbai', fees: '5.5 Lakhs', hasHostel: true }
    ],
    "Commerce_60–75%_Management/Business_Home State": [
        { name: 'ICFAI Hyderabad', location: 'Hyderabad', fees: '3.5 Lakhs', hasHostel: true },
        { name: 'Jaipuria Institute of Management', location: 'Lucknow', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'UPES Dehradun', location: 'Dehradun', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Alliance University', location: 'Bangalore', fees: '3.2 Lakhs', hasHostel: true }
    ],
    "Commerce_60–75%_Management/Business_Metro Cities": [
        { name: 'ICFAI Hyderabad', location: 'Hyderabad', fees: '3.5 Lakhs', hasHostel: true },
        { name: 'Jaipuria Institute of Management', location: 'Lucknow', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'UPES Dehradun', location: 'Dehradun', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Alliance University', location: 'Bangalore', fees: '3.2 Lakhs', hasHostel: true }
    ],
    "Commerce_60–75%_Management/Business_Anywhere in India": [
        { name: 'ICFAI Hyderabad', location: 'Hyderabad', fees: '3.5 Lakhs', hasHostel: true },
        { name: 'Jaipuria Institute of Management', location: 'Lucknow', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'UPES Dehradun', location: 'Dehradun', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Alliance University', location: 'Bangalore', fees: '3.2 Lakhs', hasHostel: true }
    ],
    "Commerce_60–75%_Arts/Humanities_Home State": [
        { name: 'Panjab University', location: 'Chandigarh', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Fergusson College Pune', location: 'Pune', fees: '0.3 Lakhs', hasHostel: false },
        { name: 'Loyola College Chennai', location: 'Chennai', fees: '0.4 Lakhs', hasHostel: false },
        { name: 'Miranda House DU', location: 'Delhi', fees: '0.6 Lakhs', hasHostel: true }
    ],
    "Commerce_60–75%_Arts/Humanities_Metro Cities": [
        { name: 'Panjab University', location: 'Chandigarh', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Fergusson College Pune', location: 'Pune', fees: '0.3 Lakhs', hasHostel: false },
        { name: 'Loyola College Chennai', location: 'Chennai', fees: '0.4 Lakhs', hasHostel: false },
        { name: 'Miranda House DU', location: 'Delhi', fees: '0.6 Lakhs', hasHostel: true }
    ],
    "Commerce_60–75%_Arts/Humanities_Anywhere in India": [
        { name: 'Panjab University', location: 'Chandigarh', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Fergusson College Pune', location: 'Pune', fees: '0.3 Lakhs', hasHostel: false },
        { name: 'Loyola College Chennai', location: 'Chennai', fees: '0.4 Lakhs', hasHostel: false },
        { name: 'Miranda House DU', location: 'Delhi', fees: '0.6 Lakhs', hasHostel: true }
    ],
    "Commerce_75–90%_Engineering/Technology_Home State": [
        { name: 'VIT Vellore', location: 'Vellore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'SRM Chennai', location: 'Chennai', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Manipal Institute of Technology', location: 'Manipal', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'PES University', location: 'Bangalore', fees: '2.2 Lakhs', hasHostel: true }
    ],
    "Commerce_75–90%_Engineering/Technology_Metro Cities": [
        { name: 'VIT Vellore', location: 'Vellore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'SRM Chennai', location: 'Chennai', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Manipal Institute of Technology', location: 'Manipal', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'PES University', location: 'Bangalore', fees: '2.2 Lakhs', hasHostel: true }
    ],
    "Commerce_75–90%_Engineering/Technology_Anywhere in India": [
        { name: 'VIT Vellore', location: 'Vellore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'SRM Chennai', location: 'Chennai', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Manipal Institute of Technology', location: 'Manipal', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'PES University', location: 'Bangalore', fees: '2.2 Lakhs', hasHostel: true }
    ],
    "Commerce_75–90%_Medical/Healthcare_Home State": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Grant Medical College Mumbai', location: 'Mumbai', fees: '0.7 Lakhs', hasHostel: true },
        { name: 'BJ Medical Pune', location: 'Pune', fees: '0.9 Lakhs', hasHostel: true },
        { name: 'St. John’s Bangalore', location: 'Bangalore', fees: '1.2 Lakhs', hasHostel: true }
    ],
    "Commerce_75–90%_Medical/Healthcare_Metro Cities": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Grant Medical College Mumbai', location: 'Mumbai', fees: '0.7 Lakhs', hasHostel: true },
        { name: 'BJ Medical Pune', location: 'Pune', fees: '0.9 Lakhs', hasHostel: true },
        { name: 'St. John’s Bangalore', location: 'Bangalore', fees: '1.2 Lakhs', hasHostel: true }
    ],
    "Commerce_75–90%_Medical/Healthcare_Anywhere in India": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Grant Medical College Mumbai', location: 'Mumbai', fees: '0.7 Lakhs', hasHostel: true },
        { name: 'BJ Medical Pune', location: 'Pune', fees: '0.9 Lakhs', hasHostel: true },
        { name: 'St. John’s Bangalore', location: 'Bangalore', fees: '1.2 Lakhs', hasHostel: true }
    ],
    "Commerce_75–90%_Management/Business_Home State": [
        { name: 'Xavier Institute Mumbai', location: 'Mumbai', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'Amity Business School', location: 'Noida', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Lovely Professional University', location: 'Phagwara', fees: '1.8 Lakhs', hasHostel: true },
        { name: 'BML Munjal University', location: 'Gurgaon', fees: '2.0 Lakhs', hasHostel: true }
    ],
    "Commerce_75–90%_Management/Business_Metro Cities": [
        { name: 'Xavier Institute Mumbai', location: 'Mumbai', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'Amity Business School', location: 'Noida', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Lovely Professional University', location: 'Phagwara', fees: '1.8 Lakhs', hasHostel: true },
        { name: 'BML Munjal University', location: 'Gurgaon', fees: '2.0 Lakhs', hasHostel: true }
    ],
    "Commerce_75–90%_Management/Business_Anywhere in India": [
        { name: 'Xavier Institute Mumbai', location: 'Mumbai', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'Amity Business School', location: 'Noida', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Lovely Professional University', location: 'Phagwara', fees: '1.8 Lakhs', hasHostel: true },
        { name: 'BML Munjal University', location: 'Gurgaon', fees: '2.0 Lakhs', hasHostel: true }
    ],
    "Commerce_75–90%_Arts/Humanities_Home State": [
        { name: 'Jamia Millia Islamia', location: 'Delhi', fees: '0.3 Lakhs', hasHostel: true },
        { name: 'St. Xavier’s Mumbai', location: 'Mumbai', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Presidency University Kolkata', location: 'Kolkata', fees: '0.4 Lakhs', hasHostel: true },
        { name: 'Christ University', location: 'Bangalore', fees: '1.0 Lakhs', hasHostel: true }
    ],
    "Commerce_75–90%_Arts/Humanities_Metro Cities": [
        { name: 'Jamia Millia Islamia', location: 'Delhi', fees: '0.3 Lakhs', hasHostel: true },
        { name: 'St. Xavier’s Mumbai', location: 'Mumbai', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Presidency University Kolkata', location: 'Kolkata', fees: '0.4 Lakhs', hasHostel: true },
        { name: 'Christ University', location: 'Bangalore', fees: '1.0 Lakhs', hasHostel: true }
    ],
    "Commerce_75–90%_Arts/Humanities_Anywhere in India": [
        { name: 'Jamia Millia Islamia', location: 'Delhi', fees: '0.3 Lakhs', hasHostel: true },
        { name: 'St. Xavier’s Mumbai', location: 'Mumbai', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Presidency University Kolkata', location: 'Kolkata', fees: '0.4 Lakhs', hasHostel: true },
        { name: 'Christ University', location: 'Bangalore', fees: '1.0 Lakhs', hasHostel: true }
    ],
    "Commerce_90%+_Engineering/Technology_Home State": [
        { name: 'IIT Delhi', location: 'Delhi', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'IIT Bombay', location: 'Mumbai', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'NIT Trichy', location: 'Trichy', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'IIIT Hyderabad', location: 'Hyderabad', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Commerce_90%+_Engineering/Technology_Metro Cities": [
        { name: 'IIT Delhi', location: 'Delhi', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'IIT Bombay', location: 'Mumbai', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'NIT Trichy', location: 'Trichy', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'IIIT Hyderabad', location: 'Hyderabad', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Commerce_90%+_Engineering/Technology_Anywhere in India": [
        { name: 'IIT Delhi', location: 'Delhi', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'IIT Bombay', location: 'Mumbai', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'NIT Trichy', location: 'Trichy', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'IIIT Hyderabad', location: 'Hyderabad', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Commerce_90%+_Medical/Healthcare_Home State": [
        { name: 'AIIMS Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'CMC Vellore', location: 'Vellore', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'JIPMER Puducherry', location: 'Puducherry', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'KMC Manipal', location: 'Manipal', fees: '0.8 Lakhs', hasHostel: true }
    ],
    "Commerce_90%+_Medical/Healthcare_Metro Cities": [
        { name: 'AIIMS Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'CMC Vellore', location: 'Vellore', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'JIPMER Puducherry', location: 'Puducherry', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'KMC Manipal', location: 'Manipal', fees: '0.8 Lakhs', hasHostel: true }
    ],
    "Commerce_90%+_Medical/Healthcare_Anywhere in India": [
        { name: 'AIIMS Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'CMC Vellore', location: 'Vellore', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'JIPMER Puducherry', location: 'Puducherry', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'KMC Manipal', location: 'Manipal', fees: '0.8 Lakhs', hasHostel: true }
    ],
    "Commerce_90%+_Management/Business_Home State": [
        { name: 'IIM Indore (IPM)', location: 'Indore', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'NMIMS Mumbai', location: 'Mumbai', fees: '5.5 Lakhs', hasHostel: true },
        { name: 'Christ University Bangalore', location: 'Bangalore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Symbiosis Pune', location: 'Pune', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Commerce_90%+_Management/Business_Metro Cities": [
        { name: 'IIM Indore (IPM)', location: 'Indore', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'NMIMS Mumbai', location: 'Mumbai', fees: '5.5 Lakhs', hasHostel: true },
        { name: 'Christ University Bangalore', location: 'Bangalore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Symbiosis Pune', location: 'Pune', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Commerce_90%+_Management/Business_Anywhere in India": [
        { name: 'IIM Indore (IPM)', location: 'Indore', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'NMIMS Mumbai', location: 'Mumbai', fees: '5.5 Lakhs', hasHostel: true },
        { name: 'Christ University Bangalore', location: 'Bangalore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Symbiosis Pune', location: 'Pune', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Commerce_90%+_Arts/Humanities_Home State": [
        { name: 'Delhi University', location: 'Delhi', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'JNU Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'Ashoka University', location: 'Sonipat', fees: '9.0 Lakhs', hasHostel: true },
        { name: 'BHU Varanasi', location: 'Varanasi', fees: '0.3 Lakhs', hasHostel: true }
    ],
    "Commerce_90%+_Arts/Humanities_Metro Cities": [
        { name: 'Delhi University', location: 'Delhi', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'JNU Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'Ashoka University', location: 'Sonipat', fees: '9.0 Lakhs', hasHostel: true },
        { name: 'BHU Varanasi', location: 'Varanasi', fees: '0.3 Lakhs', hasHostel: true }
    ],
    "Commerce_90%+_Arts/Humanities_Anywhere in India": [
        { name: 'Delhi University', location: 'Delhi', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'JNU Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'Ashoka University', location: 'Sonipat', fees: '9.0 Lakhs', hasHostel: true },
        { name: 'BHU Varanasi', location: 'Varanasi', fees: '0.3 Lakhs', hasHostel: true }
    ],
    "Arts_60–75%_Engineering/Technology_Home State": [
        { name: 'Amity University Noida', location: 'Noida', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'LPU Punjab', location: 'Phagwara', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Chandigarh University', location: 'Chandigarh', fees: '2.0 Lakhs', hasHostel: true },
        { name: 'Graphic Era University', location: 'Dehradun', fees: '1.8 Lakhs', hasHostel: true }
    ],
    "Arts_60–75%_Engineering/Technology_Metro Cities": [
        { name: 'Amity University Noida', location: 'Noida', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'LPU Punjab', location: 'Phagwara', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Chandigarh University', location: 'Chandigarh', fees: '2.0 Lakhs', hasHostel: true },
        { name: 'Graphic Era University', location: 'Dehradun', fees: '1.8 Lakhs', hasHostel: true }
    ],
    "Arts_60–75%_Engineering/Technology_Anywhere in India": [
        { name: 'Amity University Noida', location: 'Noida', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'LPU Punjab', location: 'Phagwara', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Chandigarh University', location: 'Chandigarh', fees: '2.0 Lakhs', hasHostel: true },
        { name: 'Graphic Era University', location: 'Dehradun', fees: '1.8 Lakhs', hasHostel: true }
    ],
    "Arts_60–75%_Medical/Healthcare_Home State": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Private State Medical College', location: 'Local', fees: '5.0 Lakhs', hasHostel: true },
        { name: 'Sri Ramachandra Chennai', location: 'Chennai', fees: '6.0 Lakhs', hasHostel: true },
        { name: 'DY Patil Navi Mumbai', location: 'Navi Mumbai', fees: '5.5 Lakhs', hasHostel: true }
    ],
    "Arts_60–75%_Medical/Healthcare_Metro Cities": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Private State Medical College', location: 'Local', fees: '5.0 Lakhs', hasHostel: true },
        { name: 'Sri Ramachandra Chennai', location: 'Chennai', fees: '6.0 Lakhs', hasHostel: true },
        { name: 'DY Patil Navi Mumbai', location: 'Navi Mumbai', fees: '5.5 Lakhs', hasHostel: true }
    ],
    "Arts_60–75%_Medical/Healthcare_Anywhere in India": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Private State Medical College', location: 'Local', fees: '5.0 Lakhs', hasHostel: true },
        { name: 'Sri Ramachandra Chennai', location: 'Chennai', fees: '6.0 Lakhs', hasHostel: true },
        { name: 'DY Patil Navi Mumbai', location: 'Navi Mumbai', fees: '5.5 Lakhs', hasHostel: true }
    ],
    "Arts_60–75%_Management/Business_Home State": [
        { name: 'ICFAI Hyderabad', location: 'Hyderabad', fees: '3.5 Lakhs', hasHostel: true },
        { name: 'Jaipuria Institute of Management', location: 'Lucknow', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'UPES Dehradun', location: 'Dehradun', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Alliance University', location: 'Bangalore', fees: '3.2 Lakhs', hasHostel: true }
    ],
    "Arts_60–75%_Management/Business_Metro Cities": [
        { name: 'ICFAI Hyderabad', location: 'Hyderabad', fees: '3.5 Lakhs', hasHostel: true },
        { name: 'Jaipuria Institute of Management', location: 'Lucknow', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'UPES Dehradun', location: 'Dehradun', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Alliance University', location: 'Bangalore', fees: '3.2 Lakhs', hasHostel: true }
    ],
    "Arts_60–75%_Management/Business_Anywhere in India": [
        { name: 'ICFAI Hyderabad', location: 'Hyderabad', fees: '3.5 Lakhs', hasHostel: true },
        { name: 'Jaipuria Institute of Management', location: 'Lucknow', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'UPES Dehradun', location: 'Dehradun', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Alliance University', location: 'Bangalore', fees: '3.2 Lakhs', hasHostel: true }
    ],
    "Arts_60–75%_Arts/Humanities_Home State": [
        { name: 'Panjab University', location: 'Chandigarh', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Fergusson College Pune', location: 'Pune', fees: '0.3 Lakhs', hasHostel: false },
        { name: 'Loyola College Chennai', location: 'Chennai', fees: '0.4 Lakhs', hasHostel: false },
        { name: 'Miranda House DU', location: 'Delhi', fees: '0.6 Lakhs', hasHostel: true }
    ],
    "Arts_60–75%_Arts/Humanities_Metro Cities": [
        { name: 'Panjab University', location: 'Chandigarh', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Fergusson College Pune', location: 'Pune', fees: '0.3 Lakhs', hasHostel: false },
        { name: 'Loyola College Chennai', location: 'Chennai', fees: '0.4 Lakhs', hasHostel: false },
        { name: 'Miranda House DU', location: 'Delhi', fees: '0.6 Lakhs', hasHostel: true }
    ],
    "Arts_60–75%_Arts/Humanities_Anywhere in India": [
        { name: 'Panjab University', location: 'Chandigarh', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Fergusson College Pune', location: 'Pune', fees: '0.3 Lakhs', hasHostel: false },
        { name: 'Loyola College Chennai', location: 'Chennai', fees: '0.4 Lakhs', hasHostel: false },
        { name: 'Miranda House DU', location: 'Delhi', fees: '0.6 Lakhs', hasHostel: true }
    ],
    "Arts_75–90%_Engineering/Technology_Home State": [
        { name: 'VIT Vellore', location: 'Vellore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'SRM Chennai', location: 'Chennai', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Manipal Institute of Technology', location: 'Manipal', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'PES University', location: 'Bangalore', fees: '2.2 Lakhs', hasHostel: true }
    ],
    "Arts_75–90%_Engineering/Technology_Metro Cities": [
        { name: 'VIT Vellore', location: 'Vellore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'SRM Chennai', location: 'Chennai', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Manipal Institute of Technology', location: 'Manipal', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'PES University', location: 'Bangalore', fees: '2.2 Lakhs', hasHostel: true }
    ],
    "Arts_75–90%_Engineering/Technology_Anywhere in India": [
        { name: 'VIT Vellore', location: 'Vellore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'SRM Chennai', location: 'Chennai', fees: '2.8 Lakhs', hasHostel: true },
        { name: 'Manipal Institute of Technology', location: 'Manipal', fees: '3.0 Lakhs', hasHostel: true },
        { name: 'PES University', location: 'Bangalore', fees: '2.2 Lakhs', hasHostel: true }
    ],
    "Arts_75–90%_Medical/Healthcare_Home State": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Grant Medical College Mumbai', location: 'Mumbai', fees: '0.7 Lakhs', hasHostel: true },
        { name: 'BJ Medical Pune', location: 'Pune', fees: '0.9 Lakhs', hasHostel: true },
        { name: 'St. John’s Bangalore', location: 'Bangalore', fees: '1.2 Lakhs', hasHostel: true }
    ],
    "Arts_75–90%_Medical/Healthcare_Metro Cities": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Grant Medical College Mumbai', location: 'Mumbai', fees: '0.7 Lakhs', hasHostel: true },
        { name: 'BJ Medical Pune', location: 'Pune', fees: '0.9 Lakhs', hasHostel: true },
        { name: 'St. John’s Bangalore', location: 'Bangalore', fees: '1.2 Lakhs', hasHostel: true }
    ],
    "Arts_75–90%_Medical/Healthcare_Anywhere in India": [
        { name: 'Maulana Azad Medical College', location: 'Delhi', fees: '0.8 Lakhs', hasHostel: true },
        { name: 'Grant Medical College Mumbai', location: 'Mumbai', fees: '0.7 Lakhs', hasHostel: true },
        { name: 'BJ Medical Pune', location: 'Pune', fees: '0.9 Lakhs', hasHostel: true },
        { name: 'St. John’s Bangalore', location: 'Bangalore', fees: '1.2 Lakhs', hasHostel: true }
    ],
    "Arts_75–90%_Management/Business_Home State": [
        { name: 'Xavier Institute Mumbai', location: 'Mumbai', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'Amity Business School', location: 'Noida', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Lovely Professional University', location: 'Phagwara', fees: '1.8 Lakhs', hasHostel: true },
        { name: 'BML Munjal University', location: 'Gurgaon', fees: '2.0 Lakhs', hasHostel: true }
    ],
    "Arts_75–90%_Management/Business_Metro Cities": [
        { name: 'Xavier Institute Mumbai', location: 'Mumbai', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'Amity Business School', location: 'Noida', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Lovely Professional University', location: 'Phagwara', fees: '1.8 Lakhs', hasHostel: true },
        { name: 'BML Munjal University', location: 'Gurgaon', fees: '2.0 Lakhs', hasHostel: true }
    ],
    "Arts_75–90%_Management/Business_Anywhere in India": [
        { name: 'Xavier Institute Mumbai', location: 'Mumbai', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'Amity Business School', location: 'Noida', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Lovely Professional University', location: 'Phagwara', fees: '1.8 Lakhs', hasHostel: true },
        { name: 'BML Munjal University', location: 'Gurgaon', fees: '2.0 Lakhs', hasHostel: true }
    ],
    "Arts_75–90%_Arts/Humanities_Home State": [
        { name: 'Jamia Millia Islamia', location: 'Delhi', fees: '0.3 Lakhs', hasHostel: true },
        { name: 'St. Xavier’s Mumbai', location: 'Mumbai', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Presidency University Kolkata', location: 'Kolkata', fees: '0.4 Lakhs', hasHostel: true },
        { name: 'Christ University', location: 'Bangalore', fees: '1.0 Lakhs', hasHostel: true }
    ],
    "Arts_75–90%_Arts/Humanities_Metro Cities": [
        { name: 'Jamia Millia Islamia', location: 'Delhi', fees: '0.3 Lakhs', hasHostel: true },
        { name: 'St. Xavier’s Mumbai', location: 'Mumbai', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Presidency University Kolkata', location: 'Kolkata', fees: '0.4 Lakhs', hasHostel: true },
        { name: 'Christ University', location: 'Bangalore', fees: '1.0 Lakhs', hasHostel: true }
    ],
    "Arts_75–90%_Arts/Humanities_Anywhere in India": [
        { name: 'Jamia Millia Islamia', location: 'Delhi', fees: '0.3 Lakhs', hasHostel: true },
        { name: 'St. Xavier’s Mumbai', location: 'Mumbai', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'Presidency University Kolkata', location: 'Kolkata', fees: '0.4 Lakhs', hasHostel: true },
        { name: 'Christ University', location: 'Bangalore', fees: '1.0 Lakhs', hasHostel: true }
    ],
    "Arts_90%+_Engineering/Technology_Home State": [
        { name: 'IIT Delhi', location: 'Delhi', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'IIT Bombay', location: 'Mumbai', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'NIT Trichy', location: 'Trichy', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'IIIT Hyderabad', location: 'Hyderabad', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Arts_90%+_Engineering/Technology_Metro Cities": [
        { name: 'IIT Delhi', location: 'Delhi', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'IIT Bombay', location: 'Mumbai', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'NIT Trichy', location: 'Trichy', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'IIIT Hyderabad', location: 'Hyderabad', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Arts_90%+_Engineering/Technology_Anywhere in India": [
        { name: 'IIT Delhi', location: 'Delhi', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'IIT Bombay', location: 'Mumbai', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'NIT Trichy', location: 'Trichy', fees: '1.5 Lakhs', hasHostel: true },
        { name: 'IIIT Hyderabad', location: 'Hyderabad', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Arts_90%+_Medical/Healthcare_Home State": [
        { name: 'AIIMS Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'CMC Vellore', location: 'Vellore', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'JIPMER Puducherry', location: 'Puducherry', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'KMC Manipal', location: 'Manipal', fees: '0.8 Lakhs', hasHostel: true }
    ],
    "Arts_90%+_Medical/Healthcare_Metro Cities": [
        { name: 'AIIMS Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'CMC Vellore', location: 'Vellore', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'JIPMER Puducherry', location: 'Puducherry', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'KMC Manipal', location: 'Manipal', fees: '0.8 Lakhs', hasHostel: true }
    ],
    "Arts_90%+_Medical/Healthcare_Anywhere in India": [
        { name: 'AIIMS Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'CMC Vellore', location: 'Vellore', fees: '0.5 Lakhs', hasHostel: true },
        { name: 'JIPMER Puducherry', location: 'Puducherry', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'KMC Manipal', location: 'Manipal', fees: '0.8 Lakhs', hasHostel: true }
    ],
    "Arts_90%+_Management/Business_Home State": [
        { name: 'IIM Indore (IPM)', location: 'Indore', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'NMIMS Mumbai', location: 'Mumbai', fees: '5.5 Lakhs', hasHostel: true },
        { name: 'Christ University Bangalore', location: 'Bangalore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Symbiosis Pune', location: 'Pune', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Arts_90%+_Management/Business_Metro Cities": [
        { name: 'IIM Indore (IPM)', location: 'Indore', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'NMIMS Mumbai', location: 'Mumbai', fees: '5.5 Lakhs', hasHostel: true },
        { name: 'Christ University Bangalore', location: 'Bangalore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Symbiosis Pune', location: 'Pune', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Arts_90%+_Management/Business_Anywhere in India": [
        { name: 'IIM Indore (IPM)', location: 'Indore', fees: '4.0 Lakhs', hasHostel: true },
        { name: 'NMIMS Mumbai', location: 'Mumbai', fees: '5.5 Lakhs', hasHostel: true },
        { name: 'Christ University Bangalore', location: 'Bangalore', fees: '2.5 Lakhs', hasHostel: true },
        { name: 'Symbiosis Pune', location: 'Pune', fees: '3.0 Lakhs', hasHostel: true }
    ],
    "Arts_90%+_Arts/Humanities_Home State": [
        { name: 'Delhi University', location: 'Delhi', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'JNU Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'Ashoka University', location: 'Sonipat', fees: '9.0 Lakhs', hasHostel: true },
        { name: 'BHU Varanasi', location: 'Varanasi', fees: '0.3 Lakhs', hasHostel: true }
    ],
    "Arts_90%+_Arts/Humanities_Metro Cities": [
        { name: 'Delhi University', location: 'Delhi', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'JNU Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'Ashoka University', location: 'Sonipat', fees: '9.0 Lakhs', hasHostel: true },
        { name: 'BHU Varanasi', location: 'Varanasi', fees: '0.3 Lakhs', hasHostel: true }
    ],
    "Arts_90%+_Arts/Humanities_Anywhere in India": [
        { name: 'Delhi University', location: 'Delhi', fees: '0.1 Lakhs', hasHostel: true },
        { name: 'JNU Delhi', location: 'Delhi', fees: '0.2 Lakhs', hasHostel: true },
        { name: 'Ashoka University', location: 'Sonipat', fees: '9.0 Lakhs', hasHostel: true },
        { name: 'BHU Varanasi', location: 'Varanasi', fees: '0.3 Lakhs', hasHostel: true }
    ],
};

const quizQuestions = [
    {
        question: "Which stream are you from?",
        name: "stream",
        options: ["Science", "Commerce", "Arts"]
    },
    {
        question: "What is your 10th / 12th percentage range?",
        name: "marksRange",
        options: ["60–75%", "75–90%", "90%+"]
    },
    {
        question: "Which field excites you the most?",
        name: "careerField",
        options: ["Engineering/Technology", "Medical/Healthcare", "Management/Business", "Arts/Humanities"]
    },
    {
        question: "Where do you prefer to study?",
        name: "locationPreference",
        options: ["Home State", "Metro Cities", "Anywhere in India"]
    }
];

const introSection = document.getElementById('intro-section');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const startQuizBtn = document.getElementById('start-quiz-btn');
const uploadMarksheetBtn = document.getElementById('upload-marksheet-btn');
const marksheetUploadInput = document.getElementById('marksheet-upload');
const quizContainer = document.getElementById('quiz-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const collegeContainer = document.getElementById('college-container');

let currentQuizIndex = 0;
let userQuizAnswers = {};

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active-step'));
    document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden-step'));
    document.getElementById(sectionId).classList.remove('hidden-step');
    document.getElementById(sectionId).classList.add('active-step');
}

function renderQuizQuestion() {
    prevBtn.classList.toggle('hidden', currentQuizIndex === 0);
    nextBtn.classList.toggle('hidden', currentQuizIndex === quizQuestions.length - 1);
    submitBtn.classList.toggle('hidden', currentQuizIndex !== quizQuestions.length - 1);

    const currentQuestion = quizQuestions[currentQuizIndex];
    const questionCard = document.createElement('div');
    questionCard.className = 'question-card';
    questionCard.innerHTML = `
        <h3>${currentQuestion.question}</h3>
        <div class="option-group">
            ${currentQuestion.options.map(option => `
                <label>
                    <input type="radio" name="${currentQuestion.name}" value="${option}">
                    <span>${option}</span>
                </label>
            `).join('')}
        </div>
    `;

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionCard);

    const savedAnswer = userQuizAnswers[currentQuestion.name];
    if (savedAnswer) {
        document.querySelector(`input[name="${currentQuestion.name}"][value="${savedAnswer}"]`).checked = true;
    }
}

function displayColleges(collegesToDisplay) {
    collegeContainer.innerHTML = '';
    if (collegesToDisplay.length === 0) {
        collegeContainer.innerHTML = '<p class="loading-message">No colleges found for this combination. Try a different set of answers!</p>';
    } else {
        collegesToDisplay.forEach(college => {
            const collegeCard = document.createElement('div');
            collegeCard.className = 'college-card';
            collegeCard.innerHTML = `
                <h3>${college.name}</h3>
                <p><strong>Location:</strong> ${college.location}</p>
                <p><strong>Fees:</strong> ${college.fees}</p>
                <p><strong>Hostel:</strong> ${college.hasHostel ? 'Yes' : 'No'}</p>
            `;
            collegeContainer.appendChild(collegeCard);
        });
    }
}

function filterColleges() {
    const answers = userQuizAnswers;
    const key = `${answers.stream}_${answers.marksRange}_${answers.careerField}_${answers.locationPreference}`;
    let colleges = collegeMapping[key] || [];

    // Filter by city if "Home State" is selected
    if (answers.locationPreference === "Home State") {
        const homeCity = 'Delhi'; // Assuming 'Delhi' is the home city for this demo
        colleges = colleges.filter(college => college.location === homeCity);
    }
    
    displayColleges(colleges);
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('intro-section');
});

startQuizBtn.addEventListener('click', () => {
    showSection('quiz-section');
    renderQuizQuestion();
});

uploadMarksheetBtn.addEventListener('click', () => {
    marksheetUploadInput.click();
});

marksheetUploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        alert(`File "${file.name}" uploaded successfully! Now performing AI analysis...`);
        userQuizAnswers = {
            stream: "Science",
            marksRange: "75–90%",
            careerField: "Engineering/Technology",
            locationPreference: "Metro Cities"
        };
        showSection('results-section');
        filterColleges();
    }
});

nextBtn.addEventListener('click', () => {
    const currentQuestionName = quizQuestions[currentQuizIndex].name;
    const selectedOption = document.querySelector(`input[name="${currentQuestionName}"]:checked`);
    if (selectedOption) {
        userQuizAnswers[currentQuestionName] = selectedOption.value;
        currentQuizIndex++;
        renderQuizQuestion();
    } else {
        alert("Please select an option to continue.");
    }
});

prevBtn.addEventListener('click', () => {
    currentQuizIndex--;
    renderQuizQuestion();
});

submitBtn.addEventListener('click', () => {
    const currentQuestionName = quizQuestions[currentQuizIndex].name;
    const selectedOption = document.querySelector(`input[name="${currentQuestionName}"]:checked`);
    if (selectedOption) {
        userQuizAnswers[currentQuestionName] = selectedOption.value;
        showSection('results-section');
        filterColleges();
    } else {
        alert("Please select an option to submit.");
    }
});