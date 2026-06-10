import React from "react";
import Header from "./Header";
import DisplayCounter from "./DisplayCounter";
import Container from "./Container";
import Controls from "./Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./PrivacyMessage";

const Home = () => {
  const privacy = useSelector(store=>store.privacy);
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-5 py-10">
      
      <Container>

        <div className="text-center space-y-8">
          
          <Header />

          {privacy ? <PrivacyMessage /> :<DisplayCounter />}

         <Controls />

        </div>

      </Container>

    </div>
  );
};

export default Home;