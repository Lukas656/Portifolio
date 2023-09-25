import React from "react";
import { Routes, Route } from "react-router-dom"; 
 
import Home from "../../views/pages/Home";

import Login from "../../views/pages/Login";
import Thebatman from "../../views/pages/TheBatman";
import Filmes from "../../views/pages/Filmes";
import Basquetball from "../../views/pages/Basquetball";
import Coutdow from "../../views/pages/Coutdow";
import ClonePrime from "../../views/pages/ClonePrime";
import Switcher from "../../views/pages/Switcher";
import Church  from "../../views/pages/ProjetChurch";
import Veterinario  from "../../views/pages/Veterinario";
import SocialTree  from "../../views/pages/SocialTree";
import RocketShoes  from "../../views/pages/RocketShoes";
import Stories  from "../../views/pages/Stories";
import Blog  from "../../views/pages/Blog";
import Game  from "../../views/pages/Game";
import Music  from "../../views/pages/Music";
import Time  from "../../views/pages/Tempo";
import Notfound  from "../../views/pages/Notfound";


const Content = props => (
    <div className="content">
     <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/thebatman" exact element={<Thebatman />} />
      <Route path="/filmes" exact element={<Filmes />} />
      <Route path="/basquetball" exact element={<Basquetball />} />
      <Route path="/coutdow" exact element={<Coutdow />} />
      <Route path="/cloneprime" exact element={<ClonePrime />} />
      <Route path="/switcher" exact element={<Switcher />} />
      <Route path="/church" exact element={<Church />} />
      <Route path="/veterinario" exact element={<Veterinario />} />
      <Route path="/socialtree" exact element={<SocialTree />} />
      <Route path="/rocketshoes" exact element={<RocketShoes />} />
      <Route path="/stories" exact element={<Stories />} />
      <Route path="/blog" exact element={<Blog />} />
      <Route path="/game" exact element={<Game />} />
      <Route path="/music" exact element={<Music />} />
      <Route path="/time" exact element={<Time />} />
      <Route path="*" exact element={<Notfound />} />
      
      
    </Routes>
   
    </div>
)

export default Content