import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2023",
      color: "red",
      title: "Gotham Safety 101 Video",
      owner: "Bruce Wayne",
      avatar: "https://static.thenounproject.com/png/157453-200.png",
      status: "done",
      priority: 5,
      progress: 40,
      description:
        "Make a video showcasing how to work in gotham city safely, including how to avoid the joker",
      timestamp: "2023-03-18T07:36:17+0000",
    },
    {
      category: "Q1 2023",
      color: "red",
      title: "Build and Sell AI Model",
      owner: "Bruce Wayne",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMGkHGxcN-6yBarsxLw3XD-6o_YoGmpbh1Q&usqp=CAU",
      status: "working on it",
      priority: 2,
      progress: 70,
      description: "Make a video about AI",
      timestamp: "2023-03-25T07:36:17+0000",
    },
    {
      category: "Q2 2023",
      color: "blue",
      title: "Build and bot",
      owner: "Bruce Wayne",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMGkHGxcN-6yBarsxLw3XD-6o_YoGmpbh1Q&usqp=CAU",
      status: "working on it",
      priority: 3,
      progress: 20,
      description: "Make a video about making a bot",
      timestamp: "2023-03-15T07:36:17+0000",
    },
  ];

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,201)",
    "rgb(186,255,255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log(uniqueCategories);

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)

                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
