import React from "react";
import Card from "./Card";
//import "./upcoming.css";

const Upcoming = () => {
  return (
    <div className="upcoming">
      <ul class="cards">
        <li class="cards_item">
          <Card
            image={`https://cdn.shopify.com/s/files/1/1728/5303/articles/ManIsaMountain_1024x1024.png?v=1521663025`}
            place="Darjeeling"
            route="Random--Random --Random --Random"
          />
        </li>
        <li class="cards_item">
          <Card
            image={
              "https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg"
            }
            place="Manali"
            route="Random--Random --Random --Random"
          />
        </li>
        <li class="cards_item">
          <Card
            image={
              "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            }
            place="Shimla"
            route="Random--Random --Random --Random"
          />
        </li>
      </ul>
    </div>
  );
};

export default Upcoming;
