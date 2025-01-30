const USERS = [
  {
    "name": "Aarav Sharma",
    "city": "Delhi",
    "age": 28,
    "avatar": "https://i.pravatar.cc/150?img=1"
  },
  {
    "name": "Aanya Kapoor",
    "city": "Mumbai",
    "age": 34,
    "avatar": "https://i.pravatar.cc/150?img=2"
  },
  {
    "name": "Rohan Verma",
    "city": "Bengaluru",
    "age": 26,
    "avatar": "https://i.pravatar.cc/150?img=3"
  },
  {
    "name": "Priya Reddy",
    "city": "Chennai",
    "age": 30,
    "avatar": "https://i.pravatar.cc/150?img=4"
  },
  {
    "name": "Ishaan Patel",
    "city": "Ahmedabad",
    "age": 32,
    "avatar": "https://i.pravatar.cc/150?img=5"
  },
  {
    "name": "Nisha Gupta",
    "city": "Hyderabad",
    "age": 25,
    "avatar": "https://i.pravatar.cc/150?img=6"
  },
  {
    "name": "Karan Singh",
    "city": "Jaipur",
    "age": 29,
    "avatar": "https://i.pravatar.cc/150?img=7"
  },
  {
    "name": "Sanya Joshi",
    "city": "Kolkata",
    "age": 27,
    "avatar": "https://i.pravatar.cc/150?img=8"
  },
  {
    "name": "Vikram Mehta",
    "city": "Pune",
    "age": 33,
    "avatar": "https://i.pravatar.cc/150?img=9"
  },
  {
    "name": "Tanya Sharma",
    "city": "Surat",
    "age": 31,
    "avatar": "https://i.pravatar.cc/150?img=10"
  },
  {
    "name": "Devansh Patel",
    "city": "Vadodara",
    "age": 24,
    "avatar": "https://i.pravatar.cc/150?img=11"
  },
  {
    "name": "Simran Kaur",
    "city": "Lucknow",
    "age": 30,
    "avatar": "https://i.pravatar.cc/150?img=12"
  },
  {
    "name": "Amit Yadav",
    "city": "Kanpur",
    "age": 35,
    "avatar": "https://i.pravatar.cc/150?img=13"
  },
  {
    "name": "Ananya Rao",
    "city": "Nagpur",
    "age": 28,
    "avatar": "https://i.pravatar.cc/150?img=14"
  },
  {
    "name": "Ravi Mishra",
    "city": "Indore",
    "age": 33,
    "avatar": "https://i.pravatar.cc/150?img=15"
  },
  {
    "name": "Neha Bhatia",
    "city": "Bhopal",
    "age": 32,
    "avatar": "https://i.pravatar.cc/150?img=16"
  },
  {
    "name": "Arjun Kapoor",
    "city": "Chandigarh",
    "age": 29,
    "avatar": "https://i.pravatar.cc/150?img=17"
  },
  {
    "name": "Meera Das",
    "city": "Visakhapatnam",
    "age": 26,
    "avatar": "https://i.pravatar.cc/150?img=18"
  },
  {
    "name": "Harsh Sharma",
    "city": "Navi Mumbai",
    "age": 28,
    "avatar": "https://i.pravatar.cc/150?img=19"
  },
  {
    "name": "Sanya Malhotra",
    "city": "Patna",
    "age": 30,
    "avatar": "https://i.pravatar.cc/150?img=20"
  },
  {
    "name": "Akash Kumar",
    "city": "Agra",
    "age": 33,
    "avatar": "https://i.pravatar.cc/150?img=21"
  },
  {
    "name": "Anjali Desai",
    "city": "Coimbatore",
    "age": 27,
    "avatar": "https://i.pravatar.cc/150?img=22"
  },
  {
    "name": "Arvind Singh",
    "city": "Thane",
    "age": 34,
    "avatar": "https://i.pravatar.cc/150?img=23"
  },
  {
    "name": "Ritika Verma",
    "city": "Meerut",
    "age": 29,
    "avatar": "https://i.pravatar.cc/150?img=24"
  },
  {
    "name": "Siddharth Kumar",
    "city": "Raipur",
    "age": 31,
    "avatar": "https://i.pravatar.cc/150?img=25"
  },
  {
    "name": "Komal Yadav",
    "city": "Faridabad",
    "age": 30,
    "avatar": "https://i.pravatar.cc/150?img=26"
  },
  {
    "name": "Nikhil Choudhary",
    "city": "Agartala",
    "age": 28,
    "avatar": "https://i.pravatar.cc/150?img=27"
  },
  {
    "name": "Divya Sharma",
    "city": "Jalandhar",
    "age": 32,
    "avatar": "https://i.pravatar.cc/150?img=28"
  },
  {
    "name": "Vanshika Mehra",
    "city": "Rajkot",
    "age": 33,
    "avatar": "https://i.pravatar.cc/150?img=29"
  },
  {
    "name": "Amit Dubey",
    "city": "Siliguri",
    "age": 25,
    "avatar": "https://i.pravatar.cc/150?img=30"
  },
  {
    "name": "Gaurav Gupta",
    "city": "Kochi",
    "age": 32,
    "avatar": "https://i.pravatar.cc/150?img=31"
  },
  {
    "name": "Pooja Patil",
    "city": "Raigarh",
    "age": 29,
    "avatar": "https://i.pravatar.cc/150?img=32"
  },
  {
    "name": "Rishabh Tiwari",
    "city": "Shimla",
    "age": 27,
    "avatar": "https://i.pravatar.cc/150?img=33"
  },
  {
    "name": "Meghna Bansal",
    "city": "Udaipur",
    "age": 30,
    "avatar": "https://i.pravatar.cc/150?img=34"
  },
  
  {
    "name": "Aarav Mehta",
    "city": "Goa",
    "age": 24,
    "avatar": "https://i.pravatar.cc/150?img=35"
  },
  {
    "name": "Alisha Patel",
    "city": "Surat",
    "age": 29,
    "avatar": "https://i.pravatar.cc/150?img=36"
  },
  {
    "name": "Ravi Kumar",
    "city": "Kochi",
    "age": 33,
    "avatar": "https://i.pravatar.cc/150?img=37"
  },
  {
    "name": "Suman Yadav",
    "city": "Chandigarh",
    "age": 31,
    "avatar": "https://i.pravatar.cc/150?img=38"
  },
  {
    "name": "Nikita Sharma",
    "city": "Nagpur",
    "age": 26,
    "avatar": "https://i.pravatar.cc/150?img=39"
  },
  {
    "name": "Rohit Desai",
    "city": "Gurgaon",
    "age": 32,
    "avatar": "https://i.pravatar.cc/150?img=40"
  },
  {
    "name": "Preeti Verma",
    "city": "Bhopal",
    "age": 27,
    "avatar": "https://i.pravatar.cc/150?img=41"
  },
  {
    "name": "Vishal Gupta",
    "city": "Chennai",
    "age": 28,
    "avatar": "https://i.pravatar.cc/150?img=42"
  },
  {
    "name": "Sonali Joshi",
    "city": "Kolkata",
    "age": 30,
    "avatar": "https://i.pravatar.cc/150?img=43"
  },
  {
    "name": "Ankit Reddy",
    "city": "Hyderabad",
    "age": 35,
    "avatar": "https://i.pravatar.cc/150?img=44"
  },
  {
    "name": "Ritika Kapoor",
    "city": "Delhi",
    "age": 26,
    "avatar": "https://i.pravatar.cc/150?img=45"
  },
  {
    "name": "Karan Mehra",
    "city": "Lucknow",
    "age": 32,
    "avatar": "https://i.pravatar.cc/150?img=46"
  },
  {
    "name": "Tanvi Bansal",
    "city": "Indore",
    "age": 27,
    "avatar": "https://i.pravatar.cc/150?img=47"
  },
  {
    "name": "Shubham Bhatt",
    "city": "Mumbai",
    "age": 29,
    "avatar": "https://i.pravatar.cc/150?img=48"
  },
  {
    "name": "Pooja Joshi",
    "city": "Bengaluru",
    "age": 30,
    "avatar": "https://i.pravatar.cc/150?img=49"
  },
  {
    "name": "Ananya Singh",
    "city": "Ahmedabad",
    "age": 34,
    "avatar": "https://i.pravatar.cc/150?img=50"
  },
  {
    "name": "Raghav Yadav",
    "city": "Pune",
    "age": 28,
    "avatar": "https://i.pravatar.cc/150?img=51"
  },
  {
    "name": "Vandana Kapoor",
    "city": "Nagpur",
    "age": 33,
    "avatar": "https://i.pravatar.cc/150?img=52"
  },
  {
    "name": "Mohan Kumar",
    "city": "Jaipur",
    "age": 30,
    "avatar": "https://i.pravatar.cc/150?img=53"
  },
  {
    "name": "Swati Mehta",
    "city": "Chandigarh",
    "age": 32,
    "avatar": "https://i.pravatar.cc/150?img=54"
  },
  {
    "name": "Vikas Patel",
    "city": "Faridabad",
    "age": 27,
    "avatar": "https://i.pravatar.cc/150?img=55"
  },
  {
    "name": "Meenal Gupta",
    "city": "Kochi",
    "age": 29,
    "avatar": "https://i.pravatar.cc/150?img=56"
  },
  {
    "name": "Rishabh Joshi",
    "city": "Navi Mumbai",
    "age": 31,
    "avatar": "https://i.pravatar.cc/150?img=57"
  },
  {
    "name": "Deepika Sharma",
    "city": "Visakhapatnam",
    "age": 26,
    "avatar": "https://i.pravatar.cc/150?img=58"
  },
  {
    "name": "Harsha Rao",
    "city": "Kanpur",
    "age": 28,
    "avatar": "https://i.pravatar.cc/150?img=59"
  },
  {
    "name": "Siddhi Verma",
    "city": "Vishakhapatnam",
    "age": 30,
    "avatar": "https://i.pravatar.cc/150?img=60"
  },
  {
    "name": "Yash Mehta",
    "city": "Indore",
    "age": 33,
    "avatar": "https://i.pravatar.cc/150?img=61"
  },
  {
    "name": "Neelam Patel",
    "city": "Ahmedabad",
    "age": 29,
    "avatar": "https://i.pravatar.cc/150?img=62"
  },
  {
    "name": "Shreya Deshmukh",
    "city": "Mumbai",
    "age": 28,
    "avatar": "https://i.pravatar.cc/150?img=63"
  },
  {
    "name": "Naveen Kumar",
    "city": "Surat",
    "age": 31,
    "avatar": "https://i.pravatar.cc/150?img=64"
  },
  {
    "name": "Priti Patel",
    "city": "Delhi",
    "age": 27,
    "avatar": "https://i.pravatar.cc/150?img=65"
  },
  {
    "name": "Suresh Mehta",
    "city": "Kolkata",
    "age": 35,
    "avatar": "https://i.pravatar.cc/150?img=66"
  },
  {
    "name": "Ashwini Singh",
    "city": "Bhopal",
    "age": 30,
    "avatar": "https://i.pravatar.cc/150?img=67"
  },
  {
    "name": "Rekha Joshi",
    "city": "Pune",
    "age": 32,
    "avatar": "https://i.pravatar.cc/150?img=68"
  },
  {
    "name": "Saurabh Gupta",
    "city": "Hyderabad",
    "age": 28,
    "avatar": "https://i.pravatar.cc/150?img=69"
  },
  {
    "name": "Neha Sharma",
    "city": "Chandigarh",
    "age": 29,
    "avatar": "https://i.pravatar.cc/150?img=70"
  }
];

export { USERS };
