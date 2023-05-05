import React from "react";
import styled from "styled-components";
import Card from "./cards/cards-receips";
import Filters from "./filters/filter-ingredients";

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f0f0f0;
  width: 300px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
  flex: 1;
  overflow-y: auto;
`;

const cardsData = [
  {
    title: "Card 1",
    description: "This is card 1",
  },
  {
    title: "Card 2",
    description: "This is card 2",
  },
  {
    title: "Card 3",
    description: "This is card 3",
  },
];

const RecipeSearch: React.FC = () => (
  <PageWrapper>
    <FiltersWrapper>
      <Filters />
    </FiltersWrapper>
    <CardsWrapper>
      {cardsData.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
        />
      ))}
    </CardsWrapper>
  </PageWrapper>
);

export default RecipeSearch;

// import Navbar from "../../components/organism/Navbar";
// import { Card } from "primereact/card";
// import { Chips } from "primereact/chips";
// import { useState } from "react";
// import { BntSearch } from "./styles";

// const RecipeSearch = () => {
//   const [searchValue, setSearchValue] = useState<string[]>([]);

//   return (
//     <>
//       <Navbar />
//       <div className="overflow-x-hidden">
//         <div className="col-12 justify-content-center flex">
//           <span className="p-float-label">
//             <Chips
//               id="search"
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.value ?? [])}
//             ></Chips>
//             <label htmlFor="search">Ingredientes</label>
//           </span>
//           <BntSearch>Buscar </BntSearch>
//         </div>
//         <div className="grid justify-content-center">
//           {Array(50)
//             .fill(0)
//             .map((_, index) => (
//               <Card className=" md:w-18rem m-3 " title="Teste" key={index}>
//                 Teste de card
//               </Card>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default RecipeSearch;
