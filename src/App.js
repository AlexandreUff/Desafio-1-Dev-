import { useState } from 'react';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';

function App() {

  const [search,setSearch] = useState('');

  function coletorDeBusca(input){
    let str = input.toLowerCase();
        str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        
        /* setSearch(encodeURI(str)); */
        str = encodeURI(str);

        setSearch(str);
  }

  return (
    <>
    
      <Header capturaInput={coletorDeBusca}/>
      <Main dado={search}/>
      <Footer/>

    </>
  );
}

export default App;
