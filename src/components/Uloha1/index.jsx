/*
Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.
*/

export const Uloha1 = () => {
  const handleClick = () => {
    alert('Ahoj!')
  }

  return <button onClick={handleClick}>Ukaž bublinu</button>;
};
