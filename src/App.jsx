import { useState, useEffect } from "react";
import { USERS } from "./configs";
import { MapPin as MapPinIcon, Cake as CakeIcon } from "lucide-react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(USERS);
  const [cityFilter, setCityFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [isSearchFocused, setIsSearchFocused] = useState(false); // Track search input focus

  useEffect(() => {
    let tempFilteredUsers = USERS;

    if (searchTerm) {
      tempFilteredUsers = tempFilteredUsers.filter((user) => {
        return (
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.age.toString().includes(searchTerm)
        );
      });
    }

    if (cityFilter) {
      tempFilteredUsers = tempFilteredUsers.filter((user) =>
        user.city.toLowerCase().includes(cityFilter.toLowerCase())
      );
    }

    if (nameFilter) {
      tempFilteredUsers = tempFilteredUsers.filter((user) =>
        user.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    if (ageFilter) {
      if (ageFilter === "under30") {
        tempFilteredUsers = tempFilteredUsers.filter((user) => user.age < 30);
      } else if (ageFilter === "30to40") {
        tempFilteredUsers = tempFilteredUsers.filter(
          (user) => user.age >= 30 && user.age <= 40
        );
      } else if (ageFilter === "above40") {
        tempFilteredUsers = tempFilteredUsers.filter((user) => user.age > 40);
      }
    }

    tempFilteredUsers.sort((a, b) => {
      const comparison = a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      return sortOrder === "ascending" ? comparison : -comparison;
    });

    setFilteredUsers(tempFilteredUsers);
  }, [searchTerm, cityFilter, nameFilter, ageFilter, sortOrder]);

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h1 className="text-center text-blue-500 text-4xl font-bold py-5">Search and Filter</h1>

      <input
        type="search"
        placeholder="Search"
        className="w-full p-2 bg-white rounded-lg border border-gray-300 mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsSearchFocused(true)} // Track focus
        onBlur={() => setIsSearchFocused(false)} // Track blur
      />

      {isSearchFocused && searchTerm && (
        <p className="text-center text-gray-500 mb-5">
          {filteredUsers.length === 0
            ? "No user found"
            : `Found ${filteredUsers.length} user(s)`}
        </p>
      )}

      <div className="flex flex-wrap gap-4 mb-5">
        <select
          className="p-2 rounded-lg border w-full sm:w-auto"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value="">Filter by City</option>
          {USERS.map((user) => (
            <option key={user.city} value={user.city}>
              {user.city}
            </option>
          ))}
        </select>

        <select
          className="p-2 rounded-lg border w-full sm:w-auto"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        >
          <option value="">Filter by Name</option>
          {USERS.map((user) => (
            <option key={user.name} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>

        <select
          className="p-2 rounded-lg border w-full sm:w-auto"
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        >
          <option value="">Filter by Age</option>
          <option value="under30">Under 30</option>
          <option value="30to40">30 - 40</option>
          <option value="above40">Above 40</option>
        </select>

        <select
          className="p-2 rounded-lg border w-full sm:w-auto"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value=" descending">Ascending</option>
          <option value="ascending">Descending</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 w-full sm:w-72"
          >
            <img src={user.avatar} className="w-24 h-24 rounded-full" alt={user.name} />
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-bold text-blue-500">{user.name}</h2>
              <div className="flex flex-col space-y-1 text-gray-500">
                <p className="flex items-center">
                  <MapPinIcon className="inline mr-1" /> {user.city}
                </p>
                <p className="flex items-center">
                  <CakeIcon className="inline mr-1" /> {user.age}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
