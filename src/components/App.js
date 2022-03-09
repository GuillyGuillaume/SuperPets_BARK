import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="general">
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen events={eventArr} friends={friendArr} />}></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/addEvent" element={<EventForm events={eventArr} />}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
            <Route path="*" element={<HomeScreen events={eventArr} friends={friendArr} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
