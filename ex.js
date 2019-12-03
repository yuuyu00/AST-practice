const f = () => {
  try {
    const [flagA, flagB, flagC] = [true, true, true];
    const piyovar = "piyo";
    if (flagA) {
      console.log(piyovar);
      if (flagB) {
        const hogehogevariable = 12;
        if (flagC) {
          console.log(hogehogevariable);
        }
      }
    }
  } catch {}
};
