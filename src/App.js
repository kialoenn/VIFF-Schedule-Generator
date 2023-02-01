import React from 'react';

import './App.css';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Content date="Jan 31" />
    </div>
  );
};

export default App;

// import React, { useState } from 'react';

// const Day = ({ date, movies }) => (
//   <div className="day">
//     <div className="date">{date}</div>
//     <ul>
//       {movies.map((movie, index) => (
//         <li key={index} className="movie">
//           <div className="time">{movie.time}</div>
//           <div className="title">{movie.title}</div>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const Schedule = () => {
//   const [schedule, setSchedule] = useState([
//     {
//       date: 'Monday',
//       movies: [
//         { title: 'The Shawshank Redemption', time: '2:00 PM' },
//         { title: 'The Godfather', time: '5:00 PM' }
//       ]
//     },
//     {
//       date: 'Tuesday',
//       movies: [
//         { title: 'The Godfather: Part II', time: '8:00 PM' },
//         { title: 'The Dark Knight', time: '11:00 PM' }
//       ]
//     }
//   ]);

//   return (
//     <div className="schedule">
//       {schedule.map((day, index) => (
//         <Day key={index} date={day.date} movies={day.movies} />
//       ))}
//     </div>
//   );
// };

// export default Schedule;